import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { subject, message, email } = await request.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: "hridoyemtiaz0@gmail.com",
        pass: "abhq lats bbfs vndp",
      },
    });

    const mailOption = {
      from: email,
      to: "asif85936980@gmail.com",
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 10px; background-color: #f9f9f9;">
          <header style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #4CAF50;">Hello Saiyed Imtiaj,</h2>
          </header>
          
          <section style="background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h3 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px; margin-bottom: 20px;">You have a new message</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 10px;">
                <strong style="color: #4CAF50;">Subject:</strong> ${subject}
              </li>
              <li>
                <strong style="color: #4CAF50;">Message:</strong> ${message}
              </li>
            </ul>
          </section>

          <footer style="text-align: center; margin-top: 30px;">
            <p style="font-size: 14px; color: #777;">
              Sent from <strong>${email}</strong>
            </p>
            <p style="font-size: 12px; color: #aaa;">
              &copy; 2024 imtiaj. All rights reserved.
            </p>
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
