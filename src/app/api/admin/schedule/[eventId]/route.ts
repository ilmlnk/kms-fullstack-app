import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(
    req: Request,
) {
    try {
        const body = await req.json();
        const updatedEvent = await db.event.update({
            where: {
                id: body.id
            },
            data: {
                ...body
            }
        });

        return NextResponse.json(updatedEvent);
    } catch (error) {
        console.error('[SCHEDULE]', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}