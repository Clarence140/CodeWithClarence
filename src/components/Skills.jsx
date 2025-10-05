"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiFirebase,
  SiCanva,
  SiAdobephotoshop,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Canva", icon: <SiCanva /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 sm:py-20 lg:py-24 bg-dark-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ease-out ${
            sectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 sm:mb-16 text-center text-white font-futuristic tracking-wider">
            <span className="relative inline-block">MY SKILLS</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 bg-dark-800/50 border border-dark-700/50 rounded-xl backdrop-blur-sm flex flex-col items-center transition-all duration-300 ease-out hover-glow cursor-pointer ${
                sectionInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl text-primary-500 mb-2 sm:mb-3 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-medium text-white font-futuristic tracking-wider text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
