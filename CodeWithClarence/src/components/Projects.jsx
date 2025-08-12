"use client";

import { useState, useEffect, useRef } from "react";

const projectsData = [
  {
    id: 1,
    title: "MetroJobs Website Rework (OJT)",
    description:
      "MetroJobs is a recruitment and HR solutions website designed to connect job seekers with top companies across various industries. The site features job listings, company information, and branch details, all presented in a clean and user-friendly layout. It was built using HTML for structure, CSS for styling, and JavaScript for interactivity. Canva was used to design animated GIFs, while Photoshop enhanced images for a more polished visual presentation.",
    techStack: ["HTML", "CSS", "JavaScript", "Canva", "Photoshop"],
    liveLink: "https://metro-jobs.vercel.app/",
    githubLink: "https://github.com/Clarence140/MetroJobsss",
    category: "major",
    images: [
      "/src/assets/metrojobs/MetroJobsHome.png",
      "/src/assets/metrojobs/MetroJobsAboutUS.png",
      "/src/assets/metrojobs/MetroJobsJobOpening.png",
      "/src/assets/metrojobs/MetroJobsFacilities.png",
      "/src/assets/metrojobs/MetroJobsContacts.png",
    ],
  },
  {
    id: 2,
    title: "PAMCares – Online Pet Healthcare System (Capstone Project)",
    description:
      "PAMCares is a proposed web-based online pet healthcare management system developed for the Philippine Animal Medical Center (PAMC) in Quezon City. It is designed to enhance accessibility, efficiency, and connectivity between pet owners and veterinary professionals. The system features online appointment booking, seamless access to pet medical records, and teleconsultation services. Built using HTML, CSS, and Vanilla JavaScript, with Firebase for backend services such as database management and authentication. Visual Studio Code was used for development, while Figma and Canva supported the UI design and visual assets.",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Canva", "Figma"],
    liveLink: "#",
    githubLink: "https://github.com/Clarence140/PAMCares-FINAL",
    category: "major",
    images: [
      "/src/assets/PAMCares/PamCaresLogin.PNG",
      "/src/assets/PAMCares/PamCaresAdmin.PNG",
      "/src/assets/PAMCares/PamCaresAdminAccMan.PNG",
      "/src/assets/PAMCares/PamCaresUserDashBoard.PNG",
      "/src/assets/PAMCares/PamCaresUserBooking.PNG",
    ],
  },
  {
    id: 3,
    title: "Clarence Cycling Adventures Website (Under Development)",
    description:
      "Clarence Cycling Adventures is a personal cycling website created to document the journeys of LUNA, a custom-built road bike. It includes sections such as Meet LUNA, Adventures, Gallery, Bike Specs, and Contact. Built with React and Vite, the site offers a clean and responsive user interface. JavaScript handles all interactive features, while Photoshop was used to enhance the visuals. This project combines both web development and cycling passion into one meaningful digital space.",
    techStack: ["React", "Vite", "Javascript", "Photoshop"],
    liveLink: "https://clarence-cyling-web.vercel.app/",
    githubLink: "https://github.com/Clarence140/ClarenceCylingWeb",
    category: "major",
    images: [
      "/src/assets/ClarenceCycling/ClarenceCyclingHero.PNG",
      "/src/assets/ClarenceCycling/ClarenceCyclingLUNA.PNG",
      "/src/assets/ClarenceCycling/ClarenceCyclingAdventures.PNG",
      "/src/assets/ClarenceCycling/ClarenceCyclingOwner.PNG",
      "/src/assets/ClarenceCycling/ClarenceCyclingSpec.PNG",
    ],
  },
  {
    id: 4,
    title: "Portfolio Website Template",
    description:
      "A responsive portfolio website template built with modern web technologies. Features smooth animations, mobile-first design, and clean typography. Perfect for showcasing personal projects and professional experience. Includes contact forms, project galleries, and social media integration.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveLink: "#",
    githubLink: "#",
    category: "small",
    images: ["/images/portfolio/template.png"],
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
  const [activeFilter, setActiveFilter] = useState("major");
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(3);
  const imgRef = useRef(null);
  const modalRef = useRef(null);

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

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeFilter
  );
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
      id="projects"
      className="projects-section opacity-0 -translate-x-10 transition-all duration-700 ease-in-out py-20 bg-dark-900 mobile-p-4"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white font-futuristic tracking-wider animate-slide-down">
          <span className="relative inline-block">MY PROJECTS</span>
        </h2>

        <div className="flex justify-center mb-8">
          <div className="flex bg-dark-800/50 rounded-lg border border-dark-700/50 p-1">
            <button
              onClick={() => handleFilterChange("major")}
              className={`px-6 py-2 rounded-md font-futuristic tracking-wider transition-all duration-300 ${
                activeFilter === "major"
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:text-white hover:bg-dark-700/50"
              }`}
            >
              MAJOR PROJECTS
            </button>
            <button
              onClick={() => handleFilterChange("small")}
              className={`px-6 py-2 rounded-md font-futuristic tracking-wider transition-all duration-300 ${
                activeFilter === "small"
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:text-white hover:bg-dark-700/50"
              }`}
            >
              SMALL PROJECTS
            </button>
          </div>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {currentProjects.map((project, projectIndex) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 p-6 bg-dark-800/50 rounded-lg border border-dark-700/50 backdrop-blur-sm animate-slide-up`}
              style={{ animationDelay: `${projectIndex * 100}ms` }}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded aspect-video bg-dark-900">
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

              <div className="lg:w-1/2 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 font-futuristic tracking-wider">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-center sm:items-start">
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      className="w-full sm:w-auto px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 font-futuristic tracking-wider flex items-center justify-center text-sm sm:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE PREVIEW
                    </a>
                  )}
                  {project.liveLink === "#" && (
                    <a
                      href="#"
                      className="w-full sm:w-auto px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 font-futuristic tracking-wider flex items-center justify-center text-sm sm:text-base"
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
                      className="w-full sm:w-auto px-6 py-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 rounded transition-all duration-300 font-futuristic tracking-wider flex items-center justify-center text-sm sm:text-base"
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
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded font-futuristic tracking-wider transition-all duration-300 ${
                      currentPage === page
                        ? "bg-primary-500 text-white"
                        : "bg-dark-800/50 text-gray-300 hover:bg-dark-700/50 hover:text-white border border-dark-700/50"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
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
