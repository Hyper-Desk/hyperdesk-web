"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

interface VM {
  vmid: number;
  name: string;
  cpu: number;
  mem: number;
}

export default function Console() {
  const { data: session, status } = useSession();
  const [data, setData] = useState<VM[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [first, setFirst] = useState(false);
  const { instance } = useAuth();

  useEffect(() => {
    if (status !== "authenticated") return;
    console.log("fetchData");

    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await instance.get<VM[]>("/user/owner_vm_list");
        if (response.status === 404) {
          setFirst(true);
          return;
        }
        setData(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An error occurred");
        }
      }
      setIsLoading(false);
    };
    fetchData();
  }, [status]);

  return (
    <div className="p-28">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold">메인콘솔</h1>
        <span className="text-2xl">
          로그인한 사용자 : {session?.user?.name}
        </span>
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <h1 className="text-3xl font-bold">VM LIST</h1>
        {isLoading && <span>로딩중...</span>}
        {error && <span className="text-red-500">에러 발생 : {error}</span>}
        {first && (
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">토큰 등록 필요</h1>
            <span className="text-lg">
              토큰을 등록해야 VM 정보를 확인할 수 있습니다.
            </span>
            <Link href="/profile" className="text-primary">
              토큰 등록하러 가기
            </Link>
          </div>
        )}
        {data && (
          <div className="flex flex-col gap-4">
            {data.map((vm) => (
              <div className="flex gap-4" key={vm.vmid}>
                <span className="text-xl text-primary">VM ID : {vm.vmid}</span>
                <span>VM Name : {vm.name}</span>
                <span>CPU : {vm.cpu}</span>
                <span>MEM : {vm.mem}</span>
              </div>
            ))}
          </div>
        )}
        {!isLoading && !data && !first && !error && (
          <span>VM 정보가 없습니다.</span>
        )}
      </div>
    </div>
  );
}
