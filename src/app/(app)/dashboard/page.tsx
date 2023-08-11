"use client";
import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const session = useSession();
  return (
    <>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="h6">Welcome {session?.data?.user?.name}</Typography>
    </>
  );
}
