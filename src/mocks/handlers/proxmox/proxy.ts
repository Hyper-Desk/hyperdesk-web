import { BASE_URL } from "@/lib/constants";
import { withAuth } from "@/mocks/middleware";
import { http, HttpResponse } from "msw";

type GetProxyResponseBody = {
  address: string;
  port: string;
  userId: string;
};

export const proxyHandler = http.get<never, GetProxyResponseBody>(
  `${BASE_URL}/proxmox/proxy`,
  withAuth(() => {
    return HttpResponse.json({
      address: "minboy.duckdns.org",
      port: "8006",
      userId: "root",
    });
  }),
);
