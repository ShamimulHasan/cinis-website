import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST /api/contact
// Real backend logic for the contact form: validates the payload, then
// emails it to the business inbox via SMTP. Configure the SMTP_* and
// CONTACT_TO_EMAIL environment variables (see .env.example / README.md).
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, service, message } = body || {};

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, phone and a short message." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
  } = process.env;

  const toAddress = CONTACT_TO_EMAIL || "cinis@csocs.com.au";

  // If SMTP isn't configured yet (e.g. running locally without env vars),
  // log the enquiry instead of crashing, so the form is still testable.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log("[contact form] SMTP not configured — logging enquiry instead:", {
      name, email, phone, service, message,
    });
    return NextResponse.json({
      ok: true,
      note: "Received (SMTP not configured yet — see README.md to enable real email delivery).",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"CINI'S Website" <${SMTP_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `New enquiry from ${name} — ${service || "General enquiry"}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service || "Not specified"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact form] Failed to send email:", err);
    return NextResponse.json(
      { error: "We couldn't send your enquiry right now. Please call us on 1300 933 063." },
      { status: 502 }
    );
  }
}
