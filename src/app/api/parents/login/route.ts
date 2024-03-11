import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { usePathname, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

// parent authorization
export async function POST(
    req: Request,
) {
    try {
        const { username, password } = await req.json();

        const parent = await db.parent.findFirst({
            where: {
                username: username,
                password: password,
            },
        });

        return NextResponse.json(parent);
    } catch (error) {
        console.log('[SUBJECTS]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}