import { NextResponse } from "next/server";
import prisma from "@/app/utils/db";

export async function POST(
    req: Request
) {

    try {
        const { amount, description } = await req.json();
        const payment = await prisma.payment.create({
            data: {
                amount,
                description
            }
        });
        return NextResponse.json(payment);
    } catch (error) {
        console.log('[PAYMENT]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}