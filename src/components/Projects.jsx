"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const projectsData = [
  {
    id: 1,
    title: "MetroJobs Website Rework (OJT)",
    description:
      "A recruitment and HR solutions website connecting job seekers with top companies across various industries. Features comprehensive job listings, detailed company information, and branch locations in a clean, user-friendly interface. Built with HTML, CSS, and JavaScript for seamless interactivity. Enhanced with Canva-designed animated GIFs and Photoshop-optimized images for professional visual presentation. Developed during on-the-job training to deliver modern recruitment solutions.",
    techStack: ["HTML", "CSS", "JavaScript", "Canva", "Photoshop"],
    liveLink: "https://metro-jobs.vercel.app/",
    githubLink: "https://github.com/Clarence140/MetroJobsss",
    images: [
      "/assets/metrojobs/MetroJobsHome.png",
      "/assets/metrojobs/MetroJobsAboutUS.png",
      "/assets/metrojobs/MetroJobsJobOpening.png",
      "/assets/metrojobs/MetroJobsFacilities.png",
      "/assets/metrojobs/MetroJobsContacts.png",
    ],
  },
  {
    id: 2,
    title: "PAMCares – Online Pet Healthcare System (Capstone Project)",
    description:
      "A comprehensive web-based pet healthcare management system for the Philippine Animal Medical Center (PAMC) in Quezon City. Enhances accessibility and connectivity between pet owners and veterinary professionals through online appointment booking, digital medical records access, and teleconsultation services. Developed as a capstone project using HTML, CSS, and Vanilla JavaScript with Firebase handling database management and authentication. UI/UX designed with Figma and Canva for intuitive user experience.",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Canva", "Figma"],
    liveLink: "#",
    githubLink: "https://github.com/Clarence140/PAMCares-FINAL",
    images: [
      "/assets/PAMCares/PamCaresLogin.PNG",
      "/assets/PAMCares/PamCaresAdmin.PNG",
      "/assets/PAMCares/PamCaresAdminAccMan.PNG",
      "/assets/PAMCares/PamCaresUserDashBoard.PNG",
      "/assets/PAMCares/PamCaresUserBooking.PNG",
    ],
  },
  {
    id: 3,
    title: "Clarence Cycling Adventures Website (Under Development)",
    description:
      "A personal cycling website documenting the journeys of LUNA, a custom-built road bike. Features dedicated sections including Meet LUNA, Adventures Gallery, Bike Specifications, and Contact. Built with modern React and Vite for optimal performance and clean, responsive UI. JavaScript powers all interactive features while Photoshop enhances visual aesthetics. This project beautifully merges web development expertise with cycling passion, creating an engaging digital showcase for cycling enthusiasts.",
    techStack: ["React", "Vite", "Javascript", "Photoshop"],
    liveLink: "https://clarence-cyling-web.vercel.app/",
    githubLink: "https://github.com/Clarence140/ClarenceCylingWeb",
    images: [
      "/assets/ClarenceCycling/ClarenceCyclingHero.PNG",
      "/assets/ClarenceCycling/ClarenceCyclingLUNA.PNG",
      "/assets/ClarenceCycling/ClarenceCyclingAdventures.PNG",
      "/assets/ClarenceCycling/ClarenceCyclingOwner.PNG",
      "/assets/ClarenceCycling/ClarenceCyclingSpec.PNG",
    ],
  },
  {
    id: 4,
    title: "RescueNet – Emergency Response Platform",
    description:
      "A life-saving emergency response platform for Metro Manila residents providing instant access to 100+ location-based emergency hotlines across five critical categories: Fire, Flood/Disaster, Crime, Health/Medical, and Power & Utilities. Features district-specific services for Quezon City and Manila City, role-based action plans, and intuitive mobile-first design. Built with React, Vite, Tailwind CSS, Framer Motion, and Radix UI. This community-focused platform reduces emergency response time by centralizing essential contacts and guidance.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Radix UI"],
    liveLink: "https://rescue-net.vercel.app/",
    githubLink: "https://github.com/Clarence140/RescueNet",
    images: [
      "/assets/RescueNet/1.png",
      "/assets/RescueNet/2.png",
      "/assets/RescueNet/3.png",
      "/assets/RescueNet/FL1.png",
      "/assets/RescueNet/FL2.png",
      "/assets/RescueNet/F1.png",
      "/assets/RescueNet/F2.png",
      "/assets/RescueNet/C1.png",
      "/assets/RescueNet/C2.png",
      "/assets/RescueNet/H1.png",
      "/assets/RescueNet/H2.png",
      "/assets/RescueNet/P1.png",
      "/assets/RescueNet/P2.png",
    ],
  },
  {
    id: 5,
    title: "PocketMart – Digital Sari-Sari Store Platform (Under Development)",
    description:
      "A comprehensive e-commerce platform digitizing traditional Filipino sari-sari stores, bridging neighborhood convenience with modern online shopping. Features dual-portal architecture with customer storefront for seamless browsing, reservations, and purchases, plus robust admin dashboard for inventory management, order processing, sales analytics, and user administration. Built with cutting-edge Next.js 15, React 19, and Tailwind CSS v4. Empowers local Filipino store owners to thrive digitally while preserving community shopping traditions.",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS v4",
      "Framer Motion",
      "Lucide React",
    ],
    liveLink: "https://pocket-mart-v2.vercel.app/",
    githubLink: "https://github.com/Clarence140/PocketMartV2",
    images: [
      "/assets/PocketMart/P1Landing.png",
      "/assets/PocketMart/user1.png",
      "/assets/PocketMart/user2.png",
      "/assets/PocketMart/user3.png",
      "/assets/PocketMart/user4.png",
      "/assets/PocketMart/user5.png",
      "/assets/PocketMart/user6.png",
      "/assets/PocketMart/admin1.png",
      "/assets/PocketMart/admin2.png",
      "/assets/PocketMart/admin3.png",
      "/assets/PocketMart/admin4.png",
      "/assets/PocketMart/admin5.png",
      "/assets/PocketMart/admin6.png",
    ],
  },
  {
    id: 6,
    title: "Productivity Tools Suite – Boost Your Workflow",
    description:
      "A comprehensive web application featuring six privacy-focused productivity tools: professional FlowDoc Generator with 36+ industry-standard symbols, OCR text extraction supporting 100+ languages, real-time word counter with reading estimates, email-to-Markdown formatter, random spin-wheel picker, and Markdown-to-Word converter. Features full-screen visualization, zoom controls, parallel processing diagrams, and grouping capabilities. All processing happens client-side ensuring complete data privacy with zero server uploads.",
    techStack: ["Next.js", "Tailwind CSS", "Mermaid.js", "Tesseract.js"],
    liveLink: "https://productivity-tools-suite.vercel.app/",
    githubLink: "https://github.com/Clarence140/Productivity-Tools-Suite",
    images: [
      "/assets/ProductivityTools/1.png",
      "/assets/ProductivityTools/2.png",
      "/assets/ProductivityTools/3.png",
    ],
  },
];

