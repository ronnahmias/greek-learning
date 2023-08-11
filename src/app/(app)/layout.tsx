import { Header } from "@/components/Header/header.component";
import { Box } from "@mui/material";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
