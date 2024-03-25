import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {
    try {
        const teachers = await db.teacher.findMany();
        return NextResponse.json(teachers);
    } catch (error) {
        console.log('[TEACHERS]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

