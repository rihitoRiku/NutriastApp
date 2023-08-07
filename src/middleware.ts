// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import toast from "react-hot-toast";
import { parse } from "url";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("Login Token");
  const parsedUrl = parse(req.url, true);

//   console.log(parsedUrl.pathname === "/login");
  if (cookie) {
    return NextResponse.next();
  } else {
    // toast.error("You are not logged in!");

    setTimeout(() => {
    }, 500);
    return NextResponse.redirect("http://localhost:3000/login");
}
}

export const config = {
  matcher: ["/home/:path*"],
};
