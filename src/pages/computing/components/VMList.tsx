import { useProxmoxStore } from "@/stores/useProxmoxStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getVMList } from "../apis/getVMList";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import VM from "./VM";
import { Node, VMTypes } from "../types/proxmox";
import CreateVMDialog from "./CreateVMDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function VMList() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { domain, port, userId, password } = useProxmoxStore((state) => state);
  const { data, isFetching, isPending, isError, error } = useQuery({
    queryKey: ["vmList", domain, port, userId, password],
    queryFn: () => getVMList(domain, port, userId, password),
    enabled: !!domain && !!port && !!userId && !!password,
  });
  const [selectedNode, setSelectedNode] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    if (isError) {
      toast({
        variant: "destructive",
        title: "노드 정보 불러오기 실패",
        description: error.message,
      });
    }
  }, [isError, error, toast]);

  useEffect(() => {
    if (data) {
      setSelectedNode(Object.keys(data[0])[0]);
    }
  }, [data]);

  const handleNodeChange = (node: string) => {
    setSelectedNode(node);
  };

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
        <Select
          onValueChange={handleNodeChange}
          defaultValue={selectedNode}
          value={selectedNode}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue defaultValue={selectedNode} />
          </SelectTrigger>
          <SelectContent>
            {isFetching ? (
              <SelectItem value="loading">로딩 중...</SelectItem>
            ) : isError ? (
              <SelectItem value="error">에러 발생</SelectItem>
            ) : isPending ? (
              <SelectItem value="pending">하이퍼바이저 등록 필요</SelectItem>
            ) : (
              data.map((node: Node) => (
                <SelectItem
                  key={Object.keys(node)[0]}
                  value={Object.keys(node)[0]}
                >
                  {Object.keys(node)[0]}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>
      {error ? (
        <p className="mt-6 text-center text-2xl text-red-500">
          {error.message}
        </p>
      ) : isFetching ? (
        <p className="mt-6 text-center text-2xl">로딩 중...</p>
      ) : isPending ? (
        <p className="mt-6 text-center text-2xl">
          🚫 하이퍼바이저 등록을 먼저 완료해주세요.
        </p>
      ) : (
        <div className="h-full w-full p-6">
          {data.map(
            (node: Node) =>
              selectedNode &&
              node[selectedNode] && (
                <div
                  className="grid grid-cols-auto-fit place-items-center gap-4"
                  key={Object.keys(node)[0]}
                >
                  <CreateVMDialog node={selectedNode} />
                  {node[selectedNode].cts.map((container: VMTypes) => (
                    <VM key={container.uniqueId} vm={container} />
                  ))}
                  {node[selectedNode].vms.map((vm: VMTypes) => (
                    <VM key={vm.uniqueId} vm={vm} />
                  ))}
                </div>
              ),
          )}
        </div>
      )}
    </div>
  );
}
