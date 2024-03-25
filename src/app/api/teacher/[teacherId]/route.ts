import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
    req: Request,
    { params }: { params: { eventId: number } }
) {
    try {
        const { eventId } = params;
        const event = await db.event.findUnique({
            where: {
                id: eventId
            }
        });
        return NextResponse.json(event);
    } catch (error) {
        console.error("[EVENTS]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}