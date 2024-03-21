import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
) {
    try {
        const parents = await db.child.findMany();
        return NextResponse.json(parents);
    } catch (error) {
        console.log('[CHILDREN]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}