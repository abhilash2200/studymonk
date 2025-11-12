"use client";
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import styles from "../cambridge-lower-secondary/SocraticCircle.module.css";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Every Voice is  <br/> Heard",
    description:
      "Students learn to articulate their views, defend reasoning, and build ideas together.",
    icon: "/assets/img/voice-search 1.png",
  },
  {
    id: 2,
    title: "Debate Sparks  <br/> Discovery",
    description:
      "Critical thinking develops through structured debates and discussions.",
    icon: "/assets/img/Debate2.png",
  },
  {
    id: 3,
    title: "Peer-to-Peer  <br/> Learning",
    description:
      "Students collaborate, share perspectives, and learn collectively.",
    icon: "/assets/img/PeerLearning.png",
  },
  {
    id: 4,
    title: "Personalised  <br/> Mentorship",
    description:
      "One-on-one mentorship ensures growth and confidence building.",
    icon: "/assets/img/Personalized.png",
  },
];

export default function SocraticCircle() {
  const [defaultActiveId] = useState<number>(1); // always fallback active
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="">
      <Container>
        <div className={styles.yell}>
          <h2 className="text-center fw-bold mb-2">
            The Socratic Circle:
            <br />
            <span>The Proven Environment for Intellectual Growth.</span>
          </h2>
          <p className="text-center text-muted mb-5">
            Traditional tuition models are broken. One-on-one can be isolating,
            while large classes leave students anonymous. We have engineered the
            single most effective environment for intellectual growth: The
            Socratic Circle. In a curated cohort of just 8 ambitious peers, your
            child experiences the perfect balance of personalised mentorship and
            dynamic group collaboration.
          </p>

          <Row className="justify-content-center">
            {features.map((feature) => {
              const isActive =
                hoveredId === feature.id ||
                (hoveredId === null && feature.id === defaultActiveId);

              return (
                <Col key={feature.id} md={3} sm={6} className="mb-4">
                  <div
                    className={`${styles.featureCard} text-center h-100 ${
                      isActive ? styles.active : ""
                    }`}
                    onMouseEnter={() => setHoveredId(feature.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Card.Body>
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={60}
                        height={60}
                         className={`mb-3 ${styles.featureIcon}`}
                      />
                      <h5
                        className="heard mb-3"
                        dangerouslySetInnerHTML={{ __html: feature.title }}
                      ></h5>
                      {isActive && (
                        <p className={`${styles.featureDesc} text-muted small`}>
                          {feature.description}
                        </p>
                      )}
                    </Card.Body>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
}
