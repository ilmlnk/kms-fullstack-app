import prisma from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request
) {
    try {
        const { id } = await req.json();
        const existingChild = await prisma.child.findUnique({
            where: {
                id: id
            }
        });

        if (!existingChild) {
            return NextResponse.error();
        }

        const deletedChild = await prisma.child.delete({
            where: {
                id: id
            }
        });

        return NextResponse.json(deletedChild);
    } catch (error) {
        console.log('[CHILDREN]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}