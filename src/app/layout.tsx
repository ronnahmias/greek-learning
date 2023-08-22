import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";
import SessionProvider from "@/components/session-provider/session.provider.component";
import { getServerSession } from "next-auth";
import { configAuth } from "./api/auth/[...nextauth]/route";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  variable: "--font-rubik",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Greek - E-Learning",
  description: "Greek E-learning By Juliana Nahmias",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(configAuth);
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning={true}>
      <body className={`min-h-screen m-0 ${rubik.className} ${inter.variable}`}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
