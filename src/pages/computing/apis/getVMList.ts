import { instance } from "@/lib/instance";

export async function getVMList(
  domain: string,
  port: string,
  userId: string,
  password: string,
) {
  const { data } = await instance.post("/proxmox/vm", {
    address: domain,
    port,
    userId,
    password,
  });

  return data;
}
