import React from "react";
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

const skills = [
  {
    icon: <Code2 size={32} />,
    name: "Frontend Development",
    items: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: <Server size={32} />,
    name: "Backend Development",
    items: ["Node.js", "Python", "PostgreSQL"],
  },
  {
    icon: <Layout size={32} />,
    name: "UI/UX Design",
    items: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    icon: <Database size={32} />,
    name: "Database",
    items: ["MongoDB", "Redis", "MySQL"],
  },
  {
    icon: <Smartphone size={32} />,
    name: "Mobile Development",
    items: ["React Native", "Flutter"],
  },
  {
    icon: <Terminal size={32} />,
    name: "DevOps",
    items: ["Docker", "AWS", "CI/CD"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="w-full bg-black py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 
              hover:border-blue-500/30 hover:bg-gray-800/20 transition-all duration-300 ease-in-out
              hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]
              transform hover:-translate-y-1">
              <div className="text-blue-500 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                {skill.name}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
