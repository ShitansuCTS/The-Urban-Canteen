
import { NextResponse } from "next/server";
import { sendReservationEmail } from "@/lib/email";

export async function POST(request) {
    try {
        const { name, people, phone, date } = await request.json();

        // Validate required fields
        if (
            !name?.trim() ||
            !people?.trim() ||
            !phone?.trim() ||
            !date?.trim()
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill in all required fields.",
                },
                { status: 400 }
            );
        }

        // Validate number of people
        const allowedPeople = ["1-people", "2-people", "3-people"];

        if (!allowedPeople.includes(people)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please select a valid number of people.",
                },
                { status: 400 }
            );
        }

        // Validate phone number
        const phoneRegex = /^\+?[0-9\s()-]{7,20}$/;

        if (!phoneRegex.test(phone.trim())) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter a valid phone number.",
                },
                { status: 400 }
            );
        }

        // Validate date format and actual calendar date
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        const parsedDate = new Date(`${date}T00:00:00.000Z`);

        if (
            !dateRegex.test(date) ||
            Number.isNaN(parsedDate.getTime()) ||
            parsedDate.toISOString().slice(0, 10) !== date
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please select a valid reservation date.",
                },
                { status: 400 }
            );
        }

        // Send reservation request email
        await sendReservationEmail({
            name: name.trim(),
            people,
            phone: phone.trim(),
            date,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Your reservation request has been submitted successfully! We will contact you shortly.",
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Reservation API Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to submit your reservation request. Please try again.",
            },
            { status: 500 }
        );
    }
}
