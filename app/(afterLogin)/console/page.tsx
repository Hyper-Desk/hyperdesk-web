"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import auth from "@/lib/AxiosInterceptor";

export default function Console() {
  const { data: session } = useSession();
  const [data, setData] = useState();

  useEffect(() => {
    const response = auth.get("/user/vm_list");
    setData(response.data);
  }, []);

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
        <div className="flex flex-col gap-4">
          {data?.map((vm, idx) => (
            <div className="flex gap-4" key={idx}>
              {vm}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
