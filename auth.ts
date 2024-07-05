import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { BASE_URL } from "./lib/constant";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const authResponse = await fetch(`${BASE_URL}/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: credentials.username,
            password: credentials.password,
          }),
        });

        if (!authResponse.ok) return null;

        const user = await authResponse.json();

        return {
          name: user.userId,
        };
      },
    }),
  ],
});
