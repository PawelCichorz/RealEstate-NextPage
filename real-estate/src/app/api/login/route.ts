import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import User from '../../models/Users';
import dbConnect from '../../lib/mongodb'; // Ścieżka do połączenia z bazą danych

const accessTokenSecret = process.env.JWT_SECRET || 'secret';
const refreshTokenSecret = process.env.REFRESH_SECRET || 'secret';

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const { email, password } = await request.json();

    console.log(`Otrzymano żądanie logowania dla email: ${email}`);

    // Szukaj użytkownika w kolekcji users
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`Nie znaleziono użytkownika: ${email}`);
      return NextResponse.json({ message: 'Nieprawidłowy email lub hasło' }, { status: 400 });
    }

    // Sprawdź, czy hasło jest poprawne
    if (user.password !== password) {
      console.log(`Niepoprawne hasło dla użytkownika: ${email}`);
      return NextResponse.json({ message: 'Nieprawidłowy email lub hasło' }, { status: 400 });
    }

    // Generowanie tokenów
    const accessToken = jwt.sign({ id: user._id }, accessTokenSecret, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user._id }, refreshTokenSecret, { expiresIn: '7d' });

    console.log(`Pomyślnie wygenerowano tokeny dla użytkownika: ${email}`);

    // Ustawienie ciasteczka z tokenem dostępu
    const response = NextResponse.json({ success: true });
    response.cookies.set('accessToken', accessToken, {
      httpOnly: false,
      secure: true,
      path: '/',
      maxAge: 60 * 15, // 15 minut
    });

    // Możesz również ustawić refreshToken, jeśli potrzebujesz
    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 dni
    });

    return response;

  } catch (error) {
    console.error('Błąd w funkcji POST:', error);
    return NextResponse.json({ message: 'Wystąpił błąd serwera' }, { status: 500 });
  }
}
