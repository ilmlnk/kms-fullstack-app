import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { teacherId: number } }
) {
    try {
        const teacher = await db.teacher.findFirst({
            where: {
                id: params.teacherId
            }
        });
        return NextResponse.json(teacher);
    } catch (error) {
        console.error('[TEACHER]', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

