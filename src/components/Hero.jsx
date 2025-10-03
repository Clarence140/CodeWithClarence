"use client";

import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import TypingAnimation from "./TypingAnimation";

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
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div
            className={`w-full lg:w-1/2 flex justify-center transition-all duration-700 ease-in-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="/Logos/ProfilePic.png"
              alt="Clarence Sumagang"
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto max-w-md rounded-lg object-cover hover-glow"
            />
          </div>

          <div
            className={`w-full lg:w-1/2 transition-all duration-700 ease-in-out text-center lg:text-left ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 font-futuristic tracking-wider">
              CLARENCE D. SUMAGANG
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-primary-500 font-semibold mb-6 font-futuristic tracking-wider h-8 sm:h-10 lg:h-12">
              {inView && (
                <TypingAnimation
                  text="ASPIRING FULL STACK WEB DEVELOPER"
                  speed={100}
                  delay={500}
                />
              )}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A highly motivated IT fresh graduate seeking an entry-level
              position where I can apply my knowledge and continuously develop
              my skills within a professional environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded transition-all duration-300 hover-glow font-futuristic tracking-wider animate-fade delay-200 flex items-center justify-center text-sm sm:text-base no-underline hover:text-white"
              >
                VIEW PROJECTS
              </a>
              <button
                onClick={toggleModal}
                className="px-6 sm:px-8 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 font-medium rounded transition-all duration-300 hover-glow font-futuristic tracking-wider animate-fade delay-300 flex items-center justify-center text-sm sm:text-base"
              >
                REQUEST CV
              </button>
            </div>
          </div>
        </div>
      </div>

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
              RESUME REQUEST
            </h3>
            <p className="text-gray-300 mb-6">
              To protect my personal information and ensure my resume is shared
              responsibly, please use one of the contact options below to
              request a copy. I will personally review all requests and send my
              resume to serious inquiries. Thank you for understanding.
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
                  className="flex items-center gap-3 p-3 bg-dark-700/50 hover:bg-primary-500 hover:text-white rounded transition-all hover-glow animate-fade no-underline"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <span className="text-primary-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 hover:text-white transition-colors">
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
