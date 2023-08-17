import { Header } from "@/components/Header/header.component";
import { getServerSession } from "next-auth";

import { configAuth } from "../api/auth/[...nextauth]/route";
import SessionProvider from "@/components/session-provider/session.provider.component";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(configAuth);
  return (
    <>
      <SessionProvider session={session}>
        <Header />
        {children}
      </SessionProvider>
    </>
  );
}
