import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use "gmail" for Gmail, or configure SMTP manually
      auth: {
        user: process.env.NODE_MAILER_USER, // Replace with your email
        pass: process.env.NODE_MAILER_PASSWORD, // Replace with your app-specific password (not your real password)
      },
    });

    const mailOptions = {
      from: process.env.NODE_MAILER_USER,
      to: process.env.NODE_MAILER_USER,
      subject: `The mail from ${name},${email}`,
      text: `from ${email}\n\n${message} `,
    };

    transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { message: "Error while sending the email" },
      { status: 500 }
    );
  }
}
