"use client";

import { useState, useEffect, useRef } from "react";

interface AnimatedHeadingProps {
  children: string;
  className?: string;
}

/**
 * A heading component where each letter drops into place when scrolled into view.
 * Each letter jiggles individually on hover.
 * NOTE: Requires custom 'jiggle' animation in tailwind.config.js.
 */
export function AnimatedHeading({ children, className }: AnimatedHeadingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const text = children;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on whether the component is intersecting.
        // This allows the animation to replay every time.
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // relative to the viewport
        rootMargin: "0px",
        threshold: 0.1, // trigger when 10% is visible
      }
    );

    const currentRef = headingRef.current;
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
    <h2
      ref={headingRef}
      // The 'group' class allows child elements to react to the hover state of this parent.
      className={`group flex justify-center font-bold font-headline tracking-tight text-primary mb-6 text-4xl ${className}`}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        // This outer span handles the drop-in animation
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out 
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {/* This inner span handles the jiggle animation on hover, resolving the conflict */}
          <span className="inline-block group-hover:animate-jiggle">
            {/* Use a non-breaking space for spaces to maintain layout */}
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </h2>
  );
}
