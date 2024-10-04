// app/api/sendMail/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // SMTP sunucusu
    port: 465, // TLS için 587, SSL için 465
    secure: true, // true ise SSL portu kullanılır
    auth: {
      user: process.env.NEXT_EMAIL_USER, // Alan adınıza ait e-posta adresi
      pass: process.env.NEXT_EMAIL_PASS, // E-posta şifreniz
    },
  });

  const mailOptions = {
    from: process.env.NEXT_EMAIL_USER, // Gönderici
    to: process.env.NEXT_EMAIL_USER, // Alıcı (genellikle kendi adresiniz)
    subject: `Yeni iletişim formu mesajı: ${name}`,
    text: `
      İsim & Soyisim: ${name}
      E-posta: ${email}
      Telefon: ${phone}
      Mesaj: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "E-posta başarıyla gönderildi!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "E-posta gönderimi başarısız oldu." },
      { status: 500 }
    );
  }
}
