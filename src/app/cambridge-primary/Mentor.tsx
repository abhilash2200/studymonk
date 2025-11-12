"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Modal, Button } from "react-bootstrap";

type Mentor = {
    id: number;
    name: string;
    photo: string;
    video: string;
    qualification: string;
    experience?: string; // optional rakha kyunki har object me nai diya
    philosophy?: string; // optional rakha
    stage: string;
    heading: string;
    intro: string;
    title: string;
    desc: string;
    teach: string;
    credentials: string[]; // <-- yaha fix
};

const mentors: Mentor[] = [
    {
        id: 1,
        name: "Ms. Nidhi Malik",
        qualification: "B.Ed. Science",
        intro: "“I believe in making learning engaging and meaningful. By blending diverse teaching methods with technology, I encourage critical thinking, creativity, and higher-order skills—helping students succeed not just academically, but in life beyond the classroom.”",
        photo: "assets/img/nidhi.png",
        video: "/assets/video/nidhi.mp4",
        heading: "Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "“Ms. Nidhi is very systematic and structured in her teaching. Under her guidance, Vaani has grown remarkably confident. She has helped Vaani develop a genuine interest in Mathematics —Vaani now enjoys the subject and puts in effort to understand and apply concepts with ease.”",
        stage: "– Ms. Rajini Chaudhary, Parent of Vaani Chaudhary, Stage 5",
        teach: "Credentials & Experience",
        credentials: [
            "A certified Cambridge Math and Science facilitator, Ms. Nidhi has over 5 years of experience teaching international curricula and more than a decade of experience with Indian schools. She is dedicated to creating engaging and supportive learning environments where children thrive.",

        ],
    },
    {
        id: 2,
        name: "Ms. Shruthi Bharath",
        qualification: "B.E. Electronics and Communication",
        intro: "“My philosophy is that education is a transformative journey—one that empowers students to unlock their potential, grow in confidence, and develop the skills they need for lifelong success.”",
        photo: "assets/img/shruthi.png",
        video: "/assets/video/shruthi.mp4",
        heading: "Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "“Karthikeya’s mentor is an amazing teacher who brings passion and dedication to her students’ success. My child is not only excelling academically but also growing into a more confident and responsible person. His love for Science has flourished under Sujatha Ma’am’s guidance.",
        stage: "– Ms. Poonam Garg, Parent of Pranav Garg, Stage 6",
        teach: "Credentials & Experience",
        credentials: [
            "With 17 years of experience in both teaching and leadership roles, Ms. Sujatha brings a strong academic foundation and a wealth of expertise to her classroom. She holds a Bachelor’s degree in Education with a focus on Mathematics and Science and has also served as the Head of Department for Science.",

        ],
    },
    {
        id: 3,
        name: "Ms. Thejaswini S",
        qualification: "B.Sc. Mathematics, B.Ed. Mathematics",
        intro: "“My goal is to make Mathematics a subject that is understood and enjoyed, not feared. I focus on building strong foundations, nurturing problem-solving skills, and fostering confidence in every student.”",
        photo: "assets/img/thejaswini.png",
        video: "/assets/video/thejaswini.mp4",
        heading: "Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "“Thank you for creating such a positive and supportive environment where my child feels confident to ask questions without hesitation. This has greatly boosted their curiosity and willingness to learn, making the classroom a place they truly enjoy.”",
        stage: "-	Ms. Manasa Kalva, Parent of Ved Kalva, Stage 8",
        teach: "Credentials & Experience",
        credentials: [
            "With 7 years of teaching experience, Ms. Thejaswini brings both expertise and passion to her classroom. She holds a Bachelor of Science in Mathematics, Statistics, and Computer Science, along with a Bachelor of Education specializing in Mathematics.",

        ],
    },
];

export default function MentorsSection() {
    const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
    const [show, setShow] = useState(false);

    const handleShow = (mentor: Mentor) => {
        setSelectedMentor(mentor);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <section id="partner" className="mb-5">
            <div className="container">
                <h2 className="text-center mb-4">
                    Meet the Wise Guardians: Facilitators of High-Level Thinking
                </h2>

                {/* Mentor Cards */}
                <div className="row">
                    {mentors.map((mentor) => (
                        <div key={mentor.id} className="col-lg-4 col-md-4 col-12 mb-4">
                            <div className="image-box position-relative border shadow-sm overflow-hidden">
                                <Image
                                    src={mentor.photo}
                                    alt={mentor.name}
                                    width={400}
                                    height={300}
                                    className="img-fluid w-100"
                                />
                                {/* Overlay with Name + Arrow (Always Visible) */}
                                <div className="d-flex justify-content-between align-items-center p-3 text-white position-absolute bottom-0 w-100">
                                    <p className="mb-0 fw-bold text-white">{mentor.name}</p>
                                    <button
                                        className="btn p-0 border-0 bg-transparent"
                                        onClick={() => handleShow(mentor)}
                                    >
                                        <Image
                                            src="/assets/img/part-arrow.png"
                                            alt="arrow icon"
                                            width={40}
                                            height={40}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section Footer */}
                <div className="text-center p-h">
                    <p>Wise Guardians are expert facilitators, rigorously trained in our Socratic, micro-class methodology. Their mission is to guide conversation, ensuring every child participates, is challenged, and learns from the group&apos;s collective intelligence.</p>
                    <Link href="/mentors"><button className="mentr">Learn About Our Mentors</button></Link>
                </div>
            </div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} size="xl" centered className="myg">
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedMentor && (
                        <div className="row g-3">
                            <div className="col-md-4">
                                <div className="bgs-grey p-3 rounded h-100">
                                    <Image
                                        src={selectedMentor.photo}
                                        alt={selectedMentor.name}
                                        width={300}
                                        height={200}
                                        className="img-fluid rounded mb-3"
                                    />
                                    <h4 className="h-msnt">{selectedMentor.teach}</h4>
                                    {selectedMentor.credentials.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h5 className="mn-name fw-bold">{selectedMentor?.name}</h5>
                                <h6>{selectedMentor.qualification}</h6>

                                <video controls width="100%" className="mb-2">
                                    <h6>Video Introduction</h6>
                                    <source src={selectedMentor.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <h4 className="h-msnt">{selectedMentor.heading}</h4>
                                <p>{selectedMentor.intro}</p>
                                <h4 className="h-msnt">{selectedMentor.title}</h4>
                                <p className="mb-1">{selectedMentor.desc}</p>
                                <p className="fw-bold small-text">{selectedMentor.stage}</p>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </section>
    );
}
