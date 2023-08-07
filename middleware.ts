import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const getCookie = cookies().get('Login Token');

    console.log(getCookie);
    if(getCookie) {
        console.log(true);
        return NextResponse.redirect('http://localhost:3000/login');
        return NextResponse.next();
    } else {
        console.log(true);
        return NextResponse.redirect('http://localhost:3000/login'); // Replace "/login" with your actual login page URL.
    }
}
