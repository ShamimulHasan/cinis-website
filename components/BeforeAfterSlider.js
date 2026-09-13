"use client";

import { useState } from "react";

// A drag-to-compare slider. Built on a native <input type="range"> so it's
// keyboard- and screen-reader-friendly for free, styled invisibly on top
// of the images. The images can be genuinely different before/after
// photos once you have them — see the note in the README.
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  tintBefore = true,
}) {
  const [pos, setPos] = useState(50);

  return (
    <div>
      <div className="ba-slider" style={{ "--ba-pos": `${pos}%` }}>
        <img className="ba-after" src={afterSrc} alt={afterLabel} />
        <div className="ba-before-wrap">
          <img
            src={beforeSrc}
            alt={beforeLabel}
            style={tintBefore ? { filter: "saturate(0.35) sepia(0.25) brightness(0.75) contrast(1.05)" } : undefined}
          />
        </div>

        <span className="ba-label before">{beforeLabel}</span>
        <span className="ba-label after">{afterLabel}</span>

        <div className="ba-handle">
          <div className="grip">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M8 6 3 12l5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <input
          className="ba-range"
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare before and after cleaning"
        />
      </div>
      <p className="ba-caption">Drag the handle to compare — the standard we clean to, before and after.</p>
    </div>
  );
}
