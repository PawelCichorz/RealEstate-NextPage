import { NextRequest, NextResponse } from 'next/server';
import Offer from '../../../../models/Offer';
import dbConnect from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
  } catch (error) {
    console.error('Failed to connect to database:', error);
    return NextResponse.json(
      { error: 'Database connection failed' },
      { status: 500 }
    );
  }

  const { id } = params;

  let offer;
  try {
    offer = await Offer.findById(new ObjectId(id));

    if (!offer) {
      return NextResponse.json({ message: 'Offer not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching offer:', error);
    return NextResponse.json(
      { error: 'Failed to fetch offer' },
      { status: 500 }
    );
  }

  // Próba usunięcia oferty
  try {
    await Offer.deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json(
      { message: 'Offer deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to delete offer:', error);
    return NextResponse.json(
      { error: 'Failed to delete offer' },
      { status: 500 }
    );
  }
}
