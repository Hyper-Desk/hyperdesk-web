export interface SystemNode {
  uniqueId: string;
  vmid: number;
  name: string;
  cpus: number;
  maxdisk: string;
  maxmem: string;
  registered: boolean;
  status: string;
  type?: string;
}

export interface ParentNode {
  cts: Node[];
  vms: Node[];
}