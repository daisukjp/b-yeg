"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useSearchParams } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import { keyframes } from "@emotion/react";
import DSLOGO from "./images/DaisukeSatologo.png";
// import DSLOGO from "../../assets/DaisukeSatologo.png";
import NavLink from "./navLink";

interface LinkType {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const links: LinkType[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <header className="relative md:sticky top-0 z-20 main-header bg-primary">
        <nav className="px-4 md:px-6 py-3 lg max-w-[700px] mx-auto flex justify-between items-center gap-3">
          <Link href="/" className="">
            <Image src={DSLOGO} alt="DS logo" width={100} />
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
