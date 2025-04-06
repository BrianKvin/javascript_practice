"use client";

import Image from "next/image";
import skills from "@/data/Skills";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SkillCard = ({ category, skillsList, currentTheme }) => {
  const Icon = skillsList.icon;

  return (
    <div className="border border-border/40 rounded-lg p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5" />
        <h3 className="text-md font-medium">{category}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
        {skillsList.skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1 p-2 rounded-lg transition-transform hover:scale-105"
          >
            {typeof skill.icon === "string" ? (
              <Image
                src={skill.icon}
                alt={skill.name}
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            ) : (
              <Image
                src={
                  currentTheme === "dark" ? skill.icon.dark : skill.icon.light
                }
                alt={skill.name}
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            )}
            <span className="text-sm text-center text-muted-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4 text-center">Skills</h2>
      <div className="text-center py-4">
        <p className="max-w-2xl mx-auto">
          A comprehensive toolkit of technical skills and technologies I've
          mastered throughout my journey in software development.
        </p>
      </div>

      <hr className="my-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillsList]) => (
          <SkillCard
            key={category}
            category={category}
            skillsList={skillsList}
            currentTheme={currentTheme}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
