import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validators";

/**
 * Demo endpoint for the contact form.
 * It validates the payload on the server and returns success.
 * To make it real, send an email here (Resend, Nodemailer, ...) or store the lead.
 */
export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const values = {
    name: String(body?.name ?? ""),
    email: String(body?.email ?? ""),
    message: String(body?.message ?? ""),
  };

  const errors = validateContactForm(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  return NextResponse.json({ ok: true });
}
