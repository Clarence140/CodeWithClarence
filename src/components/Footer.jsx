import { useInView } from "react-intersection-observer";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <footer
      ref={ref}
      className="bg-dark-900 pt-12 sm:pt-16 pb-6 sm:pb-8 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 mobile-flex-col mobile-text-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div
              className={`flex items-center gap-4 mb-2 transition-all duration-700 ease-out ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <img
                src="/Logos/CodeWithClarence.png"
                alt="CodeWithClarence"
                className="w-10 h-10 rounded-full hover-glow"
              />
              <span className="text-xl font-bold text-white font-futuristic tracking-wider">
                CodeWithClarence
              </span>
            </div>
            <p
              className={`text-gray-400 font-futuristic tracking-wider transition-all duration-700 ease-out ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              SOLVING REAL WORLD PROBLEMS
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {[
                {
                  icon: <FaFacebook />,
                  label: "Facebook",
                  href: "https://www.facebook.com/cl4rence14/",
                },
                {
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/clarence-sumagang-33411a368/",
                },
                {
                  icon: <FaYoutube />,
                  label: "YouTube",
                  href: "https://www.youtube.com/@rand0mgaming.youtubee",
                },
                {
                  icon: <FaTiktok />,
                  label: "TikTok",
                  href: "https://www.tiktok.com/@clarence.cycling",
                },
                {
                  icon: <FaGithub />,
                  label: "GitHub",
                  href: "https://github.com/Clarence140",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center group transition-all duration-700 ease-out hover-glow ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl mb-1 text-gray-300 group-hover:text-primary-500 transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-futuristic tracking-wider">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent my-6"></div>

        <div
          className={`text-center text-gray-400 text-sm font-futuristic tracking-wider transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <p>DESIGNED AND BUILT BY CLARENCE SUMAGANG</p>
          <p>&copy; {new Date().getFullYear()} CODEWITHCLARENCE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
