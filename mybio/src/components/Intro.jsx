import Image from "next/image";
import React from "react";
import profile from "../../public/images/profile/profile.jpeg";
import Link from "next/link";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const Intro = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center py-10">
      <div className="pb-4">
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20">
          <Image
            src={profile}
            alt="profile"
            className="aspect-square h-full w-full"
          />
        </span>
      </div>
      <div>
        <p className="text-center">
          Transforming ideas into seamless digital realities to craft <br />
          experiences that engage, inspire, and elevate brands in <br />
          the digital world.
        </p>
      </div>
      <div className="flex items-center mt-2">
        <Link
          href="/"
          download={true}
          target={"_blank"}
          className="flex items-center  p-2.5 px-6 rounded-3xl text-lg"
        >
          Resume
          <HiArrowTopRightOnSquare className="w-6 ml-1" />
        </Link>
        <Link
          href="mailtobriankvin@gmail.com"
          target={"_blank"}
          className="ml-4 text-lg underline"
        >
          Contact
        </Link>
      </div>
    </main>
  );
};

export default Intro;
