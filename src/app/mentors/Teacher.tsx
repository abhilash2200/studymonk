"use client";

import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "next/image";

type Teacher = {
    id: number;
    name: string;
    qualification: string;
    intro: string;
    fintro: string;
    photo: string;
    video: string;
    heading: string;
    title: string;
    desc: string;
    stage: string;
    teach: string;
    credentials: string[];
};

const teachers: Teacher[] = [
    {
        id: 1,
        name: "Ms. Nidhi Malik",
        qualification: "B.Ed. Science",
        intro: "“I believe in making learning engaging and meaningful. By blending diverse teaching methods with technology, I encourage critical thinking, creativity, and higher-order skills—helping students succeed not just academically, but in life beyond the classroom.”",
        fintro:"Developing critical thinking, creativity, and higher-order skills to help students succeed.",
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
    // {
    //     id: 2,
    //     name: "Ms. Kamalpreet",
    //     qualification: "PhD, Mathematics",
    //     intro: "Making numbers fun and easy for students with real-world applications.",
    //     fintro:"Making math simple, clear, and genuinely enjoyable for every student.",
    //     photo: "assets/img/kamalpreet.png",
    //     video: "/assets/video/kamalpreet.mp4",
    //     heading: "Teaching Philosophy",
    //     title: "What Parents & Students Say",
    //     desc: "Dr. Sharma made complex topics so clear. For the first time, my son enjoys physics and feels confident.",
    //     stage: "— Parent of a Stage 9 Student",
    //     teach: "Credentials & Experience",
    //     credentials: [
    //         "10+ years of teaching Astrophysics",
    //         "Author of 3 research papers",
    //         "Guest lecturer at IIT Delhi",
    //         "Mentor to 500+ students worldwide",
    //     ],
    // },
    {
        id: 3,
        name: "Ms. Sujatha S",
        qualification: "B.Ed. Mathematics, B.Sc. in Electronics",
        intro: "“My philosophy is that education is a transformative journey—one that empowers students to unlock their potential, grow in confidence, and develop the skills they need for lifelong success.”",
        fintro:"Guiding students through a transformative journey in education.",
        photo: "assets/img/sujatha.png",
        video: "/assets/video/sujatha.mp4",
        heading: "Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "“Karthikeya’s mentor is an amazing teacher who brings passion and dedication to her students’ success. My child is not only excelling academically but also growing into a more confident and responsible person. His love for Science has flourished under Sujatha Ma’am’s guidance.”",
        stage: "– Ms. Madhuri D, Parent of Karthikeya D, Stage 6",
        teach: "Credentials & Experience",
        credentials: [
            "With 17 years of experience in both teaching and leadership roles, Ms. Sujatha brings a strong academic foundation and a wealth of expertise to her classroom. She holds a Bachelor’s degree in Education with a focus on Mathematics and Science and has also served as the Head of Department for Science.",

        ],
    },
    {
        id: 4,
        name: "Ms. Nivedita B. Hadimani",
        qualification: "B.A., M.A. in English",
        intro: "“I believe learning should be fun, joyful, and creative. When students enjoy the process, they stop fearing mistakes and begin to embrace the language with confidence and enthusiasm.”",
        fintro:"Fostering fun, joyful, and creative learning that lasts a lifetime.",
        photo: "assets/img/nivedita.png",
        video: "assets/video/msnivedita.mp4",
        heading: "Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "“I really appreciate the teaching skills of Ms. Nivedita Maa’m. Thank you for your great support, guidance, making complex topics easy to understand and your approach in understanding my son’s pros n cons and changing your teaching methods which had a great impact on him. I wish and let this continue in the long run for his successful future.”",
        stage: "- Parent of Sriyansh Kalva, Stage 8",
        teach: "Credentials & Experience",
        credentials: [
            "Ms. Nivedita brings 17 years of teaching experience and is a specialist in English language education. She has extensive experience in teaching English and is committed to helping students build strong communication skills in a positive and supportive environment.",

        ],
    },
    {
        id: 5,
        name: "Ms. Shruthi Bharath",
        qualification: "B.E. Electronics and Communication",
        intro: "“I believe true learning goes beyond memorization. My goal is to nurture problem-solving skills and critical thinking, unlocking each student’s true potential for excellence.”",
        fintro:"Unlocking true learning that goes far beyond simple memorization.",
        photo: "assets/img/shruthi.png",
        video: "/assets/video/shruthi.mp4",
        heading: "Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "“Shruthi Ma’am’s Science classes are engaging and inspiring. Her deep knowledge, combined with her patient and clear teaching style, makes even the most complex topics easy to understand. Under her guidance, students not only learn thoroughly but also develop a genuine interest in Science”",
        stage: "– Ms. Poonam Garg, Parent of Pranav Garg, Stage 6",
        teach: "Credentials & Experience",
        credentials: [
            "Ms. Shruthi has over 2 years of experience teaching Mathematics and Science at the Primary and Lower Secondary levels. She is well-versed in the Cambridge curriculum, its standards, and teaching methodologies. With her ability to simplify complex concepts, she helps students develop a clear understanding while maintaining high academic standards and excellence.",

        ],
    },
    {
        id: 6,
        name: "Ms. Thejaswini S",
        qualification: "B.Sc. Mathematics, B.Ed. Mathematics",
        intro: "“My goal is to make Mathematics a subject that is understood and enjoyed, not feared. I focus on building strong foundations, nurturing problem-solving skills, and fostering confidence in every student.”",
        fintro:"Turning math fear into confidence: understanding and enjoyment guaranteed.",
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

export default function TeacherList() {
    const [show, setShow] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [activeTeacherId, setActiveTeacherId] = useState<number>(teachers[0].id);

    const handleClose = () => setShow(false);
    const handleShow = (teacher: Teacher) => {
        setSelectedTeacher(teacher);
        setActiveTeacherId(teacher.id); // ✅ active teacher set
        setShow(true);
    };

    return (
        <section className="ment mb">
            <div className="container">
                <div className="mnt">
                    <h2 className="finb">The Minds Behind the Method</h2>
                    <div className="row gy-3">
                        {teachers.map((teacher) => (
                            <div key={teacher.id} className="col-12 col-md-6 mb-3">
                                <div
                                    className={` m-bvx ${activeTeacherId === teacher.id ? "active" : "inactive"}`}
                                >
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-12">
                                            <div className="card p-3 shadow-sm mb-2">
                                                <Image
                                                    src={teacher.photo}
                                                    alt={teacher.name}
                                                    className="img-fluid rounded"
                                                    width={300}
                                                    height={200}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-12">
                                            <div className="mn-txt">
                                                <h5 className="finb">{teacher.name}</h5>
                                                <p className="finb mb-2">{teacher.qualification}</p>
                                                <p className="finb">{teacher.fintro}</p>
                                                <Button onClick={() => handleShow(teacher)} className="b-ment d-none d-lg-flex">
                                                    <span className="text">View Profile</span>
                                                    <span>View Profile</span>
                                                </Button>
                                                <Button
                                                                onClick={() => handleShow(teacher)}
                                                                className="b-ment d-flex d-lg-none"
                                                                style={{ float: "right" }}
                                                                >
                                                    
                                                    <span className="text">View Profile</span>
                                                    <span>View Profile</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} size="xl" centered className="myg">
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedTeacher && (
                        <div className="row g-3">
                            <div className="col-md-4">
                                <div className="bgs-grey p-3 rounded h-100">
                                    <Image
                                        src={selectedTeacher.photo}
                                        alt={selectedTeacher.name}
                                        width={300}
                                        height={200}
                                        className="img-fluid rounded mb-3"
                                    />
                                    <h4 className="h-msnt">{selectedTeacher.teach}</h4>
                                        {selectedTeacher.credentials.map((item, index) => (
                                            <p key={index}>{item}</p>
                                        ))}
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h5 className="mn-name fw-bold">{selectedTeacher?.name}</h5>
                                <h6>{selectedTeacher.qualification}</h6>

                                <video controls width="100%" className="mb-2">
                                    <h6>Video Introduction</h6>
                                    <source src={selectedTeacher.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <h4 className="h-msnt">{selectedTeacher.heading}</h4>
                                <p>{selectedTeacher.intro}</p>
                                <h4 className="h-msnt">{selectedTeacher.title}</h4>
                                <p className="mb-1">{selectedTeacher.desc}</p>
                                <p className="fw-bold small-text">{selectedTeacher.stage}</p>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </section>
    );
}
