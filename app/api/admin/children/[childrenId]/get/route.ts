import prisma from "@/app/utils/db"
import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {
    try {
        const children = await prisma.child.findMany();
        return NextResponse.json(children);
    } catch (error) {
        console.log('[CHILDREN]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}