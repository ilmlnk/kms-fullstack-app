import { NextResponse } from "next/server";
import prisma from "@/app/utils/db";

export async function POST(
    req: Request
) {
    try {
        const { title, description, startTime, endTime } = await req.json();
        const event = await prisma.event.create({
            data: {
                title: title,
                description: description,
                starting_date: startTime,
                ending_date: endTime,
            },

        });
    } catch (error) {
        console.log('[EVENTS]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}