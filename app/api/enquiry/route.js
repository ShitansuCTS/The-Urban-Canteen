
import { NextResponse } from "next/server";
import { sendContactEnquiryEmail } from "@/lib/email";

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // Validate required fields
        if (
            !name?.trim() ||
            !email?.trim() ||
            !message?.trim()
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill in all required fields.",
                },
                { status: 400 }
            );
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.trim())) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter a valid email address.",
                },
                { status: 400 }
            );
        }

        // Send contact enquiry email
        await sendContactEnquiryEmail({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
        });

        return NextResponse.json(
            {
                success: true,
                message: "Your enquiry has been sent successfully!",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact Enquiry API Error:", error);

        return NextResponse.json(
            {
                success: false,
                message:
                    "Unable to send your enquiry right now. Please try again.",
            },
            { status: 500 }
        );
    }
}
