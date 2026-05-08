import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("API received:", JSON.stringify(body));

  const { from_name, from_email, message } = body;
  console.log("Extracted - name:", from_name, "email:", from_email, "message:", message);

  if (!from_name || !from_email || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error("Missing EmailJS configuration");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  try {
    const emailjsPayload: Record<string, unknown> = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: { from_name, from_email, message },
    };

    if (privateKey) {
      emailjsPayload.accessToken = privateKey;
    }

    console.log("Sending to EmailJS:", JSON.stringify(emailjsPayload));

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailjsPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS error:", errorText);
      return NextResponse.json({ 
        error: "Email failed to send.",
        detail: errorText 
      }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EmailJS request failed:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
