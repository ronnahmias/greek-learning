import AuthFooter from "@/components/footer/auth.footer";
import { getAuthSession } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();
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
