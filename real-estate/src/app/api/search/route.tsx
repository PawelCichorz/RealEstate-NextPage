import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../lib/mongodb'; // Ścieżka do połączenia z bazą danych
import Offer from '../../models/Offer'; // Ścieżka do modelu oferty

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);

    // Pobranie kryteriów wyszukiwania z query parameters
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

    // Parametry paginacji
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const skip = (page - 1) * limit;

    // Tworzenie obiektu filtru w zależności od przekazanych kryteriów
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filters: any = {};

    if (rodzaj) filters.rodzaj = rodzaj;
    if (kategoria) filters.kategoria = kategoria;
    if (gmina) filters.gmina = gmina;
    if (miejscowość) filters.miejscowość = miejscowość;
    if (!isNaN(cenaMin) && !isNaN(cenaMax)) {
      filters.cena = { $gte: cenaMin, $lte: cenaMax };
    }
    if (!isNaN(powierzchniaMin) && !isNaN(powierzchniaMax)) {
      filters.powierzchnia = { $gte: powierzchniaMin, $lte: powierzchniaMax };
    }

    // Wyszukiwanie ofert w bazie danych na podstawie kryteriów, z uwzględnieniem paginacji
    const offers = await Offer.find(filters)
      .skip(skip) // Pomija wcześniejsze strony
      .limit(limit); // Zwraca tylko określoną liczbę ofert

    // Liczenie łącznej liczby ofert spełniających kryteria (bez paginacji)
    const totalOffers = await Offer.countDocuments(filters);
    const totalPages = Math.ceil(totalOffers / limit);

    // Zwracanie odpowiedzi z danymi ofert, aktualną stroną i łączną liczbą stron
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
