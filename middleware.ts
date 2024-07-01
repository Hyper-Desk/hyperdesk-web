import { auth } from "@/auth";
import { BASE_URL } from "./lib/constant";
import { NextResponse } from "next/server";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(`${BASE_URL}/login`);
  }
}

export const config = {
  matcher: ["/console"],
};
