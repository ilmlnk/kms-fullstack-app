import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const events = await db.event.findMany();
        return NextResponse.json(events);
    } catch (error) {
        console.log('[EVENTS]', error);
        return new NextResponse("Failed to fetch events", { status: 500 });
    }
}