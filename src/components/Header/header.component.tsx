"use client";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const pages = ["דשבורד", "השיעורים שלי", "שיעורי לאודר"];

export function Header() {
  const { data: session, status } = useSession();
  const userImage = session?.user?.image || "";

  const handleLogout = async () => {
    await signOut(); // This will log the user out
    handleCloseUserMenu(); // Close the user menu after logout
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <header className="bg-blue-500 shadow">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-6 md:px-12">
          <div className="flex items-center space-x-2 md:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                clipRule="evenodd"
              />
            </svg>

            <a
              href="/"
              className="hidden md:flex text-lg font-bold tracking-wider text-gray-700 hover:text-gray-900 no-underline"
            >
              LOGO
            </a>
          </div>
          <div className="flex-grow md:hidden">
            <button
              onClick={handleOpenNavMenu}
              className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            ></button>
            {/* Menu content */}
            {Boolean(anchorElNav) && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md w-48">
                {pages.map((page) => (
                  <a
                    key={page}
                    href="#"
                    onClick={handleCloseNavMenu}
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                  >
                    {page}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <a
              href="/"
              className="flex text-lg font-bold tracking-wider text-gray-700 hover:text-gray-900 md:hidden"
            >
              LOGO
            </a>
            <nav className="hidden md:flex space-x-2">
              {pages.map((page) => (
                <a
                  key={page}
                  href="#"
                  onClick={handleCloseNavMenu}
                  className="my-2 text-white hover:underline"
                >
                  {page}
                </a>
              ))}
            </nav>
            <div className="flex-shrink-0">
              <button
                onClick={handleOpenUserMenu}
                className="p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
              >
                <img
                  src={userImage}
                  alt="user-avatar"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              {/* User menu */}
              {Boolean(anchorElUser) && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md w-48">
                  <a
                    href="#"
                    onClick={handleLogout}
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
