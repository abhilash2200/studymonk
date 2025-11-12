"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useState } from "react";

type Card = {
    id: number;
    img: string;
    title: string;
    short: string;
    full: string[];
};

const cards: Card[] = [
    {
        id: 1,
        img: "/assets/img/nidhi1.png",
        title: "Ms. Nidhi",
        short: "Mentor- Math and Science",
        full: [
            "I encourage critical thinking, creativity, and higher-order skills.",
          
        ],
    },
    {
        id: 2,
        img: "/assets/img/sujata1.png",
        title: "Ms. Sujatha",
        short: "Mentor- Science",
        full: [
            "I believe that education is a transformative journey.",
           
        ],
    },
    {
        id: 3,
        img: "/assets/img/nivedita1.png",
        title: "Ms. Nivedita",
        short: "Mentor- English",
        full: [
            "I believe learning should be fun, joyful, and creative. ",
           
        ],
    },
];

export default function HoverSlider() {
    const [activeId, setActiveId] = useState(cards[0].id); // default first active

    return (
        <section className="fac-sec mb">
            <div className="container">
                <div className="facs">
                    <div className="text-center">
                        <h2 className="mb-4">The Faces of Our Mission</h2>
                        <p>
                            Our culture is defined by our people. Meet some of the Wise Guardians who are bringing our philosophy to life every day.
                        </p>
                    </div>
                    <Splide
                        options={{
                            perPage: 3,
                            gap: "1rem",
                            arrows:false,
                            breakpoints: {
                                768: { perPage: 1 },
                                992: { perPage: 2 },
                            },
                        }}
                    >
                        {cards.map((card) => (
                            <SplideSlide key={card.id}>
                                <div
                                    className={`custom-card ${activeId === card.id ? "active" : ""}`}
                                    onMouseEnter={() => setActiveId(card.id)}
                                >
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        width={200}
                                        height={200}
                                        className="met-img mb-3"
                                    />
                                    <h5>{card.title}</h5>
                                    <p>{card.short}</p>

                                    <div className="card-overlay">
                                        {activeId === card.id && (
                                            <div className="overlay-content">
                                                <div className="text-center">
                                                <h5 className="fw-bold mb-2">{card.title}</h5>
                                                <p className="text-muted ">{card.short}</p>
                                                <hr />
                                                </div>
                                                {card.full.map((para, i) => (
                                                    <p key={i} className="full-text text-center">
                                                        {para}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    );
}
