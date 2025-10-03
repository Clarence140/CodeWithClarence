"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
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
        <div
          className={`transition-all duration-700 ease-out ${
            sectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 sm:mb-16 text-center text-white font-futuristic tracking-wider">
            <span className="relative inline-block">ABOUT ME</span>
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div
            ref={leftRef}
            className={`flex-1 p-6 sm:p-8 lg:p-10 bg-dark-800/50 rounded-xl border border-dark-700/50 backdrop-blur-sm hover-glow transition-all duration-700 ease-out ${
              leftInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center text-white font-futuristic tracking-wider">
              PERSONAL PROFILE
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
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

          <div className="hidden xl:block w-px bg-dark-700/50"></div>

          <div
            ref={rightRef}
            className={`flex-1 p-6 sm:p-8 lg:p-10 bg-dark-800/50 rounded-xl border border-dark-700/50 backdrop-blur-sm hover-glow transition-all duration-700 ease-out ${
              rightInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center text-white font-futuristic tracking-wider">
              DEVELOPMENT JOURNEY
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
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
