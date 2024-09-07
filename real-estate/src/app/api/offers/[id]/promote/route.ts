import { NextRequest, NextResponse } from 'next/server';
import Offer from '../../../../models/Offer'; // Ścieżka do modelu oferty
import dbConnect from '../../../../lib/mongodb'; // Ścieżka do połączenia z bazą danych
import { ObjectId } from 'mongodb'; // Import ObjectId do weryfikacji ID

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect(); // Połącz z bazą danych

  const { id } = params;

  try {
    // Sprawdź, czy oferta istnieje w bazie danych
    const offer = await Offer.findById(new ObjectId(id));
    if (!offer) {
      return NextResponse.json({ message: 'Offer not found' }, { status: 404 });
    }

    // Liczba promowanych ofert
    const promotedOffersCount = await Offer.countDocuments({ promote: true });

    if (!offer.promote && promotedOffersCount >= 5) {
      return NextResponse.json(
        { message: 'Maximum of 5 promoted offers allowed' },
        { status: 400 }
      );
    }

    // Ustaw flagę promowania
    const updatedOffer = await Offer.updateOne(
      { _id: new ObjectId(id) },
      { $set: { promote: !offer.promote } } // Toggle the promote status
    );

    return NextResponse.json(updatedOffer);
  } catch (error) {
    console.error('Failed to update offer promotion:', error);
    return NextResponse.json(
      { error: 'Failed to update offer promotion' },
      { status: 500 }
    );
  }
}
