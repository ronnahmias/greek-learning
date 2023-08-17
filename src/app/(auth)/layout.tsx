import AuthFooter from "@/layouts/auth-layout/footer/auth.footer";
import { getServerSession } from "next-auth";
import { configAuth } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(configAuth);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <>
      <main className="min-h-screen min-w-screen bg-gray-100 flex flex-col items-center justify-center">
        {children}
      </main>
      <AuthFooter />
    </>
  );
}
