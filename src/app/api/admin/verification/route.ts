import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * Retrieves all teachers from the database and returns them in a JSON response.
 *
 * @return {Promise<NextResponse>} JSON response containing the list of teachers
 */
export async function GET() {
    try {
        const administrators = await db.administrator.findMany();
        return NextResponse.json(administrators);
    } catch (error) {
        console.error('[ADMIN]', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

