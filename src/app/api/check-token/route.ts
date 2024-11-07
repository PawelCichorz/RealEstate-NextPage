import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { config } from '../../config';

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { message: 'No token provided' },
        { status: 401 }
      );
    }

    jwt.verify(token, config.jwtSecret);
    return NextResponse.json({ message: 'Token is valid' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid token', error },
      { status: 401 }
    );
  }
}
