import {
  MenuItem,
  Typography,
} from "@/components/material/import.material.tailwind";
import { createElement } from "react";
import {
  ChartPieIcon,
  BookmarkSquareIcon,
  BookOpenIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavListItem {
  label: string;
  icon: any;
  href: string;
  disabled?: boolean;
}

const navListItems: NavListItem[] = [
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
  {
    label: "הגדרות",
    icon: AdjustmentsHorizontalIcon,
    href: "/settings",
  },
];

function NavList() {
  const path = usePathname();
  console.log(path);

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, href, disabled }, key) => {
        const isActive = path === href;
        return (
          <Link
            href={href}
            key={key}
            className={`${disabled ? "pointer-events-none" : ""} ${
              isActive ? "bg-gray-200 rounded-full" : ""
            }`}
          >
            <Typography
              key={label}
              as="span"
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              <MenuItem className="flex items-center gap-2 lg:rounded-full">
                {createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                {label}
              </MenuItem>
            </Typography>
          </Link>
        );
      })}
    </ul>
  );
}

export default NavList;
