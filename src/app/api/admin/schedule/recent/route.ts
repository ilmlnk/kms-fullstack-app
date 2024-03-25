import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

/**
 * Function to handle GET request
 *
 * @param {Request} req - the request object
 * @return {Promise} a Promise that resolves to the response
 */
export async function GET(req: Request) {
    try {
        const events = await db.event.findMany({
            orderBy: {
                starting_date: 'asc',
            },
            take: 3,
        });
        return NextResponse.json(events);
    } catch (error) {
        console.error('[SCHEDULE]', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}