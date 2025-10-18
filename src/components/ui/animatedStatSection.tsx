'use client';

import { useState, useEffect, useRef } from 'react';
import { Users, Star, Award, Shirt, MapPin } from 'lucide-react';

// Data for the statistics
const stats = [
  { icon: Users, value: '500+', label: 'Happy Brides' },
  { icon: Star, value: '4.9', label: 'Customer Rating' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Shirt, value: '2k+', label: 'Collections' },
  { icon: MapPin, value: '100+', label: 'Designs' },
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
        // Sets visibility based on whether the component is intersecting the viewport.
        // This allows the animation to play every time it enters or leaves the screen.
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the component is visible
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
      className={`bg-[#F9F1EA] py-18 transition-all duration-1000 ease-in-out mt-20
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <stat.icon className="w-10 h-10 text-[#C73130] mb-3" />
              <p className="text-4xl font-bold text-[#C73130]">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

