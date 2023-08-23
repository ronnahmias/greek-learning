import AuthFooter from "@/components/footer/auth.footer";
import { configAuth } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";
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
