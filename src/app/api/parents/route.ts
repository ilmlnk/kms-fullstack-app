import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
) {
    try {
        const parents = await db.parent.findMany();
        return NextResponse.json(parents);
    } catch (error) {
        console.log('[EVENTS]', error);
        return new NextResponse("Failed to fetch events", { status: 500 });
    }
}