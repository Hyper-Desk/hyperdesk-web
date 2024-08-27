import { instance } from "@/lib/instance";

export async function getNetwork(node: string): Promise<string[]> {
  const { data } = await instance.get("/proxmox/network", {
    params: {
      node,
    },
  });

  return data;
}
