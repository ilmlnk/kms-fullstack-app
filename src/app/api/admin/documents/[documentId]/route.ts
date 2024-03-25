import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
    req: Request,
    { params }: { params: { documentId: number } },
) {
    try {
        const document = await db.document.findFirst({
                where: {
                    id: params.documentId
                }
            }
        );
        return NextResponse.json(document);
    } catch (error) {
        console.log('[DOCUMENT]', error);
        return new NextResponse("Failed to fetch events", { status: 500 });
    }
}

