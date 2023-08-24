import { createElement, useState } from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@/components/material/import.material.tailwind";
import { ChevronDownIcon, PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

function ProfileMenu() {
  const profileMenuItems = [
    {
      label: "התנתק",
      icon: PowerIcon,
      onClick: () => {
        handleLogout();
        closeMenu();
      },
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogout = async () => {
    await signOut(); // This will log the user out
  };
  const closeMenu = () => setIsMenuOpen(false);
  const { status, data: session } = useSession();
  console.log("profile menu", session);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:mr-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="avatar user image"
            className="border border-gray-900 p-0.5"
            src={session?.user?.image!}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, onClick }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={onClick}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;
