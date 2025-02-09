"use client";

import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
// import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="z-10 sticky w-[70%] mx-auto top-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <div className="flex items-center gap-0">
            {/* <Logo href="/" /> */}
            <CustomLink
              className="mr-6 flex items-center -ml-2 hover:scale-110"
              href="/"
              title={
                <>
                  <span>Kelvin</span>
                  <span className="text-teal-500">Brian</span>
                </>
              }
            />
          </div>
          <CustomLink
            className="text-sm font-medium transition-colors hidden sm:inline-block text-foreground/60"
            href="/about"
            title="About"
          />

          <CustomLink
            className="text-sm font-medium transition-colors hidden sm:inline-block text-foreground/60"
            href="/projects"
            title="Projects"
          />
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <motion.a
              className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 w-10 px-0 hidden sm:inline-flex"
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/briankvin"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-lg" />
              <span className="sr-only">Github</span>
            </motion.a>
            <motion.a
              className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 w-10 px-0 hidden sm:inline-flex"
              target={"_blank"}
              rel="noreferrer"
              href="https://x.com/Kvin_Brian"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaXTwitter className="text-lg" />
              <span className="sr-only">X</span>
            </motion.a>
            <motion.a
              className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 w-10 px-0 hidden sm:inline-flex"
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/in/briankvin/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedinIn className="text-lg" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.div
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disable d:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 w-10 px-0"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ThemeSwitch className="text-lg" />
            </motion.div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
