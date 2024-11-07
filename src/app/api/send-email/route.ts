import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { config } from '../../config';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: config.emailUser,
        pass: config.emailPass,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: 'pawelcichorz74@gmail.com',
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
