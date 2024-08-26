import { http, HttpResponse } from "msw";
import { BASE_URL } from "../lib/constants";

export const handlers = [
  http.post(`${BASE_URL}/user/login`, async ({ request }) => {
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

    return HttpResponse.status(401);
  }),
];
