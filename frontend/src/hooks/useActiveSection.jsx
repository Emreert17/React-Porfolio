import { useEffect } from "react";
import { useState } from "react";

export default function useActiveSection(
  sectionIds,
  options = { threshold: 0.2, rootMargin: "-10% 0px -40% 0px" }
) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (typeof window == "undefined" || !("IntersectionObserver" in window))
      return;

    const callback = (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visibleSections.length > 0) {
        const mostVisible = visibleSections.reduce((prev, curr) =>
          prev.intersectionRatio > curr.intersectionRatio ? prev : curr
        );
        setActiveSection(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeSection;
}
