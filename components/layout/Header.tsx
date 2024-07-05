"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.replace("/");
  };

  if (data?.user) {
    return (
      <div className="flex h-16 w-full items-center justify-between border-gray-100 p-4 shadow-lg">
        <Link href="/" className="text-xl font-extrabold text-primary">
          HYPERDESK
        </Link>
        <Button
          onClick={handleLogout}
          className="text-primary hover:text-primary-dark bg-white hover:bg-white"
        >
          로그아웃
        </Button>
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
