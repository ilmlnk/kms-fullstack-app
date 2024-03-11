import { db } from "@/lib/db";
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
        const { firstName } = await req.json();
        const { lastName } = await req.json();
        const { idCode } = await req.json();

        const parent = await db.parent.create({
            data: {
                object_id: String(generateAuthorId()),
                author_id: String(generateAuthorId()),
                tenant_id: String(generateTenantId()),
                creation_date: new Date(),
                first_name: firstName,
                last_name: lastName,
                id_code: idCode
            }
        });

        return NextResponse.json(parent);
    } catch (error) {

    }
}