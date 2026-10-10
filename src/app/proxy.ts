import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return NextResponse.redirect(new URL("/auth/Sign-in", request.url));
    }
    console.log(session)
    return NextResponse.next();
}

export const config = {
  matcher: ["/profile","/Products/:path","/Category/:path"], // Specify the routes the middleware applies to
};