"use client";

import { SessionProvider } from "next-auth/react";

interface SessionProviderProps {
  children: React.ReactNode;
}

export const NextAuthProvider = ({ children }: SessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
