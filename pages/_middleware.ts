import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextApiRequest } from "next";

export async function middleware(req: NextApiRequest & NextRequest) {
  const session = await getToken({ req });
  const { pathname } = req.nextUrl;
  const redirect = req.nextUrl.clone();
  redirect.pathname = "/login";
  const urls = [
    "/",
    "/search",
    "/profile",
    "/library/playlists",
    "/library/artists",
    "/page_not_found",
  ];

  if (pathname !== "/login" && urls.includes(pathname)) {
    if (!session) return NextResponse.redirect(redirect);
  } else if (pathname === "/login") {
    if (session) return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
