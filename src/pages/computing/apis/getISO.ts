import { instance } from "@/lib/instance";
import { ISOData } from "../types/proxmox";

export async function getISO(node: string): Promise<ISOData> {
  const { data } = await instance.get("/proxmox/iso", {
    params: {
      node,
    },
  });

  return data;
}
