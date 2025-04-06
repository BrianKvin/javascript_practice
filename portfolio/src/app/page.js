import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CodingProfiles from "@/components/CodingProfiles";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Intro />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Education />
      <CodingProfiles />
    </div>
  );
}
