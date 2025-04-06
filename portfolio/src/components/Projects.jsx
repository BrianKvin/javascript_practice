"use client"

import React, { useState } from "react";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { SiDatadog } from "react-icons/si";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <FaComputer />,
    title: "Web Development",
    description:
      "Crafting robust, scalable, and efficient software solutions that power innovation and drive success.",
    projectCount: 12,
  },
  {
    icon: <CiMobile3 />,
    title: "Mobile Development",
    description:
      "Building seamless, high-performance mobile applications that deliver exceptional user experiences on the go.",
    projectCount: 8,
  },
  {
    icon: <BsFillClipboard2DataFill />,
    title: "Data Science",
    description:
      "Transforming raw data into actionable insights using machine learning, AI, and advanced analytics.",
    projectCount: 6,
  },
  {
    icon: <SiDatadog />,
    title: "Web3 & Blockchain",
    description:
      "Designing intuitive, user-centered experiences that blend creativity with functionality for digital excellence.",
    projectCount: 10,
  },
];

const ProjectCard = ({ icon, title, description, projectCount }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-72 group cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 border border-border/40 rounded-xl py-6 px-4 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1">
        <div className="h-full flex flex-col">
          <div className="flex gap-">
          <span className="text-4xl text-gray-600 mb-4">{icon}</span>

          <h3 className="text-lg font-medium mb-2">{title}</h3>
          </div>

          <p className="text-sm text-mu2ted-foreground flex-grow">
            {description}
          </p>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-teal-600 font-medium">
              {projectCount} Projects
            </span>
            <div
              className={`
              w-8 h-8 rounded-full shadow-xl flex items-center justify-center
              transition-all duration-300
              ${isHovered ? "bg-teal-600 text-white" : "text-blue-600"}
            `}
            >
              →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="w-[70%] mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="text-center mb-12">
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Bringing ideas to life through code whether it's building scalable
          software, crafting intuitive mobile apps, or uncovering insights with
          data science. Explore my expertise across these domains.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card, index) => (
          <ProjectCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Projects;



