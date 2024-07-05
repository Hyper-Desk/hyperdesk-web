"use client";

import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import onSubmit from "../_lib/singup";

function showMessage(message: string | null | undefined) {
  if (message === "no_userId") {
    return "아이디를 입력해주세요.";
  }
  if (message === "no_password") {
    return "비밀번호를 입력해주세요.";
  }
  if (message === "user_exists") {
    return "이미 존재하는 아이디입니다.";
  }
  if (message === "error") {
    return "에러가 발생했습니다. 다시 시도해주세요.";
  }
  return "";
}

export default function SignUp() {
  const [state, formAction] = useFormState(onSubmit, { message: "" });
  const { pending } = useFormStatus();

  return (
    <div className="flex h-full w-full items-center justify-center p-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          계정을 생성하세요
        </h1>
        <form className="flex w-96 flex-col" action={formAction}>
          <input
            name="userId"
            type="text"
            placeholder="아이디"
            className="my-2 rounded-md border p-2"
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            className="my-2 rounded-md border p-2"
          />
          <Button
            type="submit"
            className="my-2 rounded-md bg-primary p-2 text-white hover:bg-primary-dark"
            disabled={pending}
          >
            회원가입
          </Button>
          <div className="my-2 rounded-md text-sm w-full h-[10px] font-medium flex justify-center items-center text-red-500">
            {showMessage(state?.message)}
          </div>
        </form>
      </div>
    </div>
  );
}
