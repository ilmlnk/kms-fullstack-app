import prisma from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {
    try {
        const { eventId } = await req.json();
        const event = await prisma.event.findUnique({
            where: {
                id: eventId
            }
        });
        return NextResponse.json(event);
    } catch (error) {
        console.log('[EVENTS]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function PATCH(
    req: Request
) {
    try {
        const { eventId } = await req.json();
        const event = await prisma.event.update({
            where: {
                id: eventId
            },
            data: {
                title: "New Title"
            }
        });
        return NextResponse.json(event);
    } catch (error) {
        console.log('[EVENTS]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}