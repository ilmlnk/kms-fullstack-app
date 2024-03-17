import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const nextIntlMiddleware = createMiddleware({
    locales: ['en', 'uk', 'pl'],
    defaultLocale: 'uk'
});

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextRequest): NextResponse {
    return nextIntlMiddleware(req);
}

export const config = {
    matcher: ['/', '/(en|uk|pl)/:path*']
};