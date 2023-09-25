"use client";
import LoginForm from "@components/login-form/login.form";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="w-1/2 rounded-lg bg-white flex flex-col items-center px-4 py-2">
      <div className="text-center min-h-200 flex items-center mt-10">
        <Link href="/">
          <Image src="/images/e-logo.png" alt="logo" width={150} height={150} />
        </Link>
      </div>
      <div className="text-center mt-2">
        <h5 className="text-xl font-bold">ברוכה הבא</h5>
        <hr className="my-2" />
      </div>
      <LoginForm />
    </section>
  );
}
