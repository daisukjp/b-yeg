"use client";

import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import DSLOGO from "../public/images/logoyeg.png";
import NavLink from "./navLink";
import clsx from "clsx";

interface LinkType {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollHeaderStyle = isScrolled
    ? {
        boxShadow: "0 -1px 4px rgba(0, 0, 0, 0.15)",
      }
    : {};

  const links: LinkType[] = [
    { label: "Blog", href: "/" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={`relative sticky top-0 z-20 main-header bg-primary ${
          isScrolled ? "scroll-header" : ""
        }`}
        style={{
          ...scrollHeaderStyle,
          fontSmooth: "antialiased",
          backgroundColor: "hsl(0, 0%, 98%)",
        }}
      >
        <nav className="px-4 md:px-6 py-3 lg max-w-[700px] mx-auto flex justify-between items-center gap-3">
          <Link href="/" className="headerLogo">
            <Image src={DSLOGO} alt="DS logo" width={100} height={50} />
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href} style={{ color: "#6f6f6f" }}>
                <NavLink
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-4 py-2 rounded-md hover:text-primary transition-colors",
                    pathname === link.href ||
                      (pathname.includes("/posts") && link.label === "Blog")
                      ? "bg-secondaryA font-medium"
                      : "font-normal"
                  )}
                  target={link.label === "Resume" ? "_blank" : "_self"}
                  rel={link.label === "Resume" ? "noopener noreferrer" : ""}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Popover className="relative ml-auto md:hidden">
            <Popover.Button
              className="flex items-center gap-1 text-secondary p-1 rounded-lg focus-visible:outline-none focus:ring-0"
              style={{ color: "#6f6f6f" }}
            >
              Menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute z-10 right-0 p-2 mt-2 overflow-auto text-base origin-top-right shadow-lg w-40 rounded-xl bg-blur backdrop-blur-lg focus:outline-none sm:text-sm"
                style={{ backgroundColor: "#fffffff2" }}
              >
                <div className="grid">
                  {links.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      className={clsx(
                        "px-4 py-2 rounded-md hover:text-primary transition-colors",
                        pathname === link.href ||
                          (pathname.includes("/posts") && link.label === "Blog")
                          ? "bg-secondaryA font-medium"
                          : "font-normal"
                      )}
                      target={link.label === "Resume" ? "_blank" : "_self"}
                      rel={link.label === "Resume" ? "noopener noreferrer" : ""}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </nav>
      </header>
    </>
  );
};

export default Header;
