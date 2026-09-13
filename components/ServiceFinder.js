"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrow } from "./Icons";

const options = [
  {
    key: "cleanroom",
    label: "A cleanroom or sterile facility",
    href: "/services/cleanroom",
    result: "Cleanroom / Sterile Cleaning is built for exactly this — sanitisation that meets strict compliance standards.",
  },
  {
    key: "laboratory",
    label: "An active laboratory",
    href: "/services/laboratory",
    result: "Laboratory Cleaning covers this, with staff trained around lab surfaces and equipment.",
  },
  {
    key: "lab-prep",
    label: "A lab that's not open yet",
    href: "/services/lab-preparation",
    result: "Lab Preparation gets a space ready before it's put to use, so setup doesn't stall on cleaning.",
  },
  {
    key: "post-maintenance",
    label: "A space after tradework or maintenance",
    href: "/services/post-maintenance",
    result: "Post Maintenance Cleaning clears the residue maintenance leaves behind, before anyone steps back in.",
  },
  {
    key: "office",
    label: "A regular office",
    href: "/services/office",
    result: "Office Cleaning keeps a workplace neat and tidy every day, on a schedule that suits you.",
  },
];

export default function ServiceFinder() {
  const [selected, setSelected] = useState(null);
  const match = options.find((o) => o.key === selected);

  return (
    <div className="finder-card">
      <div className="finder-head">
        <span className="eyebrow">Not sure where to start?</span>
        <h2 style={{ marginBottom: 4 }}>What kind of space are we talking about?</h2>
      </div>

      <div className="finder-options">
        {options.map((o) => (
          <button
            key={o.key}
            type="button"
            className={`finder-chip ${selected === o.key ? "selected" : ""}`}
            onClick={() => setSelected(o.key)}
            aria-pressed={selected === o.key}
          >
            {o.label}
          </button>
        ))}
      </div>

      {match && (
        <div className="finder-result">
          <div className="finder-result-text">
            <strong>{options.find((o) => o.key === match.key).label.replace(/^A[n]? /, "")}</strong>
            <span>{match.result}</span>
          </div>
          <Link href={match.href} className="btn btn-primary">
            View this service <IconArrow />
          </Link>
        </div>
      )}
    </div>
  );
}
