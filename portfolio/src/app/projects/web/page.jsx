"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

// Import project images
import project1 from "../../../public/images/projects/project1.webp";

// Web Projects data array
const webProjectsData = [
  {
    id: 1,
    title: "Crypto Screener Application",
    img: project1,
    summary:
      "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    link: "/",
    github: "/",
    type: "Web Projects",
    stack: ["React", "Tailwind CSS", "Context API", "Recharts"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    img: project1,
    summary:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing personal projects and skills with smooth animations and interactive design.",
    link: "/",
    github: "/",
    type: "Web Projects",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    img: project1,
    summary:
      "A full-featured e-commerce platform with advanced filtering, product recommendations, and seamless checkout process using modern web technologies.",
    link: "/",
    github: "/",
    type: "Web Projects",
    stack: ["React", "Redux", "Node.js", "MongoDB"],
  },
];

// Reuse the ProjectCard component from the original file
const ProjectCard = ({ project, index }) => {
  const { title, img, link, summary, github, stack } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative h-full rounded-xl overflow-hidden group perspective"
    >
      {/* Same ProjectCard implementation as in the original file */}
      <motion.div
        className="relative h-full rounded-xl overflow-hidden border border-border/40 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm shadow-lg"
        animate={{
          rotateX: isHovered ? 2 : 0,
          rotateY: isHovered ? -3 : 0,
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        {/* Rest of the ProjectCard implementation remains the same */}
        {/* ... (copy the entire ProjectCard component from the original file) */}
      </motion.div>
    </motion.article>
  );
};

const WebProjects = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Web Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-primary mx-auto mb-6 rounded-full"
          />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A showcase of web development projects demonstrating expertise in modern web technologies and responsive design.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-full font-medium hover:border-primary hover:text-primary transition-all group relative overflow-hidden"
          >
            <span className="relative z-10">Back to All Projects</span>
            <motion.span
              className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <HiOutlineExternalLink className="w-3 h-3 text-primary" />
            </motion.span>
            <motion.span className="absolute bottom-0 left-0 h-full bg-gradient-to-r from-primary/10 to-transparent w-0 group-hover:w-full -z-0 transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WebProjects;