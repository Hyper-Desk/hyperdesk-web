import { BASE_URL } from "@/lib/constants";
import { withProxmox } from "@/mocks/middleware";
import { ISOData } from "@/pages/computing/types/proxmox";
import { http, HttpResponse } from "msw";

export const isoHandler = http.get<never, ISOData>(
  `${BASE_URL}/proxmox/iso`,
  withProxmox(() => {
    return HttpResponse.json([
      {
        local: [
          {
            content: "iso",
            ctime: 1715623576,
            format: "iso",
            size: 874672128,
            volid: "local:iso/pfSense-CE-2.7.2-RELEASE-amd64.iso",
          },
          {
            content: "iso",
            ctime: 1715625769,
            format: "iso",
            size: 5017356288,
            volid: "local:iso/ubuntu-22.04.4-desktop-amd64.iso",
          },
          {
            content: "iso",
            ctime: 1716164480,
            format: "iso",
            size: 2104408064,
            volid: "local:iso/ubuntu-22.04.4-live-server-amd64.iso",
          },
        ],
      },
    ]);
  })
);
