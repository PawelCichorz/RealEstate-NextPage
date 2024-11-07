import { NextRequest, NextResponse } from 'next/server';
import Offer from '../../models/Offer';
import dbConnect from '../../lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;
    const promote = searchParams.get('promote') === 'true';

    const query: Record<string, unknown> = promote ? { promote: true } : {};

    const offers = await Offer.find(query).skip(skip).limit(limit);

    const totalOffers = await Offer.countDocuments(query);

    return NextResponse.json(
      {
        offers,
        totalPages: Math.ceil(totalOffers / limit),
        currentPage: page,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to fetch offers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch offers' },
      { status: 400 }
    );
  }
}
