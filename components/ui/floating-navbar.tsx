"use client";
import React, { JSX } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const t = useTranslations("Navbar");

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={cn(
        "flex  fixed inset-x-0 mt-5  z-[5000] items-center justify-center",
        className
      )}
    >
      <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/80 px-2 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md dark:border-white/10 dark:bg-black/50">
        <Link href="#hero" className="flex items-center gap-2 pl-2 pr-3">
          <Image
            src="https://ambyte-agency.com/assets/logobg-BXPDcwaC.png"
            alt="Ambyte Agency"
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="text-sm font-black tracking-wide text-neutral-800 dark:text-white hidden sm:inline">
            AMBYTE
          </span>
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map((navItem, idx: number) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </a>
          ))}
        </div>

        <div className="h-5 w-px bg-neutral-200 dark:bg-white/10" />
        <Link href={"#contact"} className="relative z-50">


        <button className="relative rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/20 dark:bg-white dark:text-black dark:hover:bg-neutral-100 dark:hover:shadow-white/20">
          <span>{t("contact")}</span>
        </button>
        </Link>
      </div>
    </motion.div>
  );
};
