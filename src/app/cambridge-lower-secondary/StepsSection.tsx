"use client";
import { useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./StepsSection.module.css"; // custom css

interface Step {
  id: number;
  title: string;
  description: string;
}

const stepsData: Step[] = [
  {
    id: 1,
    title: "From Knowing to Understanding",
    description:
      "We move beyond memorisation to mastery. Students learn to deconstruct complex problems, ask insightful questions, and connect ideas across subjects, building the deep comprehension the IGCSEs demand.",
  },
  {
    id: 2,
    title: "From Instruction to Independence",
    description:
      "This is the age of intellectual independence. We cultivate self-motivation, resilience, and the confidence to tackle unfamiliar challenges, turning students into proactive owners of their own learning journey.",
  },
  {
    id: 3,
    title: "From Theory to Application",
    description:
      "Knowledge is inert until it's applied. We forge essential real-world skills—critical analysis, persuasive communication, and collaborative problem-solving—that transform academic achievers into future leaders.",
  },
];

export default function StepsSection() {
  const [activeId, setActiveId] = useState<number>(2);

  return (
    <div className="container vcx">
      <div className="d-flex flex-column gap-3">
        {stepsData.map((step) => (
          <Card
            key={step.id}
            className={`p-3 shadow-sm position-relative ${styles.customCard} ${
              activeId === step.id ? styles.active : styles.inactive
            }`}
            onClick={() => setActiveId(step.id)}
          >
            <Card.Body className="myCardBody">
              <Card.Title
                className={`fw-bold mb-2 $`}
              >
                {step.title}
              </Card.Title>
              <Card.Text className="text-muted">{step.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
