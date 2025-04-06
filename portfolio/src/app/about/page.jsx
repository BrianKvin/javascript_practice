import Image from "next/image";
import React from "react";
import profile from "../../../public/images/profile/image.jpg";
// import profile from "../../../public/images/profile/profile.jpeg";

const About = () => {
  return (
    <main className="min-h-screen w-[70%] mx-auto">
      <div className="container max-w-6xl py-6 lg:py-10 mx-auto">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-x-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">
              About Me
            </h1>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-48 w-48">
              <Image
                src={profile}
                alt="profile"
                className="aspect-square h-full w-full"
              />
            </span>
            <h2 className="text-2xl font-bold text-center break-words">
              Kelvin Brian
            </h2>
            <p className="text-muted text-center break-words">
              Backend Developer
            </p>
          </div>
          <p className="text-muted text-lg py-4">
            Experienced software engineer with 2+ years of expertise in backend
            development, system optimization, and building scalable solutions.
            Skilled in Python, JavaScript, TypeScript, and Dart, with a solid
            background in frontend and mobile development. Currently advancing
            knowledge in data science to create intelligent, high-performance
            applications. Driven by a passion for leveraging technology to
            optimize performance and elevate user experience.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
