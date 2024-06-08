import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-16 p-4  border-gray-100 shadow-lg flex items-center justify-between">
      <h1 className="text-primary font-extrabold text-xl">HYPERDESK</h1>
      <Link
        href="/login"
        className="text-primary p-2 hover:bg-primary-hover rounded-sm font-medium"
      >
        로그인
      </Link>
    </div>
  );
}
