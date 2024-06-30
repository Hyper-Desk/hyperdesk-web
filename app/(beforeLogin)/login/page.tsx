import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-primary">로그인</h1>
        <div className="flex w-96 flex-col">
          <input
            type="text"
            placeholder="Username"
            className="my-2 rounded-md border p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="my-2 rounded-md border p-2"
          />
          <Button className="my-2 rounded-md bg-primary p-2 text-white hover:bg-primary-dark">
            Login
          </Button>
          <Link
            href="/signup"
            className="my-2 rounded-md text-sm font-medium
            flex items-center justify-center
            border border-primary-dark bg-white p-2 text-primary-dark hover:bg-gray-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
