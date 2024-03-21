import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { childrenId: number } }
) {
    try {
        const child = await db.child.findFirst({
            where: {
                id: params.childrenId,
            }
        });
        return NextResponse.json(child);
    } catch (error) {

    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { childrenId: number } }) {
    try {
        const deletedChild = await db.child.delete({
            where: {
                id: params.childrenId
            }
        });
        return NextResponse.json(deletedChild);
    } catch (error) {
        console.error("[CHILDREN]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function PUT(
    req: Request
) {
    try {
        const body = await req.json();
        const updatedChild = await db.child.update({
            where: {
                id: body.id
            },
            data: {
                first_name: body.first_name,
                last_name: body.last_name,
            }
        });
        return NextResponse.json(updatedChild);
    } catch (error) {
        console.error("[CHILDREN]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}