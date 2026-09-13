import { createSign } from "crypto";

// Appends contact-form enquiries as rows in a Google Sheet, so they build up
// into a running datasheet over time (not just a one-off email).
//
// No googleapis dependency — a service account JWT is short-lived and easy
// enough to sign with Node's built-in `crypto`, then the Sheets REST API is
// just a couple of fetch calls. See README.md for how to create the service
// account and share the sheet with it.

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function getAccessToken(clientEmail, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  );
  const signingInput = `${header}.${claims}`;

  const signature = createSign("RSA-SHA256")
    .update(signingInput)
    .sign(privateKey, "base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${signingInput}.${signature}`,
    }),
  });

  if (!res.ok) {
    throw new Error(`Google token request failed: ${res.status} ${await res.text()}`);
  }
  return (await res.json()).access_token;
}

// Returns { skipped: true } if the GOOGLE_* env vars aren't set yet, so
// callers can fall back gracefully instead of crashing.
export async function appendEnquiryRow({ name, email, phone, service, message }) {
  const {
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEET_ID,
    GOOGLE_SHEET_NAME,
  } = process.env;

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    return { skipped: true };
  }

  const privateKey = GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
  const accessToken = await getAccessToken(GOOGLE_SERVICE_ACCOUNT_EMAIL, privateKey);

  const sheetName = GOOGLE_SHEET_NAME || "Enquiries";
  const range = encodeURIComponent(`${sheetName}!A:F`);
  const timestamp = new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" });

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[timestamp, name, email, phone, service || "Not specified", message]],
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`Sheets append failed: ${res.status} ${await res.text()}`);
  }
  return { skipped: false };
}
