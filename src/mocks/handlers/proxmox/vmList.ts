import { BASE_URL } from "@/lib/constants";
import { withProxmox } from "@/mocks/middleware";
import { http, HttpResponse } from "msw";

type VMListResponseBody = {
  [key: string]: {
    cts: {
      cpu: number;
      cpus: number;
      disk: string;
      diskread: string;
      diskwrite: string;
      maxdisk: string;
      maxmem: string;
      maxswap: number;
      mem: string;
      name: string;
      netin: number;
      netout: number;
      pid: number;
      registered: boolean;
      status: string;
      swap: number;
      tags: string;
      type: string;
      uniqueId: string;
      uptime: number;
      vmid: number;
    }[];
    vms: {
      cpu: number;
      cpus: number;
      disk: string;
      diskread: string;
      diskwrite: string;
      maxdisk: string;
      maxmem: string;
      mem: string;
      name: string;
      netin: number;
      netout: number;
      registered: boolean;
      status: string;
      template?: number;
      uniqueId: string;
      uptime: number;
      vmid: number;
    }[];
  }[];
};

export const vmListHandler = http.get<never, VMListResponseBody>(
  `${BASE_URL}/proxmox/vm`,
  withProxmox(() => {
    return HttpResponse.json([
      {
        pve: {
          cts: [
            {
              cpu: 0.000235928036080084,
              cpus: 1,
              disk: "1.97",
              diskread: "2.16",
              diskwrite: "3.36",
              maxdisk: "3.86",
              maxmem: "1.00",
              maxswap: 536870912,
              mem: "0.11",
              name: "nginxproxymanager",
              netin: 3726274457,
              netout: 3380325900,
              pid: 1035,
              registered: false,
              status: "running",
              swap: 10240000,
              tags: "proxmox-helper-scripts",
              type: "lxc",
              uniqueId:
                "af0f757e7543775caaccc25f1e335964ed0c19118d8c24dcf7a9fed52e641828",
              uptime: 6782282,
              vmid: 102,
            },
          ],
          vms: [
            {
              cpu: 0,
              cpus: 1,
              disk: "0.00",
              diskread: "0.00",
              diskwrite: "0.00",
              maxdisk: "32.00",
              maxmem: "2.00",
              mem: "0.00",
              name: "ubuntu-desktop-template",
              netin: 0,
              netout: 0,
              registered: false,
              status: "stopped",
              template: 1,
              uniqueId:
                "a09f7fb113896b3c24ddf055d898e8c80520e5f1cd014b57130808c3792cd122",
              uptime: 0,
              vmid: 109,
            },
            {
              cpu: 0,
              cpus: 1,
              disk: "0.00",
              diskread: "0.00",
              diskwrite: "0.00",
              maxdisk: "32.00",
              maxmem: "2.00",
              mem: "0.00",
              name: "ubuntu-desktop-1",
              netin: 0,
              netout: 0,
              registered: false,
              status: "stopped",
              uniqueId:
                "42069ba2b254b0da631da7cc42d0830f2989f32455e70a2be89b70f74a048041",
              uptime: 0,
              vmid: 104,
            },
            {
              cpu: 0.00891195930797033,
              cpus: 1,
              disk: "0.00",
              diskread: "0.00",
              diskwrite: "0.00",
              maxdisk: "32.00",
              maxmem: "2.00",
              mem: "0.94",
              name: "jenkins",
              netin: 2308415059,
              netout: 1253722571,
              pid: 1243,
              registered: false,
              status: "running",
              uniqueId:
                "ed0c50a09665b529b20fde62ad02bf116a50919be2d8c9b915c9a30fba5315c6",
              uptime: 6782274,
              vmid: 101,
            },
            {
              cpu: 0,
              cpus: 1,
              disk: "0.00",
              diskread: "0.00",
              diskwrite: "0.00",
              maxdisk: "32.00",
              maxmem: "2.00",
              mem: "0.00",
              name: "ubuntu-server-template",
              netin: 0,
              netout: 0,
              registered: false,
              status: "stopped",
              template: 1,
              uniqueId:
                "c8776db6081a3ef1481c54e02951bff0eef344bc4dfd93903bf3b1bb30f8b44c",
              uptime: 0,
              vmid: 106,
            },
            {
              cpu: 0,
              cpus: 1,
              disk: "0.00",
              diskread: "0.00",
              diskwrite: "0.00",
              maxdisk: "32.00",
              maxmem: "2.00",
              mem: "0.00",
              name: "blog",
              netin: 0,
              netout: 0,
              registered: false,
              status: "stopped",
              uniqueId:
                "c25a79f98e154afe5760b8e7c974af947d4221a151815150b0487cbae9d7eaa2",
              uptime: 0,
              vmid: 103,
            },
            {
              cpu: 0.00854114213720398,
              cpus: 1,
              disk: "0.00",
              diskread: "0.00",
              diskwrite: "0.00",
              maxdisk: "32.00",
              maxmem: "2.00",
              mem: "0.89",
              name: "hyperdesk",
              netin: 578351277,
              netout: 345321753,
              pid: 1164727,
              registered: false,
              status: "running",
              uniqueId:
                "4c3040e69e99a74b84618e12e4969e37eda43665e652d4a8f8febe1be1e8e571",
              uptime: 495142,
              vmid: 105,
            },
            {
              cpu: 0.0101649605500755,
              cpus: 1,
              disk: "0.00",
              diskread: "0.00",
              diskwrite: "0.00",
              maxdisk: "32.00",
              maxmem: "2.00",
              mem: "0.90",
              name: "GDSC-Landing",
              netin: 2500386593,
              netout: 809704468,
              pid: 126539,
              registered: false,
              status: "running",
              uniqueId:
                "b7ddb3674dd1f4ec73329731f1d54841cf5a059e043e2b30390f777f342a8af4",
              uptime: 5272835,
              vmid: 107,
            },
          ],
        },
      },
      {
        mini: {
          vms: [
            {
              cpu: 0.0084162268610842,
              cpus: 1,
              disk: "0.00",
              diskread: "0.00",
              diskwrite: "0.00",
              maxdisk: "32.00",
              maxmem: "2.00",
              mem: "0.87",
              name: "GDSC-Admin",
              netin: 1658254893,
              netout: 229735762,
              pid: 1683371,
              registered: false,
              status: "running",
              uniqueId:
                "ae72fc221b2db707604e10c2b2567dbcdff9ec564f001f8046d2a4470537457a",
              uptime: 4726761,
              vmid: 108,
            },
            {
              cpu: 0.0886239408095028,
              cpus: 1,
              disk: "0.00",
              diskread: "0.00",
              diskwrite: "0.00",
              maxdisk: "32.00",
              maxmem: "2.00",
              mem: "1.38",
              name: "pfSense",
              netin: 50618936729,
              netout: 50791178514,
              pid: 917,
              registered: false,
              status: "running",
              uniqueId:
                "a147bfd8dea9f7b049a6e539038a19f56b3de689becc3c349e28e020dc973d55",
              uptime: 6782288,
              vmid: 100,
            },
          ],
          cts: [],
        },
      },
    ]);
  })
);
