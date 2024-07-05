import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      accessToken: string;
      refreshToken: string;
    } & DefaultSession["user"];
  }

  interface User {
    name: string;
    accessToken: string;
    refreshToken: string;
  }
}
