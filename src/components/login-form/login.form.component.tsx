"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  function handleLogin() {
    console.log("handleLogin");
    signIn("google");
  }
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <button
          className="w-40 my-5 bg-blue-600 text-white rounded-lg py-2 px-4 flex items-center justify-center"
          onClick={handleLogin}
          type="button"
        >
          <Image
            src="/images/google-icon.png"
            alt="logo"
            className="ml-2"
            width={20}
            height={20}
          />
          התחברות
        </button>
      </div>
    </>
  );
}
