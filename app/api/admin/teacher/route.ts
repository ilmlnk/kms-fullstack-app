import { NextResponse } from "next/server";
import prisma from "@/app/utils/db";

export async function GET(
    req: Request
) {
    try {
        const teachers = await prisma.teacher.findMany();
        return NextResponse.json(teachers);
    } catch (error) {
        console.log("[TEACHERS]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function POST(
    req: Request
) {
    try {
        const values = await req.json();
        const teacher = await prisma.teacher.create({
            data: {
                ...values
            }
        });
        return NextResponse.json(teacher);
    } catch (error) {
        console.log("[TEACHER]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
