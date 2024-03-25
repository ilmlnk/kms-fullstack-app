import { db } from "@/lib/db";
import { NextResponse } from "next/server";

/* mark absence */
export async function PUT(
    req: Request,
    { params }: { params: { childrenId: number } }
) {
    try {
        const absence = await db.child.update({
            where: {
                id: params.childrenId,
            },
            data: {
                attendance_status: false,
            },
        });
        return NextResponse.json(absence);
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}