"use client";
import axios from "axios";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export default function Project() {
  const [projects, setProjects] = useState(null);
  const fetchRef = useRef(false);
  useEffect(() => {
    const fetch = async () => {
      fetchRef.current = true;
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}project`);
      setProjects(res.data.projects);
    };
    if (fetchRef.current == false) {
      fetch();
    }
  }, []);

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
