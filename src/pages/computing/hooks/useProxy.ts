import { instance } from "@/lib/instance";
import { useQuery } from "@tanstack/react-query";
import { UseFormSetValue } from "react-hook-form";
import { DomainFormFields } from "../lib/domainFormSchema";

export function useProxy(setValue: UseFormSetValue<DomainFormFields>) {
  const { isError, error } = useQuery({
    queryKey: ["proxy"],
    queryFn: async () => {
      const { data } = await instance.get("/proxmox/proxy");
      setValue("domain", data.address);
      setValue("port", data.port);
      setValue("id", data.proxmoxId);
      return data;
    },
    retry: false,
  });

  return { isError, error };
}
