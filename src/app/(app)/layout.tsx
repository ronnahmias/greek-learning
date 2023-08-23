import { Header } from "@/components/header/header.component";
import { getServerSession } from "next-auth";
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
