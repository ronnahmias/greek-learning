import { configAuth } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession(configAuth);
  console.log("session dashboard", session?.user?.name);

  return (
    <>
      <h3 className="text-3xl font-bold text-center">Dashboard</h3>
      <h6 className="text-lg text-end">Welcome {session?.user?.name}</h6>
    </>
  );
}
