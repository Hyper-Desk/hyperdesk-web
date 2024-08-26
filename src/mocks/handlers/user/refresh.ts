import { BASE_URL } from "@/lib/constants";
import { http, HttpResponse } from "msw";

type RefreshResponseBody = {
  accessToken: string;
};

export const refreshHandler = http.get<never, RefreshResponseBody>(
  `${BASE_URL}/user/refresh`,
  async ({ cookies }) => {
    const refreshToken = cookies.refreshToken;

    if (refreshToken === "testRefreshToken") {
      return HttpResponse.json({
        accessToken: "testAccessToken",
      });
    }

    return new HttpResponse("토큰 갱신 실패", {
      status: 401,
    });
  },
);
