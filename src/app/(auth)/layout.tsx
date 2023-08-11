import AuthFooter from "@/layouts/auth-layout/footer/auth.footer";
import { Box } from "@mui/material";
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
      <Box
        sx={{
          backgroundColor: "#EEF2F6",
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
        <AuthFooter />
      </Box>
    </>
  );
}
