import { NextRequest, NextResponse } from 'next/server';
import Offer from '../../models/Offer';
import dbConnect from '../../lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    console.log('Database connected successfully');

    // Pobieranie parametrów zapytania
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;
    const promote = searchParams.get('promote') === 'true';

    // Budowanie zapytania
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};
    if (promote) {
      query.promote = true;
    }

    // Pobieranie ofert z paginacją
    const offers = await Offer.find(query).skip(skip).limit(limit);

    // Liczba wszystkich ofert, aby móc wyliczyć całkowitą liczbę stron
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
