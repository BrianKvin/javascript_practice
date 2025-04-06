"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

// Import project images
import project1 from "../../../public/images/projects/project1.webp";

// Project data array (can be moved to a separate file)
const projectsData = [
  {
    id: 1,
    title: "Crypto Screener Application",
    img: project1,
    summary:
      "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    link: "/",
    github: "/",
    // type: "Featured Project",
    stack: ["React", "Tailwind CSS", "Context API", "Recharts"],
  },
  {
    id: 2,
    title: "Crypto Screener Application",
    img: project1,
    summary:
      "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    link: "/",
    github: "/",
    // type: "Featured Project",
    stack: ["React", "Tailwind CSS", "Context API", "Recharts"],
  },
  {
    id: 3,
    title: "Crypto Screener Application",
    img: project1,
    summary:
      "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    link: "/",
    github: "/",
    // type: "Featured Project",
    stack: ["React", "Tailwind CSS", "Context API", "Recharts"],
  },
];

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
      {/* Card inner container with 3D effect */}
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
        {/* Project image with overlay effects */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-60"
            animate={{ opacity: isHovered ? 0.8 : 0.6 }}
          />

          <motion.div className="absolute inset-0 z-20 flex items-end p-6">
            <div>
              {/* <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-primary/80 text-white rounded-full"
              >
                {type}
              </motion.span> */}
              <motion.h3
                className="text-2xl font-bold text-white mb-1 drop-shadow-md"
                animate={{
                  y: isHovered ? -5 : 0,
                  scale: isHovered ? 1.03 : 1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {title}
              </motion.h3>
            </div>
          </motion.div>

          <motion.div
            animate={{
              scale: isHovered ? 1.08 : 1,
              filter: isHovered
                ? "brightness(0.8) saturate(1.2)"
                : "brightness(0.9) saturate(1)",
            }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <Image
              src={img}
              alt={title}
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </motion.div>
        </div>

        {/* Project details */}
        <div className="p-6">
          <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
            {summary}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {Array.isArray(stack) &&
              stack.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="text-xs font-medium px-2.5 py-0.5 bg-secondary/30 rounded-full border border-secondary/20"
                >
                  {tech}
                </motion.span>
              ))}
          </div>

          {/* Action links */}
          <motion.div
            className="flex items-center justify-between mt-auto pt-4 border-t border-border/30"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            <Link
              href={github}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium group/link"
              aria-label="View GitHub repository"
            >
              <motion.span
                className="p-2 rounded-full bg-muted group-hover/link:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-4 h-4 group-hover/link:text-primary transition-colors" />
              </motion.span>
              <span className="group-hover/link:text-primary transition-colors">
                Code
              </span>
            </Link>

            <Link
              href={link}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium group/demo"
              aria-label="Visit live project"
            >
              <span className="group-hover/demo:text-primary transition-colors">
                Demo
              </span>
              <motion.span
                className="p-2 rounded-full bg-muted group-hover/demo:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlineExternalLink className="w-4 h-4 group-hover/demo:text-primary transition-colors" />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Floating highlight effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -inset-px rounded-xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(45deg, transparent 70%, rgba(255,255,255,0.1) 100%)",
                zIndex: 10,
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
};

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
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

  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.type === selectedFilter)
      );
    }
  }, [selectedFilter]);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-primary mx-auto mb-6 rounded-full"
          />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A curated selection of projects that showcase my expertise in UI/UX
            design, front-end development, and innovative problem-solving.
          </p>
        </motion.div>

        {/* Project filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {["All", "Web Projects", "Mobile Projects", ].map(
            (filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 overflow-hidden ${
                  selectedFilter === filter
                    ? "text-white"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {selectedFilter === filter && (
                  <motion.span
                    layoutId="filterBackground"
                    className="absolute inset-0 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </motion.button>
            )
          )}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
            href="/all-projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-full font-medium hover:border-primary hover:text-primary transition-all group relative overflow-hidden"
          >
            <span className="relative z-10">Explore All Projects</span>
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

export default Projects;
