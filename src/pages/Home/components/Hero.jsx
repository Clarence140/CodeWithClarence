"use client";

import { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaBriefcase, FaFolderOpen } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center py-20 bg-dark-900"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Image (lg:col-span-5) */}
          <div className={`lg:col-span-5 flex justify-center lg:justify-start lg:items-start lg:-ml-4 transition-all duration-700 ease-in-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <img
              src="/Logos/ProfilePic.png"
              alt="Clarence Sumagang - Software Engineer"
              className="w-76 h-76 sm:w-88 sm:h-88 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem] object-cover"
            />
          </div>

          {/* Right Column: Text and Buttons (lg:col-span-7) */}
          <div className={`lg:col-span-7 space-y-4 transition-all duration-700 ease-in-out lg:ml-auto lg:max-w-2xl ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {/* Badge / Tag */}
            <span className="inline-flex items-center rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-gray-900 shadow-lg">
              SOFTWARE ENGINEER
            </span>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              I design, build, and ship reliable software
              <span className="text-accent-500 block">end-to-end</span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 max-w-xl">
              Hi, I'm Clarence. An experienced <span className="font-bold text-white">Software Engineer from the Philippines</span>. I specialize in scalable web applications. I transform complex business requirements into elegant, high-performance solutions using modern technologies like React, Node.js, and cloud platforms.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-2">
              {/* View Portfolio Button (Primary) */}
              <a
                href="/projects"
                className="flex items-center justify-center px-5 py-2.5 bg-accent-500 text-gray-900 font-semibold rounded-xl hover:bg-accent-600 transition duration-300 shadow-xl no-underline text-base"
              >
                <FaFolderOpen className="mr-2" size={18} />
                View My Portfolio
              </a>

              {/* Professional Experiences Button (Secondary) */}
              <button
                onClick={toggleModal}
                className="flex items-center justify-center px-5 py-2.5 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800 transition duration-300 text-base"
              >
                <FaBriefcase className="mr-2" size={18} />
                Professional Experiences
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Experiences Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade"
          onClick={toggleModal}
        >
          <div
            className="bg-dark-800/90 border border-dark-700 rounded-lg p-8 max-w-md w-full relative hover-glow animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              onClick={toggleModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-primary-500 mb-4 font-futuristic tracking-wider">
              PROFESSIONAL EXPERIENCES
            </h3>
            <p className="text-gray-300 mb-6">
              To learn more about my professional experiences and request my resume, please use one of the contact options below. I will personally review all requests and share my professional background with serious inquiries. Thank you for your interest.
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: <FaFacebook className="text-xl" />,
                  label: "Facebook",
                  href: "https://www.facebook.com/cl4rence14/",
                },
                {
                  icon: <FaLinkedin className="text-xl" />,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/clarence-sumagang-33411a368/",
                },
                {
                  icon: <FaGithub className="text-xl" />,
                  label: "GitHub",
                  href: "https://github.com/Clarence140",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-dark-700/50 hover:bg-accent-500 hover:text-gray-900 rounded transition-all hover-glow animate-fade no-underline"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <span className="text-accent-500 group-hover:text-gray-900 transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 hover:text-gray-900 transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
