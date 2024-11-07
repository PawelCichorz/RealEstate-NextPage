import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const refreshTokenSecret = process.env.REFRESH_SECRET || 'secret';
const accessTokenSecret = process.env.JWT_SECRET || 'secret';

export async function POST(request: NextRequest) {
  try {
    const { refreshToken } = await request.json();

    if (!refreshToken) {
      return NextResponse.json(
        { message: 'No refresh token provided' },
        { status: 401 }
      );
    }

    // Weryfikacja refresh tokenu
    const decoded = jwt.verify(refreshToken, refreshTokenSecret) as {
      id: string;
    };

    // Generowanie nowego access tokenu
    const newAccessToken = jwt.sign({ id: decoded.id }, accessTokenSecret, {
      expiresIn: '15m',
    });

    return NextResponse.json({ accessToken: newAccessToken });
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid refresh token' },
      { status: 401 }
    );
  }
}
