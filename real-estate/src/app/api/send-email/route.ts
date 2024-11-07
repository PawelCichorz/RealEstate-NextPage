// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'example@example.com',
      subject: 'Formularz Kontaktowy',
      text: `Imię: ${name}\nEmail: ${email}\nWiadomość: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Wiadomość wysłana!' });
  } catch (error) {
    console.error('Błąd przy wysyłaniu wiadomości:', error);
    return NextResponse.json(
      { message: 'Wystąpił błąd przy wysyłaniu wiadomości.' },
      { status: 500 }
    );
  }
}
