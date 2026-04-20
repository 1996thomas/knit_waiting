import { NextResponse } from "next/server";

const MAILERLITE_URL = "https://connect.mailerlite.com/api/subscribers";

type SubscribePayload = {
  email?: string;
  locale?: "en" | "fr";
};

export async function POST(request: Request) {
  const apiKey = process.env.MAILER_LITE;
  const groupId = process.env.MAILER_LITE_GROUP_ID;

  if (!apiKey || !groupId) {
    return NextResponse.json(
      { error: "Configuration MailerLite manquante." },
      { status: 500 },
    );
  }

  let payload: SubscribePayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload invalide." }, { status: 400 });
  }

  const email = payload.email?.trim().toLowerCase();
  const locale = payload.locale === "fr" ? "fr" : "en";

  if (!email) {
    return NextResponse.json(
      { error: locale === "fr" ? "Email requis." : "Email is required." },
      { status: 400 },
    );
  }

  const mailerLiteResponse = await fetch(MAILERLITE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      groups: [groupId],
      status: "active",
    }),
  });

  if (!mailerLiteResponse.ok) {
    const errorText = await mailerLiteResponse.text();

    return NextResponse.json(
      {
        error:
          locale === "fr"
            ? "Impossible de finaliser l'inscription pour le moment. Reessaie plus tard."
            : "We could not complete your subscription right now. Please try again later.",
        details: errorText,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message:
      locale === "fr"
        ? "Inscription validee. Merci et a tres vite."
        : "Subscription confirmed. Thanks, see you soon.",
  });
}
