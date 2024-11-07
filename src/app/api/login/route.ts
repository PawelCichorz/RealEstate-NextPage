import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import User from '../../models/Users';
import dbConnect from '../../lib/mongodb';
import { config } from '../../config';

export async function POST(request: Request) {
  try {
    await dbConnect();

    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      console.log(`Nie znaleziono użytkownika: ${email}`);
      return NextResponse.json(
        { message: 'Nieprawidłowy email lub hasło' },
        { status: 400 }
      );
    }

    if (user.password !== password) {
      console.log(`Niepoprawne hasło dla użytkownika: ${email}`);
      return NextResponse.json(
        { message: 'Nieprawidłowy email lub hasło' },
        { status: 400 }
      );
    }

    const accessToken = jwt.sign({ id: user._id }, config.jwtSecret, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign({ id: user._id }, config.refreshSecret, {
      expiresIn: '7d',
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set('accessToken', accessToken, {
      httpOnly: false,
      secure: true,
      path: '/',
      maxAge: 60 * 15,
    });

    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: false,
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error('Błąd w funkcji POST:', error);
    return NextResponse.json(
      { message: 'Wystąpił błąd serwera' },
      { status: 500 }
    );
  }
}
