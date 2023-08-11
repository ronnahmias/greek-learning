"use client";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  function handleLogin() {
    console.log("handleLogin");
    signIn("google");
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          onClick={handleLogin}
          color="secondary"
          sx={{ width: "40%", my: 5 }}
          size="large"
          type="button"
          startIcon={
            <Image
              src="/images/google-icon.png"
              alt="logo"
              width={20}
              height={20}
            />
          }
        >
          התחברות
        </Button>
      </Box>
    </>
  );
}
