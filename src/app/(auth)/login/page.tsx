"use client";
import LoginForm from "@/components/login-form/login.form.component";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Box
      sx={{
        width: 350,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 4,
        py: 2,
      }}
    >
      <Box
        textAlign="center"
        sx={{ minHeight: "170px", display: "flex", alignItems: "center" }}
      >
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={150} height={150} />
        </Link>
      </Box>
      <Box textAlign="center" sx={{ mt: 2 }}>
        <Typography variant="h5" component="h1">
          ברוך הבא
        </Typography>

        <Divider sx={{ my: 2 }} />
      </Box>
      <LoginForm />
    </Box>
  );
}
