"use client";

import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

const AnimatedText = ({ text }) => {
  return (
    <span className="text-xl font-bold font-futuristic text-white hover:text-primary-500 transition-colors duration-300 cursor-pointer">
      {text}
    </span>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [navHidden, setNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveSection("home");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(scrollTimeout.current);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      setLastScrollY(window.scrollY);

      scrollTimeout.current = setTimeout(() => {
        setScrolling(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveSection("home");
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="app">
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-dark-900/90 backdrop-blur-md border-b border-dark-700 transition-transform duration-300 ${
          navHidden && !scrolling ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={scrollToTop}
          >
            <img
              src="/Logos/CodeWithClarence.png"
              alt="Logo"
              className="w-10 h-10 rounded-full hover-glow"
            />
            <AnimatedText text="CodeWithClarence" />
          </div>

          <div
            className={`hamburger md:hidden flex flex-col cursor-pointer gap-1 transition-all duration-300 ${
              mobileMenuOpen ? "active" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            <div className="w-6 h-0.5 bg-white rounded transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white rounded transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white rounded transition-all duration-300"></div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                className={`capitalize font-futuristic hover-glow transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-primary-500"
                    : "text-white hover:text-primary-500"
                }`}
                onClick={(e) =>
                  item.id === "home"
                    ? scrollToTop(e)
                    : scrollToSection(item.id, e)
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            className={`md:hidden absolute top-16 right-4 w-40 bg-dark-800 rounded-lg shadow-lg border border-dark-700 transition-all duration-300 ${
              mobileMenuOpen
                ? "block opacity-100 translate-y-0"
                : "hidden opacity-0 -translate-y-2"
            }`}
          >
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                className={`w-full text-left px-5 py-3 capitalize font-futuristic first:rounded-t-lg last:rounded-b-lg transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-primary-500"
                    : "text-white hover:text-primary-500"
                }`}
                onClick={(e) =>
                  item.id === "home"
                    ? scrollToTop(e)
                    : scrollToSection(item.id, e)
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main
        className={`transition-all duration-300 ${
          mobileMenuOpen ? "blur-sm" : ""
        }`}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
