import { NextResponse } from "next/server";
import prisma from "@/app/utils/db";

export async function GET(
    req: Request
) {
    try {
        const events = await prisma.event.findMany();
        return NextResponse.json(events);
    } catch (error) {
        console.log('[EVENTS]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

