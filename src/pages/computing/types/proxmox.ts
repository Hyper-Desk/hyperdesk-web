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

export interface StorageData {
  diskStorage: {
    active: 0 | 1;
    avail: string;
    content: string;
    enabled: 0 | 1;
    shared: 0 | 1;
    storage: string;
    total: string;
    used: string;
    used_fraction: number;
  }[];
}

interface ISO {
  [key: string]: {
    content: string;
    ctime: number;
    format: string;
    size: number;
    volid: string;
  }[];
}

export type ISOData = ISO[];
