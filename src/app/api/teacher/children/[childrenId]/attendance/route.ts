import { db } from "@/lib/db"
import { NextResponse } from "next/server"

/* mark attendance */
export async function PUT(
    req: Request,
    { params }: { params: { childrenId: number } }
) {
    try {
        const attendance = await db.child.update({
            where: {
                id: params.childrenId
            },
            data: {
                attendance_status: true
            }
        });
        return NextResponse.json(attendance);
    } catch (error) {
        console.log('[CHILDREN]', error);
        return NextResponse.json(error, { status: 500 })
    }
}