import { BASE_URL } from "@/lib/constants";
import { http, HttpResponse } from "msw";

type LoginRequestBody = {
  userId: string;
  password: string;
};

type LoginResponseBody = {
  accessToken: string;
  userId: string;
};

export const loginHandler = http.post<LoginResponseBody, LoginRequestBody>(
  `${BASE_URL}/user/login`,
  async ({ request }) => {
    const { userId, password } = await request.json();

    if (userId === "minboy" && password === "minboy") {
      return HttpResponse.json(
        {
          accessToken: "testAccessToken",
          userId: "minboy",
        },
        {
          headers: {
            "Set-Cookie": "refreshToken=testRefreshToken",
          },
        },
      );
    }

    return new HttpResponse("로그인 실패", {
      status: 401,
    });
  },
);
