import AuthFooter from "@/components/footer/auth.footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="w-70 md:w-50 max-w-800 bg-white rounded-6 flex flex-col items-center px-4 py-2">
        <div className="text-center mt-2">
          <Link href="/">
            <Image
              src="/images/e-logo.png"
              alt="logo"
              width={150}
              height={150}
              className="m-auto"
            />
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">
            Greek E-Learning
          </h1>
          <h2 className="text-base md:text-lg mt-1">By Juliana Nahmias</h2>
          <hr className="my-2" />
        </div>
      </div>
      <AuthFooter />
    </div>
  );
}
