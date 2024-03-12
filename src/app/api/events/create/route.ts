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

    function generateAuthorId(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }


    try {
        const {
            title,
            starting_date,
            ending_date,
            type,
            description,
            group
        } = await req.json();

        const event = await db.event.create({
            data: {
                object_id: String(Math.floor(Math.random() * 1000) + 1),
                author_id: String(generateAuthorId()),
                tenant_id: String(generateTenantId()),
                creation_date: new Date(),
                title: String(title),
                starting_date: new Date(starting_date),
                ending_date: new Date(ending_date),
                type: String(type),
                description: String(description),
                group: String(group),
            }
        });

        return NextResponse.json(event);
    } catch (error) {
        console.log('[EVENTS]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}