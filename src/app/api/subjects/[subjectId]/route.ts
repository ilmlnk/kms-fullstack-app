import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { subjectId: number } }
) {
    try {
        const { subjectId } = params;
        const values = await req.json();

        const subject = await db.subject.update({
            where: {
                id: params.subjectId,
            },
            data: {
                ...values,
            }
        });

        return NextResponse.json(subject);
    } catch (error) {
        console.log('[SUBJECT_ID]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}