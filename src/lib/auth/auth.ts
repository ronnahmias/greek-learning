import GoogleProvider from "next-auth/providers/google";
import { connectMongoDB } from "../mongodb/mongodb";
import { User } from "../users/user";
import { checkUserAdmin } from "./user_admins";
import { getServerSession } from "next-auth";

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
    async signIn({ user, account }: any) {
      if (account.provider === "google") {
        const hasAccess = await checkUserAdmin(user.email);
        if (!hasAccess) {
          return false; // Return false to display a default error message
        }
        await connectMongoDB();
        const userExists = await User.findOne({ email: user.email });
        if (!userExists) {
          await User.create({ email: user.email, name: user.name });
        }
        return true;
      }
      return false;
    },
  },
};

export const getAuthSession = () => getServerSession(configAuth);
