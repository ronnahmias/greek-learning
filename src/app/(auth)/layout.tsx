import AuthFooter from "@/layouts/auth-layout/footer/auth.footer";
import { Box } from "@mui/material";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
