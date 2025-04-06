"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

// Import project images
import project1 from "../../../public/images/projects/project1.webp";

// Web3 Projects data array
const web3ProjectsData = [
  {
    id: 1,
    title: "Decentralized Marketplace",
    img: project1,
    summary:
      "A blockchain-powered decentralized marketplace that enables secure, transparent peer-to-peer transactions using smart contracts and cryptocurrency payments.",
    link: "/",
    github: "/",
    type: "Web3 Work",
    stack: ["Solidity", "Ethereum", "Web3.js", "React", "Hardhat"],
  },
  {
    id: 2,
    title: "NFT Minting Platform",
    img: project1,
    summary:
      "A comprehensive NFT minting and trading platform with advanced features like royalty tracking, metadata management, and cross-chain compatibility.",
    link: "/",
    github: "/",
    type: "Web3 Work",
    stack: ["Solidity", "IPFS", "Polygon", "Next.js", "Moralis"],
  },
  {
    id: 3,
    title: "Decentralized Finance (DeFi) Dashboard",
    img: project1,
    summary:
      "An advanced DeFi dashboard providing real-time analytics, yield farming strategies, and comprehensive portfolio management across multiple blockchain networks.",
    link: "/",
    github: "/",
    type: "Web3 Work",
    stack: ["Web3.js", "Uniswap", "Chainlink", "TypeScript", "React"],
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

const Web3Projects = () => {
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
          <h2 className="text-4xl font-bold mb-4">Web3 Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-primary mx-auto mb-6 rounded-full"
          />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Innovative blockchain and decentralized technology projects
            showcasing expertise in smart contract development, Web3
            technologies, and decentralized applications.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {web3ProjectsData.map((project, index) => (
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

export default Web3Projects;
