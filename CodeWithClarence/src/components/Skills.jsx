"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    const skillsSection = document.querySelector(".skills-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            entry.target.classList.remove("opacity-0", "translate-x-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

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
      id="skills"
      className="skills-section scroll-animate transition-all duration-700 ease-in-out py-20 bg-dark-900 mobile-p-4"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white font-futuristic tracking-wider animate-slide-down">
          <span className="relative inline-block">MY SKILLS</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-dark-800/50 border border-dark-700/50 rounded-lg backdrop-blur-sm flex flex-col items-center transition-all hover-glow animate-fade"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl text-primary-500 mb-3">{skill.icon}</div>
              <h3 className="text-lg font-medium text-white font-futuristic tracking-wider">
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
