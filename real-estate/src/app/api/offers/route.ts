import { NextResponse } from 'next/server';
import connectToDatabase from '../../lib/mongodb';
import Offer from '../../models/Offer';

export async function GET() {
  try {
    await connectToDatabase();
    const offers = await Offer.find({}).lean();
    return NextResponse.json(offers);
  } catch (err) {
    console.error('Błąd podczas pobierania danych:', err);
    return NextResponse.error();
  }
}