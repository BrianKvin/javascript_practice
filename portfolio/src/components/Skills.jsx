"use client";

import Image from "next/image";
import skills from "@/data/Skills";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const SkillCard = ({ category, skillsList, currentTheme, index }) => {
  const Icon = skillsList.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border/40 rounded-lg p-5 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3 border-b border-border/30 pb-3">
        <div className="p-2 rounded-md bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">{category}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skillsList.skillsData.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-primary/5"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {typeof skill.icon === "string" ? (
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              ) : (
                <Image
                  src={
                    currentTheme === "dark" ? skill.icon.dark : skill.icon.light
                  }
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              )}
            </div>
            <span className="text-sm font-medium text-center">
              {skill.name}
            </span>
            {skill.level && (
              <div className="w-full bg-muted/50 rounded-full h-1.5 mt-1">
                <div
                  className="bg-primary h-1.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(true); // Set default to true to ensure content shows

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" } // Improved margins
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section ref={sectionRef} className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} // Always animate in, not dependent on isInView
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 relative inline-block group">
            Technical Toolkit
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A comprehensive collection of technologies and skills I've mastered
            throughout my journey in software development and design.
          </p>
        </motion.div>

        <hr className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillsList], index) => (
            <SkillCard
              key={category}
              category={category}
              skillsList={skillsList}
              currentTheme={currentTheme}
              index={index}
            />
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // Always animate in, not dependent on isInView
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground italic">
            Always learning and expanding my technical expertise
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;
