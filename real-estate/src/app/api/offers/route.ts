import { NextRequest, NextResponse } from 'next/server';
import Offer from '../../models/Offer'; // Ścieżka do modelu oferty
import dbConnect from '../../lib/mongodb'; // Ścieżka do połączenia z bazą danych

export async function GET() {
  try {
    await dbConnect();
    console.log('Database connected successfully');

    const offers = await Offer.find(); 
    return NextResponse.json(offers, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch offers:', error);
    return NextResponse.json({ error: 'Failed to fetch offers' }, { status: 400 });
  }
}
