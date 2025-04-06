"use client";

import React from "react";
// import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-foreground absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="w-[70%] bottom-0 mx-auto flex items-center justify-between border-t h-14">
      <div>
        <div className="flex items-center gap-0">
          {/* <Logo href="/" /> */}
          <CustomLink
            className="mr-6 flex items-center -ml-2 hover:scale-110"
            href="/"
            title={
              <>
                <span>Kelvin</span>
                <span className="text-teal-400">Brian</span>
              </>
            }
          />
        </div>
      </div>
      <div>&copy;Kelvin Brian {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
