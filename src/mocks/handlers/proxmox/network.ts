import { BASE_URL } from "@/lib/constants";
import { withProxmox } from "@/mocks/middleware";
import { http, HttpResponse } from "msw";

export const networkHandler = http.get<never, string[]>(
  `${BASE_URL}/proxmox/network`,
  withProxmox(() => {
    return HttpResponse.json(["vmbr0", "vmbr1"]);
  })
);
