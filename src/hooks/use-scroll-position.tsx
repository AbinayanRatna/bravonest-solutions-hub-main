import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
      setScrollPosition(currentScroll);
      setScrollProgress(maxScroll > 0 ? currentScroll / maxScroll : 0);
    };

    window.addEventListener("scroll", updateScrollPosition, { passive: true });
    updateScrollPosition(); // Initial call

    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  return { scrollPosition, scrollProgress };
};

