import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const getCookie = cookies().get('login');
}