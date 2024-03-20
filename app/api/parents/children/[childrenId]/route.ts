import prisma from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { childrenId: string } }
) {
    try {
        const data = await req.json();
        const children = await prisma.child.findFirst({
            where: {
                ...data
            },
        });
        return NextResponse.json(children);
    } catch (error) {
        console.log('[CHILDREN]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { childrenId: string } }
) {
    try {
        const child = await prisma.child.delete({
            where: {
                id: params.childrenId,
            },
        });
        return NextResponse.json(child);
    } catch (error) {
        console.log('[CHILDREN]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}