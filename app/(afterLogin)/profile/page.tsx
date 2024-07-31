"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function Profile() {
  const { toast } = useToast();

  const handleToken = () => {
    toast({
      title: "토큰 등록",
      description: "토큰이 성공적으로 등록되었습니다.",
      className: "bg-primary text-white",
    });
  };

  return (
    <div className="flex h-full w-full flex-col gap-10 p-10">
      <h1 className="text-4xl font-bold text-primary">정보 수정</h1>
      <div className="flex h-full w-full flex-col gap-10 rounded-xl border p-10 shadow-xl">
        <h1 className="text-2xl font-bold text-primary-dark">
          토큰 등록(변경)
        </h1>
        <div className="w-full flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-lg font-bold">
                IP 주소 또는 도메인
              </label>
              <Input
                type="text"
                id="address"
                className="rounded-md border p-2 w-96"
                placeholder="IP 주소 또는 도메인 입력"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="port" className="text-lg font-bold">
                포트 번호
              </label>
              <Input
                type="text"
                id="port"
                className="rounded-md border p-2"
                placeholder="포트 번호 입력"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="id" className="text-lg font-bold">
                아이디
              </label>
              <Input
                type="text"
                id="id"
                className="rounded-md border p-2"
                placeholder="아이디 입력"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-lg font-bold">
                비밀번호
              </label>
              <Input
                id="password"
                type="password"
                className="rounded-md border p-2"
                placeholder="비밀번호 입력"
              />
            </div>
          </div>
          <Button className="w-[960px] text-lg font-bold" onClick={handleToken}>
            등록
          </Button>
        </div>
      </div>
    </div>
  );
}
