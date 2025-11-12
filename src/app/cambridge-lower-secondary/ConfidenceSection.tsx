"use client";

import styles from "../cambridge-lower-secondary/ConfidenceSection.module.css";
import { useState } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Discovery <br/> Session",
    description:
      "A senior Wise Guardian conducts a one-on-one session to map your child’s unique cognitive style.",
  },
  {
    id: 2,
    title: "7 Days <br/> Free Trial",
    description:
      "Experience the full power of our Socratic micro-classes for a week, completely free after your diagnostic session.",
  },
  {
    id: 3,
    title: "Methodology <br/> Demonstration",
    description:
      "Experience firsthand how our Socratic micro-class methodology fosters intellectual agility.",
  },
  {
    id: 4,
    title: "Potential <br/> Blueprint",
    description:
      "Receive a personalized plan outlining key areas for intellectual growth and development.",
  },
];

export default function ConfidenceSection() {
  const [defaultActiveId] = useState<number>(2); // Default active card
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div>
      <h2 className="fw-bold mb-3">
        Invest in Their Confidence. The First Step is on Us.
      </h2>
      <p className="text-muted mb-5">
        Give your child the environment they need to unlock their full
        intellectual potential. Book a complimentary Academic Blueprint Session
        and start your 7-Day Free Trial today.
      </p>

      <div className="row">
        {steps.map((step) => {
          const isActive =
            hoveredId === step.id ||
            (hoveredId === null && step.id === defaultActiveId);

          return (
            <div
              key={step.id}
              className="col-lg-3 col-md-6 col-12 mb-4"
              onMouseEnter={() => setHoveredId(step.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`${styles.cardBox} ${isActive ? styles.active : ""}`}
              >
                <h5
                  className={`fw-bold ${styles.tgf}`}
                  dangerouslySetInnerHTML={{ __html: step.title }}
                ></h5>
                <p className={`mt-2 fdr ${isActive ? styles.activeDesc : styles.inactiveDesc}`}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
