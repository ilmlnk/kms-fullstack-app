import { db } from '@/lib/db'
import { NextResponse } from 'next/server';

export async function GET(
    req: Request,
    { params }: { params: { parentId: number } }
) {
    try {
        const parent = await db.parent.findUnique({
            where: {
                id: params.parentId
            }
        });

        return NextResponse.json(parent);
    } catch (error) {
        console.log('[PARENT]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}