import { NextRequest, NextResponse } from 'next/server';
import Offer from '../../../../models/Offer'; // Ścieżka do modelu oferty
import dbConnect from '../../../../lib/mongodb'; // Ścieżka do połączenia z bazą danych
import { ObjectId } from 'mongodb'; // Import ObjectId do weryfikacji ID

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect(); // Połącz z bazą danych

  const { id } = params;
  console.log(id); // Debugowanie, sprawdzenie ID

  try {
    // Sprawdź, czy oferta istnieje w bazie danych
    const offer = await Offer.findById(new ObjectId(id));
    
    if (!offer) {
      return NextResponse.json({ message: 'Offer not found' }, { status: 404 });
    }

    // Usuń ofertę z bazy danych
    await Offer.deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ message: 'Offer deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to delete offer:', error);
    return NextResponse.json({ error: 'Failed to delete offer' }, { status: 500 });
  }
}
