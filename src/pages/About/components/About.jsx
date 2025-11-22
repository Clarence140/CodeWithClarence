"use client";

import React from 'react';
import { useInView } from "react-intersection-observer";
import { 
  Briefcase, 
  MapPin, 
  Mail, 
  ExternalLink, 
  Code, 
  Layers, 
  Globe 
} from 'lucide-react';

// --- Data ---

const experienceData = [
  {
    role: "IT Staff - MetroJobs Payment & Solutions Inc.",
    company: "",
    date: "Jan 2025 – May 2025",
    type: "On-The-Job-Training",
    location: "The Regalla Park Tower, Cubao Quezon City",
    bullets: [
      "Rebuilt the company website using HTML, CSS, and JavaScript, improving its structure, navigation, and design.",
      "Designed static and animated marketing materials for social media and printed tarpaulins using Canva and Photoshop.",
      "Assisted in data encoding, file management, and documentation using Excel.",
      "Collaborated with my team to meet project deadlines."
    ]
  },
  {
    role: "Software Developer - Inspire Next Global Inc.",
    company: "",
    date: "Oct 2025 - Present",
    type: "Full-time",
    location: "Bonifacio Global City, Taguig, Philippines",
    bullets: [
      "Develop and maintain LoopWork, a multi-tenant enterprise SaaS platform built with Next.js and React, featuring document management, project tracking, and real-time video conferencing.",
      "Collaborate closely with clients and cross-functional teams to build custom web solutions that automate business workflows and enhance user experience.",
      "Contribute to high-level system architecture decisions and recommend strategies to improve application scalability and performance.",
      "Ensure software quality and UI consistency through code reviews and alignment with modern web development standards."
    ]
  }
];

const skillsData = {
  frontend: ["HTML/CSS", "ReactJS", "NextJS", "JavaScript", "TailwindCSS"],
  backend: ["Firebase", "Supabase", "Node.js", "Express.js"],
  tools: ["Git", "UI/UX Implementation", "Frontend Optimization", "Figma", "Vercel", "Cursor", "VS Code"]
};

const expertiseList = [
  "Web Application Development",
  "API Integration",
  "UI/UX Implementation",
  "Frontend Optimization",
  "Version Control (Git)"
];

// --- Components ---

const ExperienceCard = ({ role, date, type, location, bullets }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`bg-dark-800 border border-dark-700 rounded-xl p-6 mb-4 hover:border-electric-chartreuse/50 transition-all duration-300 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <h3 className="text-xl font-bold text-white">{role}</h3>
        <div className="flex items-center text-gray-400 text-sm mt-1 md:mt-0">
          <span className="mr-1">📅</span>
          <span>{date}</span>
        </div>
      </div>
      
      <p className="bg-gradient-to-tr from-neon-lime to-electric-chartreuse bg-clip-text text-transparent text-sm font-medium mb-4">
        {type} {location && `(${location})`}
      </p>

      <ul className="space-y-3">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start text-gray-300 text-sm leading-relaxed">
            <span className="mr-3 text-electric-chartreuse mt-1.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SidebarCard = ({ title, icon: Icon, children, className = "" }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`bg-dark-800 border border-dark-700 rounded-xl p-6 ${className} transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center mb-6">
        {Icon && <Icon className="w-5 h-5 text-electric-chartreuse mr-3" />}
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
};

const SkillTag = ({ text }) => (
  <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-medium text-electric-chartreuse bg-electric-chartreuse/10 border border-electric-chartreuse/30 rounded-full">
    {text}
  </span>
);

const ContactItem = ({ icon: Icon, text, href }) => (
  <div className="flex items-center mb-4 last:mb-0">
    <div className="w-8 flex justify-center">
      <Icon className="w-4 h-4 text-gray-400" />
    </div>
    {href ? (
      <a href={href} className="text-gray-300 text-sm hover:bg-gradient-to-tr hover:from-neon-lime hover:to-electric-chartreuse hover:bg-clip-text hover:text-transparent transition-all duration-300 truncate">
        {text}
      </a>
    ) : (
      <span className="text-gray-300 text-sm">{text}</span>
    )}
  </div>
);

export default function About() {
  const { ref: sectionRef } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-dark-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column: Experience */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-electric-chartreuse mr-3" />
                <h2 className="text-2xl font-bold text-white font-futuristic">Professional Experience</h2>
              </div>

              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Contact Info */}
              <SidebarCard title="Contact Information">
                <ContactItem icon={MapPin} text="Quezon City, Metro Manila" />
                <ContactItem icon={Mail} text="clarencesumagang0509@gmail.com" href="mailto:clarencesumagang0509@gmail.com" />
                <ContactItem icon={ExternalLink} text="https://codewithclarence.vercel.app/" href="https://codewithclarence.vercel.app/" />
              </SidebarCard>

              {/* Technical Skills */}
              <SidebarCard title="Technical Skills" icon={Code}>
                <div className="mb-4">
                  <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Frontend</h4>
                  <div className="flex flex-wrap">
                    {skillsData.frontend.map(skill => <SkillTag key={skill} text={skill} />)}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Backend</h4>
                  <div className="flex flex-wrap">
                    {skillsData.backend.map(skill => <SkillTag key={skill} text={skill} />)}
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Tools & Others</h4>
                  <div className="flex flex-wrap">
                    {skillsData.tools.map(skill => <SkillTag key={skill} text={skill} />)}
                  </div>
                </div>
              </SidebarCard>

              {/* Area of Expertise */}
              <SidebarCard title="Area of Expertise" icon={Layers}>
                <ul className="space-y-3">
                  {expertiseList.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm">
                      <span className="mr-2 text-electric-chartreuse">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </SidebarCard>

            </div>
          </div>

          {/* CTA Section */}
          <div ref={ctaRef} className="mt-8 lg:mt-12">
            <div
              className={`bg-gradient-to-r from-neon-lime to-electric-chartreuse rounded-xl p-6 md:p-8 lg:p-10 shadow-xl transition-all duration-700 ease-out ${
                ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-futuristic">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-gray-900 text-sm md:text-base mb-6 leading-relaxed">
                  I'm always interested in discussing new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href="/contact"
                    className="w-full sm:w-auto px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg no-underline text-sm md:text-base"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="w-full sm:w-auto px-6 py-2.5 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 no-underline text-sm md:text-base"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
