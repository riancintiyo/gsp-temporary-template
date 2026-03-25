import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    website?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown) {
    return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ContactPayload;

        if (sanitize(body.website)) {
            return NextResponse.json({ ok: true, message: "Message sent successfully." });
        }

        const name = sanitize(body.name);
        const email = sanitize(body.email);
        const subject = sanitize(body.subject);
        const message = sanitize(body.message);

        if (!name || name.length < 2) {
            return NextResponse.json({ ok: false, message: "Please provide a valid full name." }, { status: 400 });
        }

        if (!email || !EMAIL_REGEX.test(email)) {
            return NextResponse.json({ ok: false, message: "Please provide a valid email address." }, { status: 400 });
        }

        if (!subject || subject.length < 3) {
            return NextResponse.json({ ok: false, message: "Please provide a valid subject." }, { status: 400 });
        }

        if (!message || message.length < 10) {
            return NextResponse.json({ ok: false, message: "Please provide a valid message." }, { status: 400 });
        }

        const resendApiKey = process.env.RESEND_API_KEY;
        const fromEmail = process.env.CONTACT_FROM_EMAIL;
        const toEmail = process.env.CONTACT_TO_EMAIL ?? "riancintiyo@generalscienceprogram.com";

        if (!resendApiKey || !fromEmail) {
            return NextResponse.json(
                {
                    ok: false,
                    message: "Email service is not configured. Please try again later.",
                },
                { status: 500 },
            );
        }

        const resend = new Resend(resendApiKey);

        await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: email,
            subject: `[GSP Contact] ${subject}`,
            text: ["You received a new message from the GSP website contact form.", "", `Full Name: ${name}`, `Email: ${email}`, `Subject: ${subject}`, "", "Message:", message].join("\n"),
        });

        return NextResponse.json({ ok: true, message: "Message sent successfully." });
    } catch {
        return NextResponse.json(
            {
                ok: false,
                message: "Something went wrong while sending your message.",
            },
            { status: 500 },
        );
    }
}
