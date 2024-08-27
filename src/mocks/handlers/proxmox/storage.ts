import { BASE_URL } from "@/lib/constants";
import { withProxmox } from "@/mocks/middleware";
import { StorageData } from "@/pages/computing/types/proxmox";
import { http, HttpResponse } from "msw";

export const storageHandler = http.get<never, StorageData>(
  `${BASE_URL}/proxmox/storage`,
  withProxmox(() => {
    return HttpResponse.json({
      diskStorage: [
        {
          active: 1,
          avail: "296.84",
          content: "iso,images,vztmpl,backup,snippets,rootdir",
          enabled: 1,
          shared: 0,
          storage: "local",
          total: "460.03",
          type: "dir",
          used: "143.50",
          used_fraction: 0.31192964385767,
        },
        {
          active: 1,
          avail: "396.84",
          content: "iso,images,vztmpl,backup,snippets,rootdir",
          enabled: 1,
          shared: 0,
          storage: "test",
          total: "460.03",
          type: "dir",
          used: "43.50",
          used_fraction: 0.31192964385767,
        },
      ],
    });
  })
);
