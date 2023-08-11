import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authEmails = process.env.AUTH_EMAILS!.split(",");

export const configAuth = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      if (account.provider === "google" && authEmails.includes(email)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
const handler = NextAuth(configAuth);

export { handler as GET, handler as POST };
