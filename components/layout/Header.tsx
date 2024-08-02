"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import ProfileImage from "./_components/ProfileImage";

export default function Header() {
  const { data } = useSession();

  if (data?.user) {
    return (
      <div className="flex h-16 w-full items-center justify-between border-gray-100 p-4 shadow-lg">
        <Link href="/" className="text-xl font-extrabold text-primary">
          HYPERDESK
        </Link>
        <ProfileImage />
      </div>
    );
  }

  return (
    <div className="flex h-16 w-full items-center justify-between border-gray-100 p-4 shadow-lg">
      <Link href="/" className="text-xl font-extrabold text-primary">
        HYPERDESK
      </Link>
      <Link href="/login" className="text-primary hover:text-primary-dark">
        로그인
      </Link>
    </div>
  );
}
