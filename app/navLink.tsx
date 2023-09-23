import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import cn from "clsx";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  target,
  rel,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(window.location.pathname === href);
  }, [href]);

  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",
        active ? "bg-secondaryA text-primary" : "text-secondary",
        className
      )}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
};

export default NavLink;
