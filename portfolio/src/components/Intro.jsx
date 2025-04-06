"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, FileText } from "lucide-react";

const Intro = () => {
  console.log("Intro component rendered"); // Debugging

  return (
    <section className="w-full">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center py-20 px-4 md:py-32 relative">
        {/* Decorative Geometric Shapes */}
        <div className="absolute opacity-20 pointer-events-none z-0">
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full border border-primary/50" />
          <div className="absolute top-10 left-40 w-16 h-16 rounded-lg border border-primary/60 rotate-12" />
          <div className="absolute -bottom-10 right-0 w-32 h-32 rounded-full border border-primary/40" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade relative z-10 drop-shadow-md">
          Digital Craftsman
        </h1>

        {/* Main Message */}
        <p className="text-center text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fadeInUp">
          Transforming ideas into seamless digital realities to craft
          experiences that engage, inspire, and elevate brands in the digital
          world.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fadeInUp"
          style={{ animationDelay: "200ms" }}
        >
          <Link
            href="/Kelvin Mululu - CV.pdf"
            target={"_blank"}
            // download={true}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium border border-gray-300 dark:border-gray-700 transition-all hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <FileText size={18} />
            <span>Resume</span>
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            href="mailto:briankvin@gmail.com"
            target={"_blank"}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium border border-gray-300 dark:border-gray-700 transition-all hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </Link>
        </div>

        {/* Typewriter Effect */}
        <div
          className="mt-16 text-sm font-mono opacity-60 overflow-hidden animate-fadeInUp"
          style={{ animationDelay: "400ms" }}
        >
          <TypewriterEffect
            phrases={[
              "Full-stack Developer",
              "DS and ML Architect",
              "Problem Solver",
              "Digital Experience Creator",
              "Blockchain & Web3 Enthusiast",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

// Typewriter Effect Component
const TypewriterEffect = ({ phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== currentPhrase) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText !== "") {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <div className="flex items-center h-6">
      <span>{currentText}</span>
      <span className="ml-1 w-2 h-5 bg-primary/80 animate-blink"></span>
    </div>
  );
};

export default Intro;
