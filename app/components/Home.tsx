"use client";
import { useState } from "react";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import Hero from "../components/hero";
import Project from "../components/Project";
// import Project from "../components/Project";
import { Skills } from "../components/Skils";

export default function Home() {
  const [x, setx] = useState(null);
  const [y, sety] = useState(null);
  return (
    <div
      onMouseMove={(e) => {
        setx(e.clientX);
        sety(e.clientY);
      }}
      className="w-full    justify-center  bg-black px-10 md:px-20">
      <span
        style={{
          top: y,
          left: x,
          transform: "translate(-50%, -50%)",
        }}
        className=" w-40 h-40  rounded-full absolute bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none "
      />
      <Hero />
      <Project />
      <Skills />
      <Contact />
      <Blog />
    </div>
  );
}
