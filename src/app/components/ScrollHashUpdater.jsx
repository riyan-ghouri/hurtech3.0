"use client"
import { useEffect } from "react";

export default function ScrollHashUpdater() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]"); // all sections with ID

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update the URL hash without scrolling
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // 50% of section must be visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return null; // no UI needed
}
