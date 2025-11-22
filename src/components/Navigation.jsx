"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const AnimatedText = ({ text }) => {
  return (
    <span className="text-xl font-bold font-futuristic text-white hover:text-primary-500 transition-colors duration-300 cursor-pointer">
      {text}
    </span>
  );
};

const Navigation = () => {
  const location = useLocation();
  const [navHidden, setNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(scrollTimeout.current);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-dark-900/90 backdrop-blur-md border-b border-dark-700 transition-transform duration-300 ${
        navHidden && !scrolling ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={scrollToTop}
        >
          <img
            src="/Logos/CodeWithClarence.png"
            alt="Logo"
            className="w-10 h-10 rounded-full hover-glow"
          />
          <AnimatedText text="CodeWithClarence" />
        </Link>

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
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`capitalize font-futuristic transition-colors duration-300 no-underline ${
                isActive(item.path)
                  ? "text-primary-500"
                  : "text-white hover:text-primary-500"
              }`}
              onClick={() => {
                if (item.path === "/") {
                  scrollToTop();
                } else {
                  setMobileMenuOpen(false);
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div
          className={`md:hidden absolute top-16 right-4 w-40 bg-dark-800 rounded-lg shadow-lg border border-dark-700 transition-all duration-300 ${
            mobileMenuOpen
              ? "block opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-2"
          }`}
        >
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block w-full text-left px-5 py-3 capitalize font-futuristic first:rounded-t-lg last:rounded-b-lg transition-colors duration-300 no-underline ${
                isActive(item.path)
                  ? "text-primary-500"
                  : "text-white hover:text-primary-500"
              }`}
              onClick={() => {
                if (item.path === "/") {
                  scrollToTop();
                } else {
                  setMobileMenuOpen(false);
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

