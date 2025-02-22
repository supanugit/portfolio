"use client";
import axios from "axios";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export default function Project() {
  // const [projects, setProjects] = useState(null);
  const projects = [
    {
      title: "Project One",
      description: "A fullstack application built with React and Node.js",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      github: "#",
      live: "#",
    },
    {
      title: "Project Two",
      description: "E-commerce platform with real-time updates",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      github: "#",
      live: "#",
    },
    {
      title: "Project Three",
      description: "AI-powered analytics dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 duration-500">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors">
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-400 hover:text-white transition-colors">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
