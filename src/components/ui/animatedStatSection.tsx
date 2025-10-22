"use client";

import { useState, useEffect, useRef } from "react";

// Data for the statistics
const stats = [
  { image: "/images/happy-brides.png", value: "500+", label: "Happy Brides" },
  { image: "/images/customer-rating.png", value: "4.9", label: "Customer Rating" },
  { image: "/images/experience.png", value: "15+", label: "Years Experience" },
  { image: "/images/collections.jpg", value: "2K+", label: "Collections" },
  { image: "/images/100+designs.png", value: "100+", label: "Designs" },
];

/**
 * A component that displays key statistics with a fade-in-up animation
 * that triggers when the component is scrolled into view.
 */
export function AnimatedStatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-[#F9F1EA] py-8 transition-all duration-1000 ease-in-out mt-8
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* --- FIX: Simplified to only show the image --- */}
              <img
                src={stat.image}
                alt={stat.label}
                className="w-20 h-25 mb-1 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer border rounded-md shadow-lg"
              />
              <p className="text-4xl font-bold text-[#C73130]">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
