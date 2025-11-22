"use client";

import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "MetroJobs Website Rework",
      role: "Frontend Developer (OJT)",
      period: "2024",
      description:
        "During my on-the-job training, I collaborated with a team to redesign and redevelop the MetroJobs website. I focused on creating a modern, responsive user interface using HTML, CSS, and JavaScript. This real-world experience taught me how to work in a professional environment, collaborate with team members, and apply my technical skills to solve actual business problems.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    },
    {
      title: "PAMCares - Capstone Project",
      role: "Full Stack Developer & Team Lead",
      period: "2024",
      description:
        "Led the development of a comprehensive pet healthcare management system as my capstone project. I was responsible for both frontend and backend development, database design, and project management. This project was the biggest challenge I faced during my studies, teaching me how to manage complex projects, handle errors effectively, and deliver a complete solution from concept to deployment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase",
        "Database Design",
        "Project Management",
      ],
    },
    {
      title: "Personal Projects Portfolio",
      role: "Full Stack Developer",
      period: "2024 - Present",
      description:
        "Since graduation, I've been working on multiple personal projects to expand my skills and create meaningful web applications. Projects include RescueNet (emergency response platform), PocketMart (e-commerce platform), Productivity Tools Suite, and various other web applications. These projects have helped me master modern frameworks like React, Next.js, and improve my problem-solving abilities.",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Full Stack Development",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
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
            <span className="relative inline-block">MY EXPERIENCE</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 lg:p-10 bg-dark-800/50 rounded-xl border border-dark-700/50 backdrop-blur-sm hover-glow transition-all duration-700 ease-out ${
                sectionInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-futuristic tracking-wider mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-primary-500 font-futuristic tracking-wider mb-2">
                    {experience.role}
                  </p>
                </div>
                <span className="text-sm sm:text-base text-gray-400 font-futuristic tracking-wider whitespace-nowrap">
                  {experience.period}
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

