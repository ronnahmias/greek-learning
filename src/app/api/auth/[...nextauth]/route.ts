import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
let emails = "ron.nahmias2@gmail.com,yuvalamit28@gmail.com";
const authEmails = emails.split(",").map((email) => email.trim());

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
      console.log(account.provider);

      if (account.provider == "google") {
        if (authEmails.includes(profile.email)) {
          return true;
        }
        return false;
      }
      return false;
    },
  },
};
const handler = NextAuth(configAuth);

export { handler as GET, handler as POST };
