import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      [x: string]: ReactNode;
      /** The user's postal address. */
      username: string;
      email: string;
      image?: string;
      role: "admin" | "user";
      accessToken?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    idToken?: string;
  }
}
