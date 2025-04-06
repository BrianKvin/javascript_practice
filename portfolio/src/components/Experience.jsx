"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import dukaLogo from "../../public/images/work/dukapaq.webp";

// Experience data structure
const experienceData = [
  {
    id: 1,
    position: "Full-stack Developer",
    company: "Dukapaq",
    logo: "DukaLogo",
    companyLink: "https://dukapaq.co.ke/",
    timeline: "April 2023 - Present",
    location: "Remote",
    overview:
      "Responsible for designing and building scalable APIs and web applications using JavaScript, TypeScript, Node.js, Express.js, Python, Django, and React. Focused on backend development, database management, and optimizing application performance while ensuring seamless integration with CI/CD pipelines and cloud services.",
    keyAchievements: [
      "Developed and maintained server-side applications in Python and Django, utilizing Django's ORM and PostgreSQL for optimized data management.",
      "Created dynamic, responsive web interfaces with React and enhanced performance by implementing state management solutions like Redux.",
      "Integrated automated testing and CI/CD pipelines with tools such as GitHub Actions, Docker, Jenkins, Kubernetes, and AWS services (EC2, RDS, S3, CloudWatch), reducing deployment time by 25%.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "Python",
      "Django",
      "React",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    color: "#4FD1C5", // Teal color
  },
  {
    id: 2,
    position: "Mobile Developer",
    company: "Dukapaq",
    logo: "DukaLogo",
    companyLink: "https://dukapaq.co.ke/",
    timeline: "Nov 2022 - April 2024",
    location: "Remote",
    overview:
      "Led the development of cross-platform mobile applications using Flutter, focusing on delivering high-performance and user-friendly applications for both iOS and Android. Collaborated with cross-functional teams to integrate APIs and ensure seamless functionality across devices.",
    keyAchievements: [
      "Successfully implemented push notifications and in-app messaging, driving a 15% increase in user retention.",
      "Integrated third-party APIs and services to enhance app functionality and performance.",
      "Collaborated with product managers, designers, and backend developers to translate wireframes and design mockups into production-ready mobile code.",
    ],
    skills: [
      "Flutter",
      "Dart",
      "iOS",
      "Android",
      "Firebase",
      "RESTful APIs",
      "UI/UX",
      "Git",
    ],
    color: "#4FD1C5", // Teal color
    // color: "#667EEA", // Indigo color
  },
];

const ExperienceCard = ({ experience, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isActive ? 1 : 0.97,
        boxShadow: isActive
          ? "0 10px 30px rgba(0, 0, 0, 0.1)"
          : "0 4px 6px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-xl p-6 cursor-pointer transition-all duration-300
        ${
          isActive
            ? "border-l-4 z-10"
            : "border-l-2 opacity-80 hover:opacity-100"
        }
      `}
      style={{ borderLeftColor: experience.color }}
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <div>
          <h3 className="text-xl font-bold">{experience.position}</h3>
          <div className="flex gap-2 items-center justify-start">
            <img
              src={dukaLogo.src}
              alt={`${experience.company} logo`}
              className="w-8 h-8 object-contain rounded-full"
            />
            <a
              href={experience.companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:underline"
              style={{ color: experience.color }}
            >
              {experience.company}
            </a>
          </div>
        </div>
        <div className="text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <span>{experience.timeline}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-4 overflow-hidden"
        >
          <p className="text-gray-700 mb-4">{experience.overview}</p>

          <h4 className="font-bold text-gray-800 mb-2">Key Achievements</h4>
          <ul className="space-y-2 mb-4">
            {experience.keyAchievements.map((achievement, index) => (
              // <li key={index} className="flex items-start gap-2">
              //   <span
              //     className="mt-1 flex-shrink-0 w-2 h-2 rounded-full"
              //     style={{ backgroundColor: experience.color }}
              //   ></span>
              //   <span>{achievement}</span>
              // </li>
              <li key={index} className="flex items-start">
                {" "}
                <svg
                  className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={experience.color}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />{" "}
                </svg>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full border border-secondary/20"
                // style={{ backgroundColor: experience.color }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(
    experienceData[0].id
  );

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-gradient-to-r after:from-teal-400 after:to-indigo-500 after:bottom-0 after:left-0 pb-2">
            Professional Journey
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A timeline of my professional experience, skills, and key
            accomplishments
          </p>
        </div>

        <div className="space-y-4">
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isActive={activeExperience === experience.id}
              onClick={() => setActiveExperience(experience.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
