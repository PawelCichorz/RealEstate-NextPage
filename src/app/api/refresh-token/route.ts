import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { config } from '../../config';

export async function POST(request: NextRequest) {
  try {
    const { refreshToken } = await request.json();

    if (!refreshToken) {
      return NextResponse.json(
        { message: 'No refresh token provided' },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(refreshToken, config.refreshSecret) as {
      id: string;
    };

    const newAccessToken = jwt.sign({ id: decoded.id }, config.jwtSecret, {
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
