import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@/components/material/import.material.tailwind";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import LauderLessonDetails from "./lauderLessonDetails";
import LauderLessonForm from "./lauderLessonForm";

export default function LauderLessonView() {
  const data = [
    {
      label: "Details",
      value: "details",
      icon: Square3Stack3DIcon,
      component: <LauderLessonDetails />,
    },
    {
      label: "Edit",
      value: "edit",
      icon: UserCircleIcon,
      component: <LauderLessonForm />,
    },
  ];

  return (
    <Tabs value="details">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, component: Component }) => (
          <TabPanel key={value} value={value}>
            {Component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
