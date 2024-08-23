import { NextRequest, NextResponse } from 'next/server';
import Offer from '../../../models/Offer'; // Ścieżka do modelu oferty
import dbConnect from '../../../lib/mongodb'; // Ścieżka do połączenia z bazą danych
import { ObjectId } from 'mongodb'; // Import ObjectId do weryfikacji ID

export async function GET(request: NextRequest) {
  // Wyciąganie ID z parametrów URL
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop(); // Pobierz ID z URL

  // Sprawdzenie, czy ID jest prawidłowe
  if (!id || !ObjectId.isValid(id)) {
    return NextResponse.json({ message: 'Invalid offer ID' }, { status: 400 });
  }

  try {
    await dbConnect(); // Połączenie z bazą danych
    console.log('Database connected successfully');

    // Pobranie oferty z bazy danych na podstawie ID
    const offer = await Offer.findOne({ _id: new ObjectId(id) });

    // Sprawdzenie, czy oferta została znaleziona
    if (!offer) {
      return NextResponse.json({ message: 'Offer not found' }, { status: 404 });
    }

    return NextResponse.json(offer, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch offer:', error);
    return NextResponse.json({ error: 'Failed to fetch offer' }, { status: 500 });
  }
}
