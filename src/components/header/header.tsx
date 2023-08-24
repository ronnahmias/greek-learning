"use client";
import { useState } from "react";
import {
  IconButton,
  Collapse,
  Navbar,
  Typography,
} from "@/components/material/import.material.tailwind";
import { Bars2Icon } from "@heroicons/react/24/outline";
import NavList from "./nav.list";
import ProfileMenu from "./profile.menu";

export default function Header() {
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="relative mx-auto flex items-center text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            LOGO
          </Typography>
          <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 ml-auto lg:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
          <ProfileMenu />
        </div>
        <Collapse open={isNavOpen}>
          <NavList />
        </Collapse>
      </Navbar>
    </header>
  );
}
