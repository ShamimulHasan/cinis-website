"use client";

import { useEffect, useRef, useState } from "react";

// A single, restrained scroll effect used for section headings only —
// not applied to every card or block, to avoid the generic
// "everything fades up" pattern. Respects reduced-motion automatically
// via the CSS below (animation is disabled there; this just adds the
// class that triggers it).
export default function RevealOnScroll({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${visible ? "reveal-visible" : "reveal-hidden"}`}>
      {children}
    </div>
  );
}
