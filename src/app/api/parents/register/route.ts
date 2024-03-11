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
        const { first_name, last_name, username, password } = await req.json();

        const parent = await db.parent.create({
            data: {
                object_id: String(generateAuthorId()),
                author_id: String(generateAuthorId()),
                tenant_id: String(generateTenantId()),
                creation_date: new Date(),
                first_name: String(first_name),
                last_name: String(last_name),
                username: String(username),
                password: String(password),
            }
        })

        return NextResponse.json(parent);
    } catch (error) {
        console.log('[PARENT]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}