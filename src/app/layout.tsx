import { RtlCacheProvider } from "@/components/RTL/rtl.component";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greek - Learning",
  description: "Greek E-learning By Juliana Nahmias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>
        <RtlCacheProvider>{children}</RtlCacheProvider>
      </body>
    </html>
  );
}
