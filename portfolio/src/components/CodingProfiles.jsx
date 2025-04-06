"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Terminal,
  BrainCircuit,
  PenTool,
  Trophy,
  Database,
} from "lucide-react";

const CodingProfiles = () => {
  const profiles = [
    {
      title: "LeetCode",
      icon: Terminal,
      url: "https://leetcode.com/briankvin",
    },
    {
      title: "GeeksForGeeks",
      icon: Code,
      url: "https://www.geeksforgeeks.org/user/brian5ew4/",
    },
    {
      title: "HackerRank",
      icon: BrainCircuit,
      url: "https://www.hackerrank.com/profile/briankvin",
    },
    {
      title: "Kaggle",
      icon: Database,
      url: "https://kaggle.com/BrianKvin",
    },
    {
      title: "CodeChef",
      icon: PenTool,
      url: "https://www.codechef.com/users/briankvin",
    },
    {
      title: "Codeforces",
      icon: Trophy,
      url: "https://codeforces.com/profile/briankvin",
    },
  ];

  return (
    <section className="pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-4"
        >
          <h2 className="text-3xl font-bold relative inline-block group">
            Coding Profiles
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground py-4">
            Explore my problem-solving journey across various competitive
            programming platforms.
          </p>
        </motion.div>
        <hr className="py-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-8 rounded-lg border border-border/30 hover:border-primary transition-all duration-300 hover:shadow-md group bg-background/50 backdrop-blur-sm"
            >
              <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <profile.icon className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-medium text-lg">{profile.title}</h4>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
