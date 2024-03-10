import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

// parent authorization
export async function POST(
    req: Request,
) {
    try {
        const { emailOrUsername, password } = await req.json();
        let parent;
        if (emailOrUsername.includes('@')) {
            parent = await db.parent.findFirst({
                where: {
                    email: emailOrUsername,
                }
            })
        } else if (!emailOrUsername.includes('@')) {
            parent = await db.parent.findFirst({
                where: {
                    username: emailOrUsername,
                }
            })
        } else {
            parent = await db.parent.findFirst({
                where: {
                    password: password,
                },
            });
        }
        return NextResponse.json({ parent });
    } catch (error) {
        console.log('[SUBJECTS]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
