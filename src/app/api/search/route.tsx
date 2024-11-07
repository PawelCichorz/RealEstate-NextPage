import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../lib/mongodb';
import Offer from '../../models/Offer';
import { FilterQuery } from 'mongoose';

const getFilter = (param: string, value: string | null) => {
  return value ? { [param]: value } : {};
};

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);

    const rodzaj = searchParams.get('rodzaj');
    const kategoria = searchParams.get('kategoria');
    const gmina = searchParams.get('gmina');
    const miejscowość = searchParams.get('miejscowość');
    const cenaMin = parseInt(searchParams.get('cenaMin') || '0', 10);
    const cenaMax = parseInt(searchParams.get('cenaMax') || 'Infinity', 10);
    const powierzchniaMin = parseInt(
      searchParams.get('powierzchniaMin') || '0',
      10
    );
    const powierzchniaMax = parseInt(
      searchParams.get('powierzchniaMax') || 'Infinity',
      10
    );

    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const skip = (page - 1) * limit;

    const filters: FilterQuery<typeof Offer> = {
      ...getFilter('rodzaj', rodzaj),
      ...getFilter('kategoria', kategoria),
      ...getFilter('gmina', gmina),
      ...getFilter('miejscowość', miejscowość),
      ...(isNaN(cenaMin) || isNaN(cenaMax)
        ? {}
        : { cena: { $gte: cenaMin, $lte: cenaMax } }),
      ...(isNaN(powierzchniaMin) || isNaN(powierzchniaMax)
        ? {}
        : { powierzchnia: { $gte: powierzchniaMin, $lte: powierzchniaMax } }),
    };
    console.log(filters);

    const offers = await Offer.find(filters!).skip(skip).limit(limit);

    const totalOffers = await Offer.countDocuments(filters);
    const totalPages = Math.ceil(totalOffers / limit);

    return NextResponse.json(
      {
        offers,
        totalPages,
        currentPage: page,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to fetch offers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch offers' },
      { status: 500 }
    );
  }
}
