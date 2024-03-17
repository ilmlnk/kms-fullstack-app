import prisma from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {

    function generateTenantId(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function generateAuthorId(): number {
        return Math.floor(Math.random() * 1000) + 1;
    }

    try {
        const { title } = await req.json();

        const subject = await prisma.subject.create({
            data: {
                author_id: String(generateAuthorId()),
                tenant_id: String(generateTenantId()),
                creation_date: new Date(),
                title: String(title),
            }
        });

        return NextResponse.json(subject);
    } catch (error) {
        console.log('[SUBJECTS]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}