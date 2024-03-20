import prisma from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const children = await prisma.child.findMany();
        return NextResponse.json(children);
    } catch (error) {
        console.log('[CHILDREN]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function POST(
    req: Request
) {
    try {
        const data = await req.json();
        const child = await prisma.child.create({
            data: {
                ...data
            }
        });

        return NextResponse.json(child);
    } catch (error) {
        console.log('[CHILDREN]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
