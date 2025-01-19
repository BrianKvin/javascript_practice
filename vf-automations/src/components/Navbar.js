import React from "react";
import Link from "next/link";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <header className="w-full px-80 flex items-center justify-between bg-[#1d1e22] text-[#d4d4dc] text-sm font-normal py-2">
      <div>
        <Link href="/" className="mr-4">
          <PhoneOutlined className="transform rotate-90 mr-2" />
          +62274889767
        </Link>
        <Link href="/">
          <MailOutlined className="mr-2" />
          hello@myticket.com
        </Link>
      </div>
      <div>
        <Link href="/" className="mr-2">
          Sign Up
        </Link>
        |
        <Link href="/" className="ml-2">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
