import { NextRequest, NextResponse } from "next/server";

// --- Rate Limiting (in-memory, per IP) ---
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60_000 }); // 1 min window
    return false;
  }

  if (entry.count >= 3) return true; // max 3 requests per minute
  entry.count++;
  return false;
}

// --- Email Validation ---
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  // 1. Rate limit check
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment before trying again." },
      { status: 429 }
    );
  }

  // 2. Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { from_name, from_email, message } = body as {
    from_name?: string;
    from_email?: string;
    message?: string;
  };

  // 3. Presence validation
  if (!from_name || !from_email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // 4. Type validation
  if (
    typeof from_name !== "string" ||
    typeof from_email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "Invalid field types." }, { status: 400 });
  }

  // 5. Length validation
  if (from_name.trim().length < 2) {
    return NextResponse.json({ error: "Name is too short." }, { status: 400 });
  }
  if (from_name.length > 100) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }
  if (message.trim().length < 10) {
    return NextResponse.json({ error: "Message is too short." }, { status: 400 });
  }
  if (message.length > 2000) {
    return NextResponse.json({ error: "Message is too long (max 2000 characters)." }, { status: 400 });
  }

  // 6. Email format validation
  if (!emailRegex.test(from_email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // 7. Env config check
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error("[Contact API] Missing EmailJS environment variables.");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  // 8. Send email via EmailJS
  try {
    const emailjsPayload: Record<string, unknown> = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: from_name.trim(),
        from_email: from_email.trim(),
        message: message.trim(),
      },
    };

    if (privateKey) {
      emailjsPayload.accessToken = privateKey;
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailjsPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Contact API] EmailJS failed:", errorText);
      return NextResponse.json({ error: "Email failed to send." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API] Unexpected error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}