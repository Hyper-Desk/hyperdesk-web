"use client";

import { UserRound } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ProfileImage() {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    await signOut({
      redirect: false,
    });
    router.replace("/");
  };

  useEffect(() => {
    const handleClick = () => {
      setClicked(false);
    };

    if (!clicked) return;
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [clicked]);

  return (
    <div className="relative rounded-full">
      <UserRound
        onClick={() => setClicked(!clicked)}
        size={28}
        color="#08C8A4"
        className="cursor-pointer"
      />
      <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
      <div
        className={cn(
          "absolute -bottom-[140px] -left-24 z-10 flex flex-col justify-center gap-4 rounded-xl border bg-white p-6 text-center",
          clicked ? "visible" : "hidden",
        )}
      >
        <Link href="/profile" className="text-primary">
          마이 페이지
        </Link>
        <div onClick={handleLogout} className="cursor-pointer text-primary">
          로그아웃
        </div>
      </div>
    </div>
  );
}
