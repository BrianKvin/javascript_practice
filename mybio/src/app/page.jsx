import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

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
