"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { data } = useSession();

  if (data?.user) {
    router.replace("/");
    return null;
  }

  const handleLogin = async () => {
    if (!userId || !userId.trim()) {
      setError("아이디를 입력해주세요.");
      return;
    }
    if (!password || !password.trim()) {
      setError("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const result = await signIn("credentials", {
        username: userId,
        password,
        redirect: false,
      });
      if (result?.error) {
        setError("아이디 또는 비밀번호가 일치하지 않습니다.");
        return;
      }
      router.replace("/");
    } catch (error) {
      setError("로그인 중에 오류가 발생했습니다.");
      return;
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center p-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-5xl font-bold text-primary">로그인</h1>
        <div className="flex w-96 flex-col">
          <input
            type="text"
            placeholder="아이디"
            className="my-2 rounded-md border p-2"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="my-2 rounded-md border p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="my-2 rounded-md bg-primary p-2 text-white hover:bg-primary-dark"
            onClick={handleLogin}
          >
            로그인
          </Button>
          <Link
            href="/signup"
            className="my-2 rounded-md text-sm font-medium
            flex items-center justify-center
            border border-primary-dark bg-white p-2 text-primary-dark hover:bg-gray-200"
          >
            회원가입
          </Link>
          <div className="my-2 rounded-md text-sm font-medium text-red-500 w-full h-[10px] flex justify-center items-center">
            {error}
          </div>
        </div>
      </div>
    </div>
  );
}
