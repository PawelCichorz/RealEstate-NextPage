import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import Offer from '../../models/Offer'; // Ścieżka do modelu oferty
import dbConnect from '../../lib/mongodb'; // Ścieżka do połączenia z bazą danych

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    console.log('Database connected successfully');

    // Parse the FormData
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());

    // Handle files
    const files = formData.getAll('images') as File[];
    const imageUrls: string[] = [];

    if (files.length > 0) {
      for (const file of files) {
        if (file.size > 10 * 1024 * 1024) {
          // Sprawdzamy rozmiar pliku (10 MB)
          return NextResponse.json(
            { error: 'Plik nie może być większy niż 10 MB' },
            { status: 400 }
          );
        }

        // Define the path for saving the file
        const uploadDir = path.join(process.cwd(), 'public/assets/image');

        // Ensure the directory exists
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, file.name);
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(filePath, buffer);
        imageUrls.push(`/assets/image/${file.name}`);
        console.log('Uploaded file:', filePath);
      }
    }

    // Create offer data
    const offerData = {
      ...data,
      imageUrls, // Note that we are storing an array of image URLs
      promote: false,
      date: new Date(),
    };

    console.log('Offer Data:', offerData);

    const newOffer = await Offer.create(offerData);
    return NextResponse.json(newOffer, { status: 201 });
  } catch (error) {
    console.error('Failed to create offer:', error);
    return NextResponse.json(
      { error: 'Failed to create offer' },
      { status: 400 }
    );
  }
}
