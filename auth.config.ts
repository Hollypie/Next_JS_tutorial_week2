import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig, User } from "next-auth";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _request): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Example: replace with real DB lookup
        const user: User = {
          id: "123",              // user id from your DB
          name: "Alice",          // user name from your DB
          email: String(credentials.email), // make sure this is a string
        };

        return user ?? null;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        return isLoggedIn;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  session: { strategy: "jwt" },
};
