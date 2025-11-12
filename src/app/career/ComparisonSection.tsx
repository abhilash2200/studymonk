"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ComparisonSection: React.FC = () => {
     

    const columns = [
        {
            title: "Dimension",
            content: [
                "Work Environment.",
                "Primary Goal.",
                "Professional Growth.",
                "Key Metric of Success.",
            ],
        },
        {
            title: "The Study Monks Way",
            content: [
                "Calm, focused, collaborative. A culture of “Digital Serenity.”",
                "Cultivation of student well-being, mastery, and confidence.",
                "Deepening pedagogical and subject matter expertise. Becoming a ‘Wise Guardian.’",
                "Measurable growth in student confidence and critical thinking skills.",
            ],
        },
        {
            title: "The Mass-Market EdTech Way",
            content: [
                "High-pressure, noisy, sales-driven. Characterized by ‘brand fatigue.’",
                "Acquiring users at scale; maximizing volume and transactions.",
                "Learning to use the platform’s sales script and internal processes.",
                "Number of demos booked, classes sold, or active user minutes.",
            ],
        },
        {
            title: "The Tutor Marketplace Way",
            content: [
                "Isolated, inconsistent, unsupported.",
                "Fulfilling hourly contracts; managing individual client relationships.",
                "No structured development; growth is entirely self-directed.",
                "Hours billed and client ratings.",
            ],
        },
    ];

    return (

        <Container className="my-5">
            <div className="din-box">
               <Row>
                    {columns.map((col, index) => (
                        <Col key={index} md={3} className="dimensio">
                            <Card
                                className={`h-100 ${
                                    col.title === "The Study Monks Way"
                                        ? "active-box"
                                        : "inactive-box"
                                }`}
                            >
                                <h6 className="fw-bold dimen">{col.title}</h6>
                                {col.content.map((c, i) => (
                                    <p key={i} className="mb-5">{c}</p>
                                ))}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>

    );
};

export default ComparisonSection;