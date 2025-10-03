import { useState, useEffect } from "react";

const TypingAnimation = ({ text, speed = 100, delay = 500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      setCurrentIndex(0);
      setDisplayedText("");
    };

    const timer = setTimeout(startTyping, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      setIsTyping(false);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, text, speed]);

  return (
    <span className="relative inline-block">
      {displayedText}
      <span className="animate-pulse text-primary-500">|</span>
    </span>
  );
};

export default TypingAnimation;


