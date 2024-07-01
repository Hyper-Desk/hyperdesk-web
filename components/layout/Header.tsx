import { auth, signOut } from "@/auth";
import Link from "next/link";
import { Button } from "../ui/button";

export default async function Header() {
  const session = await auth();

  const handleLogout = async () => {
    await signOut();
  };

  if (session?.user) {
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
