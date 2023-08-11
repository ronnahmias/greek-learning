import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authEmails = "ron.nahmias2@gmail.com, yuvalamit28@gmail.com";

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
    async signIn({
      user,
      account,
      profile,
      email,
      credentials,
    }: {
      account: any;
      profile: any;
      email: any;
      credentials: any;
      user: any;
    }) {
      if (account.provider === "google") {
        const email = profile.email;
        if (authEmails.includes(email)) {
          return true;
        }
      }
      return false;
    },
  },
};
const handler = NextAuth(configAuth);

export { handler as GET, handler as POST };
