import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const accessTokenSecret = process.env.JWT_SECRET || 'secret';
console.log(accessTokenSecret);
export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { message: 'No token provided' },
        { status: 401 }
      );
    }

    // Weryfikacja tokenu
    jwt.verify(token, accessTokenSecret);
    return NextResponse.json({ message: 'Token is valid' });
  } catch (error) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}
