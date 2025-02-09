import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Projects from "./projects/page";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="w-[70%] min-h-screen mx-auto">
      <Intro />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}
