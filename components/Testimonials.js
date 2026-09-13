"use client";

import { useState } from "react";
import { IconArrow } from "./Icons";

const testimonials = [
  {
    quote: "Our company administration was impressed with the level of professionalism and quality that their team delivered. Thank you for your exceptional service, CINI'S.",
    who: "Eric Chen",
    loc: "Kew",
  },
  {
    quote: "CINI'S deliver what they promise: quality and efficiency. We'll definitely book them in again.",
    who: "Rizwan Ahmed",
    loc: "Collingwood",
  },
  {
    quote: "CINI'S never compromise on the quality of their services, and that's why I choose them.",
    who: "Laura Waller",
    loc: "Parkville",
  },
  {
    quote: "I've chosen CINI'S for my cleaning for several years. They have the best staff — responsive, and they always work around my needs.",
    who: "George Mataxas",
    loc: "Brunswick East",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const go = (i) => setIndex((i + testimonials.length) % testimonials.length);
  const current = testimonials[index];

  return (
    <div className="testimonial-wrap">
      <p className="testimonial-quote">&ldquo;{current.quote}&rdquo;</p>
      <div className="testimonial-who">{current.who}</div>
      <div className="testimonial-loc">{current.loc}</div>

      <div className="testimonial-controls">
        <button className="arrow-btn" aria-label="Previous testimonial" onClick={() => go(index - 1)}>
          <IconArrow style={{ transform: "rotate(180deg)" }} />
        </button>
        <div className="dot-row">
          {testimonials.map((t, i) => (
            <button
              key={t.who}
              className={`dot ${i === index ? "active" : ""}`}
              aria-label={`Show testimonial from ${t.who}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button className="arrow-btn" aria-label="Next testimonial" onClick={() => go(index + 1)}>
          <IconArrow />
        </button>
      </div>
    </div>
  );
}
