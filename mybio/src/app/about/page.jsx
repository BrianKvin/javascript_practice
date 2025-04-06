import Image from "next/image";
import React from "react";
import profile from "../../../public/images/profile/profile.jpeg";

const About = () => {
  return (
    <main className="min-h-screen">
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
            Software engineer with over 2 years of experience, specializing in
            backend development, system optimization, and scalable solutions.
            Proficient in Python, JavaScript, TypeScript, and Dart, with
            additional experience in frontend development and mobile
            development. Currently expanding expertise in data science to build
            intelligent, high-performance applications. Passionate about
            leveraging technology to enhance performance and user experience.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
