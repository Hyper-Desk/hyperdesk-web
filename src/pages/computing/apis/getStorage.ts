import { instance } from "@/lib/instance";
import { StorageData } from "../types/proxmox";

export async function getStorage(node: string): Promise<StorageData> {
  const { data } = await instance.get("/proxmox/storage", {
    params: {
      node,
    },
  });

  return data;
}
