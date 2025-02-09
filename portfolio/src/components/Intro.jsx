import Image from "next/image";
import React from "react";
import profile from "../../public/images/profile/profile.jpeg";

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
      <div></div>
    </main>
  );
};

export default Intro;
