import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const events = await db.event.findMany({
            orderBy: {
                starting_date: 'asc'
            }
        });
        return NextResponse.json(events);
    } catch (error) {
        console.error('[SCHEDULE]', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

