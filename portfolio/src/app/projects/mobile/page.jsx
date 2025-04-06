"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

// Import project images
import project1 from "../../../public/images/projects/project1.webp";

// Mobile Projects data array
const mobileProjectsData = [
  {
    id: 1,
    title: "Fitness Tracking App",
    img: project1,
    summary:
      "A comprehensive mobile fitness tracking application with workout logging, progress tracking, nutrition planning, and personalized recommendations.",
    link: "/",
    github: "/",
    type: "Mobile Projects",
    stack: ["React Native", "TypeScript", "Firebase", "Redux"],
  },
  {
    id: 2,
    title: "Travel Companion App",
    img: project1,
    summary:
      "An intelligent travel companion app that provides real-time location-based recommendations, trip planning, and local experience suggestions.",
    link: "/",
    github: "/",
    type: "Mobile Projects",
    stack: ["Flutter", "Dart", "Google Maps API", "Firebase"],
  },
  {
    id: 3,
    title: "Language Learning Mobile App",
    img: project1,
    summary:
      "An interactive mobile app for language learning with adaptive difficulty, gamified learning experiences, and AI-powered conversation practice.",
    link: "/",
    github: "/",
    type: "Mobile Projects",
    stack: ["React Native", "GraphQL", "AI Integration", "Expo"],
  },
];

// Reuse the ProjectCard component from the original file
const ProjectCard = ({ project, index }) => {
  const { title, img, link, summary, github, stack } = project;
  const [isHovered, setIsHovered] = useState(false);

  // Same ProjectCard implementation as in WebProjects
  return (
    <motion.article
    // ... (copy the entire ProjectCard component from the WebProjects file)
    />
  );
};

const MobileProjects = () => {
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
          <h2 className="text-4xl font-bold mb-4">Mobile Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-primary mx-auto mb-6 rounded-full"
          />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Innovative mobile applications showcasing cross-platform development
            skills and user-centric design principles.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileProjectsData.map((project, index) => (
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

export default MobileProjects;
