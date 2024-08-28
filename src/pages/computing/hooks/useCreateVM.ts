import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VMFormFields } from "../lib/createVMFormSchema";
import { instance } from "@/lib/instance";

export function useCreateVM(node: string) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (formData: VMFormFields) => {
      await instance.post("/proxmox/vm", {
        node,
        vmid: formData.vmid,
        name: formData.name,
        cpu: formData.cpu,
        maxdisk: formData.maxdisk,
        maxmem: formData.maxmem,
        network: formData.network,
        iso: formData.osiso,
        storage: formData.osstorage,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vmList"] });
      toast({
        variant: "primary",
        title: "생성 완료",
        description: "가상머신이 생성되었습니다.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "생성 실패",
        description: error.message,
      });
    },
  });

  return { mutateAsync };
}
