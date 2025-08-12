"use client";

import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const aboutSection = document.querySelector(".about-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <section
      id="about"
      className="about-section scroll-animate py-20 bg-dark-900 mobile-p-4"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white font-futuristic animate-slide-down">
          <span className="relative inline-block">ABOUT ME</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mobile-flex-col">
          <div className="flex-1 p-8 bg-dark-800/50 rounded-lg border border-dark-700/50 backdrop-blur-sm hover-glow scroll-animate animate-slide-left">
            <h3 className="text-2xl font-bold mb-6 text-center text-white font-futuristic">
              PERSONAL PROFILE
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm Clarence Dansalan Sumagang, a 23-year-old IT graduate from
              the Philippines. I'm a passionate cyclist, gamer, and content
              creator who makes videos that entertain and inform gamers and
              nature lovers alike. I enjoy building meaningful websites that
              solve real world problems through design and technology. Many of
              my web project ideas come to me while riding my bike, when I
              reflect on everyday challenges and possible solutions. Since
              graduating, I have been focusing on improving my skills step by
              step, especially in frontend development with React. As a content
              creator, I share gameplay, strategies, and cycling videos paired
              with music that fits the mood. I love creating and look forward to
              growing and taking on new challenges.
            </p>
          </div>

          <div className="hidden lg:block w-px bg-dark-700/50"></div>

          <div className="flex-1 p-8 bg-dark-800/50 rounded-lg border border-dark-700/50 backdrop-blur-sm hover-glow scroll-animate animate-slide-right">
            <h3 className="text-2xl font-bold mb-6 text-center text-white font-futuristic">
              DEVELOPMENT JOURNEY
            </h3>
            <p className="text-gray-300 leading-relaxed">
              My journey into web development began during our capstone project
              where I led both frontend and backend tasks. I designed the
              interface, managed the database, and handled the core logic. It
              was the biggest project I faced, and though it came with many
              challenges and errors, I learned a lot and grew more confident.
              Later, during my OJT at MetroJobs, I helped redesign their website
              with friends using HTML, CSS, and JavaScript. This real-world
              experience was rewarding and helped me apply my skills. Now that I
              have graduated, I am focused on mastering frameworks like React to
              build cleaner and more dynamic websites. I stay motivated by my
              passion and eagerness to face new challenges in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
