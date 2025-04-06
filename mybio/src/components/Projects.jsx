import React from "react";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { SiDatadog } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";

const cards = [
  {
    icon: <FaComputer />,
    title: "Software Engineering",
    description:
      "Crafting robust, scalable, and efficient software solutions that power innovation and drive success.",
    text: "Go to projects",
  },
  {
    icon: <CiMobile3 />,
    title: "Mobile Development",
    description:
      "Building seamless, high-performance mobile applications that deliver exceptional user experiences on the go.",
    text: "Go to projects",
  },
  {
    icon: <BsFillClipboard2DataFill />,
    title: "Data Science",
    description:
      "Transforming raw data into actionable insights using machine learning, AI, and advanced analytics.",
    text: "Go to projects",
  },
  {
    icon: <SiDatadog />,
    title: "UI/UX",
    description:
      "Designing intuitive, user-centered experiences that blend creativity with functionality for digital excellence.",
    text: "Go to projects",
  },
];

const ProjectCard = ({ icon, title, description, text }) => (
  <div className="border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center gap-4 w-60 h-70">
    <div className="text-4xl self-start">{icon}</div>
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <button className="mt-auto pt-4 flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800">
        <span>Explore Projects</span>
        <BsArrowRight className="text-lg" />
      </button>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4 text-center">Projects</h2>
      <div className="text-center py-4">
        <p className="max-w-2xl mx-auto">
          Bringing ideas to life through code whether it's building scalable
          software, crafting intuitive mobile apps, or uncovering insights with
          data science. <br />
          Explore my expertise across these domains.
        </p>
      </div>

      <hr className="my-8" />

      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <ProjectCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
