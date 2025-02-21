import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import Hero from "../components/hero";
import Project from "../components/Project";
// import Project from "../components/Project";
import { Skills } from "../components/Skils";

export default function Home() {
  return (
    <div className="w-full   justify-center  bg-black px-10 md:px-20">
      <Hero />
      <Project />
      <Skills />
      <Contact />
      <Blog />
    </div>
  );
}
