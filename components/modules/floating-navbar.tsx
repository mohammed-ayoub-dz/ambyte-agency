"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, BriefcaseBusiness , FolderOpenDot } from "lucide-react";
import { useTranslations } from "next-intl";
export default function FloatingNavBar() {
  const t = useTranslations("Navbar");
  const navItems = [
    {
      name: t("home"),
      link: "#hero",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: t("services"),
      link: "#services",
      icon: <BriefcaseBusiness className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Expo",
      link: "#projects",
      icon: (
        <FolderOpenDot className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full z-50">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}
