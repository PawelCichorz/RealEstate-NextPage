import { NextRequest, NextResponse } from 'next/server';
import Offer from '../../../models/Offer';
import dbConnect from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id || !ObjectId.isValid(id)) {
    return NextResponse.json({ message: 'Invalid offer ID' }, { status: 400 });
  }

  try {
    await dbConnect();

    const offer = await Offer.findOne({ _id: new ObjectId(id) });

    if (!offer) {
      return NextResponse.json({ message: 'Offer not found' }, { status: 404 });
    }

    return NextResponse.json(offer, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch offer:', error);
    return NextResponse.json(
      { error: 'Failed to fetch offer' },
      { status: 500 }
    );
  }
}
