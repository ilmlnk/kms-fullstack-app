import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(
    req: Request,
    { params }: { params: { childId: number } }
) {
    try {
        const declinedChild = await db.child.update({
            where: {
                id: params.childId
            },
            data: {
                acception_status: 'declined'
            }
        });
        return NextResponse.json(declinedChild);
    } catch (error) {
        console.error('[CHILD]', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}