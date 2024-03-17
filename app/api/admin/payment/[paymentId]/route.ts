import { NextResponse } from "next/server";
import prisma from "@/app/utils/db";

export async function DELETE(
    req: Request
) {
    try {
        const { id } = await req.json();
        const payment = await prisma.payment.delete({
            where: {
                id: id
            }
        });
        return NextResponse.json(payment);
    } catch (error) {
        console.log('[PAYMENT]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function GET(
    req: Request
) {
    try {
        const { id } = await req.json();
        const payment = await prisma.payment.findUnique({
            where: {
                id: id
            }
        });
        return NextResponse.json(payment);
    } catch (error) {
        console.log('[PAYMENT]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}