import { BASE_URL } from "@/lib/constants";
import { http, HttpResponse } from "msw";

export const tokenHandler = http.post<never, never>(
  `${BASE_URL}/proxmox/token`,
  async ({ request }) => {
    const { address, port, userId, password } = await request.json();

    if (
      address === "minboy.duckdns.org" ||
      port === "8006" ||
      userId === "root" ||
      password === "1234"
    )
      return HttpResponse.json(null, {
        headers: {
          "Set-Cookie": "proxmox=1234",
        },
      });

    return new HttpResponse("토큰 생성 실패", {
      status: 401,
    });
  }
);
