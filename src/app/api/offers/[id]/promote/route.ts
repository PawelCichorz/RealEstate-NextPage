import { NextRequest, NextResponse } from 'next/server';
import Offer from '../../../../models/Offer';
import dbConnect from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const { id } = params;

  try {
    const offer = await Offer.findById(new ObjectId(id));
    if (!offer) {
      return NextResponse.json({ message: 'Offer not found' }, { status: 404 });
    }

    const promotedOffersCount = await Offer.countDocuments({ promote: true });

    if (!offer.promote && promotedOffersCount >= 5) {
      return NextResponse.json(
        { message: 'Maximum of 5 promoted offers allowed' },
        { status: 400 }
      );
    }

    const updatedOffer = await Offer.updateOne(
      { _id: new ObjectId(id) },
      { $set: { promote: !offer.promote } }
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
