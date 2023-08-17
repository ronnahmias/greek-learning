export default function AuthFooter() {
  return (
    <footer className="fixed bottom-5 left-20 right-20 p-2 bg-gray-100 flex justify-center">
      <div className="w-full max-w-full md:max-w-full flex flex-row items-center justify-between">
        <a
          href="tel:+972522600235"
          target="_blank"
          className="text-sm hover:underline hover:text-blue-500"
        >
          Contact Me
        </a>
        <a href="/" className="text-sm hover:underline hover:text-blue-500">
          &copy; Juliana Nahmias
        </a>
      </div>
    </footer>
  );
}
