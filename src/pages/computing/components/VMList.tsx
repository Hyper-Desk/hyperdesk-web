import { useProxmoxStore } from "@/stores/useProxmoxStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getVMList } from "../apis/getVMList";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import VM from "./VM";
import { VMTypes } from "../types/proxmox";
import CreateVMDialog from "./CreateVMDialog";

export default function VMList() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { domain, port, userId, password } = useProxmoxStore((state) => state);
  const { data, isFetching, isPending, isError, error } = useQuery({
    queryKey: ["vmList", domain, port, userId, password],
    queryFn: () => getVMList(domain, port, userId, password),
    enabled: !!domain && !!port && !!userId && !!password,
  });

  useEffect(() => {
    if (isError) {
      toast({
        variant: "destructive",
        title: "노드 정보 불러오기 실패",
        description: error.message,
      });
    }
  }, [isError, error, toast]);

  if (error) {
    return (
      <p className="mt-6 text-center text-2xl text-red-500">{error.message}</p>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold text-primary">가상머신 목록</h1>
        <Button
          className="border bg-white hover:bg-gray-100"
          onClick={() =>
            queryClient.invalidateQueries({ queryKey: ["vmList"] })
          }
          disabled={isPending || isFetching}
        >
          <RefreshCw
            color="#04c8a4"
            className={isFetching ? "animate-spin" : ""}
          />
        </Button>
      </div>
      {isFetching ? (
        <p className="mt-6 text-center text-2xl">로딩 중...</p>
      ) : isPending ? (
        <p className="mt-6 text-center text-2xl">
          🚫 하이퍼바이저 등록을 먼저 완료해주세요.
        </p>
      ) : (
        <div className="h-full w-full p-6">
          {Object.keys(data).map((key) => (
            <div
              key={key}
              className="grid grid-cols-auto-fit place-items-center gap-4"
            >
              <CreateVMDialog />
              {data[key].cts.map((container: VMTypes) => (
                <VM key={container.uniqueId} vm={container} />
              ))}
              {data[key].vms.map((vm: VMTypes) => (
                <VM key={vm.uniqueId} vm={vm} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
