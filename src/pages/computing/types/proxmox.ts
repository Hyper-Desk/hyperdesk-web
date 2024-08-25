export interface VMTypes {
  uniqueId: string;
  vmid: number;
  name: string;
  cpus: number;
  maxdisk: string;
  maxmem: string;
  registered: boolean;
  status: string;
  type?: string;
  template?: number;
}

export interface Node {
  [key: string]: {
    cts: VMTypes[];
    vms: VMTypes[];
  };
}
