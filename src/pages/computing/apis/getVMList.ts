import { instance } from "@/lib/instance";

export async function getVMList() {
  const { data } = await instance.get("/proxmox/vm");

  return data;
}
