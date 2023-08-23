import {
  MenuItem,
  Typography,
} from "@/components/material/import.material.tailwind";
import { createElement } from "react";
import {
  ChartPieIcon,
  BookmarkSquareIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const navListItems = [
  {
    label: "דשבורד",
    icon: ChartPieIcon,
    href: "/dashboard",
  },
  {
    label: "השיעורים שלי",
    icon: BookOpenIcon,
    href: "/lessons",
  },
  {
    label: "שיעורי לאודר",
    icon: BookmarkSquareIcon,
    href: "/lauder-lessons",
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, href }, key) => (
        <Link href={href} key={key}>
          <Typography
            key={label}
            as="span"
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {createElement(icon, { className: "h-[18px] w-[18px]" })} {label}
            </MenuItem>
          </Typography>
        </Link>
      ))}
    </ul>
  );
}

export default NavList;