const Projects = () => {
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState("");
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(3);
  const [isPageChanging, setIsPageChanging] = useState(false);
  const imgRef = useRef(null);
  const modalRef = useRef(null);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const projectsSection = document.querySelector(".projects-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "-translate-x-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsSection) {
      observer.observe(projectsSection);
    }

    const initialIndexes = {};
    projectsData.forEach((project) => {
      initialIndexes[project.id] = 0;
    });
    setActiveImageIndex(initialIndexes);

    const interval = setInterval(() => {
      setActiveImageIndex((prevIndexes) => {
        const newIndexes = { ...prevIndexes };
        projectsData.forEach((project) => {
          newIndexes[project.id] =
            (prevIndexes[project.id] + 1) % project.images.length;
        });
        return newIndexes;
      });
    }, 5000);

    return () => {
      if (projectsSection) observer.unobserve(projectsSection);
      clearInterval(interval);
    };
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber === currentPage || pageNumber < 1 || pageNumber > totalPages)
      return;

    setIsPageChanging(true);

    // Small delay for smooth transition
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsPageChanging(false);

      // Scroll to top of projects section smoothly
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const offset = 80; // offset for fixed header if any
        const elementPosition = projectsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  const openModal = (imageSrc, projectId, imgIndex) => {
    setCurrentModalImage(imageSrc);
    setCurrentProjectId(projectId);
    setCurrentImageIndex(imgIndex);
    setModalOpen(true);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    if (!currentProjectId) return;
    const project = projectsData.find((p) => p.id === currentProjectId);
    if (!project) return;

    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentImageIndex - 1 + project.images.length) % project.images.length;
    } else {
      newIndex = (currentImageIndex + 1) % project.images.length;
    }
    setCurrentImageIndex(newIndex);
    setCurrentModalImage(project.images[newIndex]);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.ctrlKey) {
      const delta = e.deltaY * -0.01;
      const newZoom = Math.min(Math.max(0.5, zoomLevel + delta), 3);
      setZoomLevel(newZoom);
    } else if (zoomLevel > 1) {
      const newX = position.x - e.deltaX;
      const newY = position.y - e.deltaY;
      setPosition({
        x: newX,
        y: newY,
      });
    }
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPos({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.touches[0].clientX - startPos.x,
      y: e.touches[0].clientY - startPos.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
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
            <span className="relative inline-block">MY PROJECTS</span>
          </h2>
        </div>

        <div
          className={`space-y-8 sm:space-y-12 max-w-7xl mx-auto transition-opacity duration-300 ${
            isPageChanging ? "opacity-0" : "opacity-100"
          }`}
        >
          {currentProjects.map((project, projectIndex) => (
            <div
              key={project.id}
              className={`flex flex-col xl:flex-row gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8 bg-dark-800/50 rounded-xl border border-dark-700/50 backdrop-blur-sm hover-glow transition-all duration-700 ease-out ${
                sectionInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${projectIndex * 200}ms` }}
            >
              <div className="xl:w-1/2">
                <div className="relative overflow-hidden rounded-lg aspect-video bg-dark-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={
                        project.images[activeImageIndex[project.id]] ||
                        project.images[0]
                      }
                      alt={project.title}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() =>
                        openModal(
                          project.images[activeImageIndex[project.id]] ||
                            project.images[0],
                          project.id,
                          activeImageIndex[project.id]
                        )
                      }
                    />
                  </div>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {project.images.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeImageIndex[project.id] === dotIndex
                            ? "bg-primary-500 w-6"
                            : "bg-dark-500/50 hover:bg-dark-400"
                        }`}
                        onClick={() =>
                          setActiveImageIndex({
                            ...activeImageIndex,
                            [project.id]: dotIndex,
                          })
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="xl:w-1/2 flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 font-futuristic tracking-wider">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-4">
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      className="w-full sm:w-auto px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 font-futuristic tracking-wider flex items-center justify-center text-sm sm:text-base no-underline hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE PREVIEW
                    </a>
                  )}
                  {project.liveLink === "#" && (
                    <a
                      href="#"
                      className="w-full sm:w-auto px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 font-futuristic tracking-wider flex items-center justify-center text-sm sm:text-base no-underline hover:text-white"
                      onClick={(e) => e.preventDefault()}
                    >
                      LIVE PREVIEW
                    </a>
                  )}
                  {!project.liveLink && (
                    <button
                      className="w-full sm:w-auto px-6 py-2 bg-gray-500 text-white rounded font-futuristic tracking-wider cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
                      disabled
                    >
                      NO LIVE PREVIEW
                    </button>
                  )}
                  {project.githubLink && project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      className="w-full sm:w-auto px-6 py-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded transition-all duration-300 font-futuristic tracking-wider flex items-center justify-center text-sm sm:text-base no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB REPO
                    </a>
                  )}
                  {project.githubLink === "#" && (
                    <button
                      className="w-full sm:w-auto px-6 py-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 rounded transition-all duration-300 font-futuristic tracking-wider flex items-center justify-center text-sm sm:text-base"
                      disabled
                    >
                      GITHUB REPO
                    </button>
                  )}
                  {!project.githubLink && (
                    <button
                      className="w-full sm:w-auto px-6 py-2 border-2 border-gray-500 text-gray-500 rounded font-futuristic tracking-wider cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
                      disabled
                    >
                      PRIVATE REPO
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-12 sm:mt-16">
            <div className="flex gap-3 items-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-futuristic tracking-wider transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-dark-800/30 text-gray-600 cursor-not-allowed"
                    : "bg-dark-800/50 text-gray-300 hover:bg-primary-500 hover:text-white border border-dark-700/50"
                }`}
              >
                ← PREV
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-5 py-2 rounded-lg font-futuristic tracking-wider transition-all duration-300 ${
                      currentPage === page
                        ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-110"
                        : "bg-dark-800/50 text-gray-300 hover:bg-dark-700 hover:text-white border border-dark-700/50 hover:border-primary-500/50"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-futuristic tracking-wider transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-dark-800/30 text-gray-600 cursor-not-allowed"
                    : "bg-dark-800/50 text-gray-300 hover:bg-primary-500 hover:text-white border border-dark-700/50"
                }`}
              >
                NEXT →
              </button>
            </div>
          </div>
        )}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          ref={modalRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl z-10 hover:text-primary-500 transition-colors"
            onClick={closeModal}
          >
            &times;
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl z-10 hover:bg-black/80 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            &lt;
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl z-10 hover:bg-black/80 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            &gt;
          </button>

          <img
            ref={imgRef}
            src={currentModalImage || "/placeholder.svg"}
            alt="Project preview"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
              cursor: zoomLevel > 1 ? "grab" : "default",
            }}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
