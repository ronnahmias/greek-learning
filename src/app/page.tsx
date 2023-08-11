import AuthFooter from "@/layouts/auth-layout/footer/auth.footer";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#EEF2F6",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "70%", md: "50%" },
          maxWidth: 800,
          borderRadius: 6,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 4,
          py: 2,
        }}
      >
        <Box textAlign="center" sx={{ mt: 2 }}>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={150} height={150} />
          </Link>
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: { xs: "20px", md: "40px" } }}
          >
            Greek E-Learning
          </Typography>

          <Typography variant="subtitle2" component="h2">
            By Juliana Nahmias
          </Typography>

          <Divider sx={{ my: 2 }} />
        </Box>
      </Box>
      <AuthFooter />
    </Box>
  );
}
