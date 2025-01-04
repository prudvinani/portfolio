"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";
import { MdOutlineMail } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { LuNotebook } from "react-icons/lu";
import { useTheme } from "next-themes";

export function Navbar() {
  const { setTheme, theme } = useTheme();

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Blog",
      icon: (
        <LuNotebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
      target: "_blank",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/prudvinani",
      target: "_blank",
    },
    {
      title: "Linkedin",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/palvaiprudvi/",
      target: "_blank",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/prudvinani_",
      target: "_blank",
    },
    {
      title: "Email",
      icon: (
        <MdOutlineMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:palvaiprudvi01@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: theme === "dark" ? "Light Mode" : "Dark Mode",
      icon: theme === "dark" ? (
        <IoSunnyOutline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ) : (
        <BsMoonStarsFill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
      href: "",
    },
  ];

  return (
    <div className="flex items-center justify-center fixed bottom-5 w-full">
      <FloatingDock 
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}