import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DomainFormFields } from "../lib/domainFormSchema";
import { instance } from "@/lib/instance";
import { useProxmoxStore } from "@/stores/useProxmoxStore";

export function useToken() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const setIsTokenValid = useProxmoxStore((state) => state.setIsTokenValid);

  const { mutateAsync } = useMutation({
    mutationFn: async (formData: DomainFormFields) => {
      await instance.post("/proxmox/token", {
        address: formData.domain,
        port: formData.port,
        userId: formData.id,
        password: formData.password,
      });
    },
    onSuccess: () => {
      setIsTokenValid(true);
      queryClient.invalidateQueries({ queryKey: ["vmList"] });
      toast({
        variant: "primary",
        title: "등록 완료",
        description: "하이퍼바이저가 등록되었습니다.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "등록 실패",
        description: error.message,
      });
    },
  });

  return { mutateAsync };
}
