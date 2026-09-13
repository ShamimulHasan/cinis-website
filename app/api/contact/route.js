import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { appendEnquiryRow } from "@/lib/googleSheets";

// POST /api/contact
// Real backend logic for the contact form: validates the payload, then
// (a) appends it as a row in a Google Sheet, so enquiries build up into a
// running datasheet over time, and (b) emails it to the business inbox via
// SMTP for an immediate notification. Configure the SMTP_* / CONTACT_TO_EMAIL
// and GOOGLE_* environment variables (see .env.example / README.md).
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
  const smtpConfigured = SMTP_HOST && SMTP_USER && SMTP_PASS;

  async function sendNotificationEmail() {
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
  }

  // The sheet write and the email are independent — one failing shouldn't
  // stop the other, and either one succeeding counts as the enquiry landing
  // somewhere a human will see it.
  const [sheetResult, emailResult] = await Promise.allSettled([
    appendEnquiryRow({ name, email, phone, service, message }),
    smtpConfigured
      ? sendNotificationEmail()
      : Promise.resolve({ skipped: true }),
  ]);

  const sheetOk = sheetResult.status === "fulfilled";
  const sheetSkipped = sheetOk && sheetResult.value?.skipped;
  const emailOk = emailResult.status === "fulfilled";
  const emailSkipped = !smtpConfigured;

  if (sheetResult.status === "rejected") {
    console.error("[contact form] Failed to append to Google Sheet:", sheetResult.reason);
  }
  if (emailResult.status === "rejected") {
    console.error("[contact form] Failed to send email:", emailResult.reason);
  }

  // Nothing is configured yet (local dev, or setup still in progress) — log
  // it instead of crashing so the form stays testable end-to-end.
  if (sheetSkipped && emailSkipped) {
    console.log("[contact form] Nothing configured — logging enquiry instead:", {
      name, email, phone, service, message,
    });
    return NextResponse.json({
      ok: true,
      note: "Received (email/sheet not configured yet — see README.md).",
    });
  }

  const sheetFailed = sheetResult.status === "rejected";
  const emailFailed = smtpConfigured && emailResult.status === "rejected";

  // Only fail the request if every configured channel failed.
  const allConfiguredChannelsFailed =
    (sheetSkipped || sheetFailed) && (emailSkipped || emailFailed);

  if (allConfiguredChannelsFailed) {
    return NextResponse.json(
      { error: "We couldn't send your enquiry right now. Please call us on 1300 933 063." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
