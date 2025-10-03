"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
      ref={sectionRef}
      id="contact"
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
            <span className="relative inline-block">LET'S TALK</span>
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row-reverse gap-8 sm:gap-12 max-w-7xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`flex-1 p-6 sm:p-8 lg:p-10 bg-dark-800/50 rounded-xl border border-dark-700/50 backdrop-blur-sm transition-all duration-700 ease-out ${
              formInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
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

          <div
            ref={textRef}
            className={`flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-10 transition-all duration-700 ease-out ${
              textInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white uppercase tracking-wider leading-tight font-futuristic">
              THANKS FOR YOUR VISIT!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
