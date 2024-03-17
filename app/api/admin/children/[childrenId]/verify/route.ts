import prisma from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function UPDATE(
    req: Request
) {
    try {
        const { id } = await req.json();
        const child = await prisma.child.update({
            where: {
                id: id
            },
            data: {
                verified: true
            }
        });
        return NextResponse.json(child);
    } catch (error) {
        console.log('[CHILDREN]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}