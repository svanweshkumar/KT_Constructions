import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

interface EnquiryRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (character) => {
    const replacements: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return replacements[character] ?? character;
  });
}

export const Route = createFileRoute("/api/send-enquiry")({
  server: {
    handlers: {
      POST: ({ request }) => handlePost(request),
    },
  },
});

function json(data: unknown, init?: ResponseInit) {
  const headers = new Headers(init?.headers);
  headers.set("content-type", "application/json");
  return new Response(JSON.stringify(data), { ...init, headers });
}

async function handlePost(request: Request) {
  try {
    const resendApiKey = process.env["RESEND_API_KEY"];
    if (!resendApiKey) {
      return json({ error: "Missing RESEND_API_KEY configuration" }, { status: 500 });
    }

    const fromEmail = process.env["RESEND_FROM_EMAIL"] ?? "onboarding@resend.dev";
    const toEmail = process.env["RESEND_TO_EMAIL"] ?? "ashokkt1994@gmail.com";
    const resend = new Resend(resendApiKey);

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return json({ error: "Invalid request body" }, { status: 400 });
    }

    const { name, email, phone, message } = body as Partial<EnquiryRequest>;
    const isNonEmptyString = (value: unknown): value is string =>
      typeof value === "string" && value.trim().length > 0;

    if (
      !isNonEmptyString(name) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(phone) ||
      !isNonEmptyString(message)
    ) {
      return json({ error: "Missing required fields" }, { status: 400 });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();
    const cleanMessage = message.trim();
    if (
      cleanName.length > 120 ||
      cleanEmail.length > 254 ||
      cleanPhone.length > 40 ||
      cleanMessage.length > 5000
    ) {
      return json({ error: "One or more fields are too long" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return json({ error: "Invalid email address" }, { status: 400 });
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Project Enquiry from ${cleanName}`,
      html: `
        <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; color: #1a1a1a;">
          <h2 style="color: #d97706; margin-bottom: 24px;">New Enquiry from KT Construction Website</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0;">
              <strong>Name:</strong> ${escapeHtml(cleanName)}
            </p>
            <p style="margin: 0 0 12px 0;">
              <strong>Email:</strong> <a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a>
            </p>
            <p style="margin: 0 0 12px 0;">
              <strong>Phone:</strong> <a href="tel:${escapeHtml(cleanPhone)}">${escapeHtml(cleanPhone)}</a>
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="color: #333; margin-bottom: 12px;">Project Details:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">
              ${escapeHtml(cleanMessage)}
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />
          
          <p style="font-size: 12px; color: #888; margin: 0;">
            This enquiry was sent through the KT Construction website. 
            Please respond to the contact details above.
          </p>
        </div>
      `,
      reply_to: cleanEmail,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      return json({ error: "Failed to send enquiry" }, { status: 500 });
    }

    return json({ success: true, id: data.data?.id });
  } catch (error) {
    console.error("API error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}