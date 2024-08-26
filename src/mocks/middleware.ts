import { HttpResponse, HttpResponseResolver } from "msw";

export function withAuth(resolver: HttpResponseResolver) {
  return (input: any) => {
    const { request } = input;

    if (request.headers.get("Authorization") !== "Bearer testAccessToken") {
      return new HttpResponse("Unauthorized", {
        status: 401,
      });
    }

    return resolver(input);
  };
}
