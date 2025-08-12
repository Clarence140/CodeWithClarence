"use client";

import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const contactSection = document.querySelector(".contact-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "translate-x-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message") {
      if (value.length <= 500) {
        setCharCount(value.length);
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setCharCount(0);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="contact-section opacity-0 translate-x-10 transition-all duration-700 ease-in-out py-20 bg-dark-900 mobile-p-4"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white font-futuristic tracking-wider animate-slide-down">
          <span className="relative inline-block">LET'S TALK</span>
        </h2>

        <div className="flex flex-col lg:flex-row-reverse gap-12 max-w-6xl mx-auto mobile-flex-col">
          <form
            onSubmit={handleSubmit}
            className="flex-1 p-8 bg-dark-800/50 rounded-lg border border-dark-700/50 backdrop-blur-sm animate-slide-left"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2 font-futuristic tracking-wider"
              >
                FULL NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={50}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/50 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-400 transition-all"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 font-futuristic tracking-wider"
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={100}
                placeholder="example@example.com"
                className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/50 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-400 transition-all"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2 font-futuristic tracking-wider"
              >
                YOUR MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                maxLength={500}
                placeholder="Type your message here (max 500 characters)..."
                className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/50 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-400 transition-all resize-none"
              />
              <div className="text-right text-sm text-gray-400 mt-1">
                {charCount}/500 characters
              </div>
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 font-futuristic tracking-wider flex items-center justify-center"
            >
              SEND MESSAGE
            </button>

            {isSubmitted && (
              <div className="mt-4 p-3 bg-green-600/20 border border-green-500/50 rounded text-green-300 text-center animate-fade">
                Thank you! Your message has been sent.
              </div>
            )}
          </form>

          <div className="flex-1 flex items-center justify-center p-8 animate-slide-right">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white uppercase tracking-wider leading-tight font-futuristic">
              THANKS FOR YOUR VISIT!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
