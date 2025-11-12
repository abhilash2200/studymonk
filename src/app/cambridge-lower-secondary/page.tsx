'use client';
import "aos/dist/aos.css";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/footer/Footer";
import BootstrapClient from '../BootstrapClient';
import PopupForm from "../component/PopupForm";
import * as React from "react";
import FullWidthImageSection from "../component/FullWidthImageSection";
import { Button } from "@mui/material";
import SecondaryAccordion from "./SecondaryAccordion";
import ConfidenceSection from "./ConfidenceSection";
import StepsSection from "./StepsSection";
import SocraticCircle from "./SocraticCircle";
import Link from 'next/link';
import MobileBlueprintSection from "./MobileBlueprintSection";
import Mentor from "../cambridge-lower-secondary/Mentor"



export default function Page() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose2 = () => setIsOpen(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        stage: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log (formData)
        try {
            const response = await fetch("https://studymonks.com/api/leads.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("✅ Form submitted successfully:", result);
                alert("Form submitted successfully!");
                // Reset form
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    stage: "",
                    message: "",
                });
            } else {
                console.error("❌ Error submitting form:", response.statusText);
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("🚨 Network error:", error);
            alert("Network error. Please try again later.");
        }
    };
    useEffect(() => {
        const stepBoxes = document.querySelectorAll<HTMLDivElement>(".step-box");

        const handleClick = (event: Event) => {
            stepBoxes.forEach((b) => b.classList.remove("active"));
            (event.currentTarget as HTMLDivElement).classList.add("active");
        };

        stepBoxes.forEach((box) => {
            box.addEventListener("click", handleClick);
        });

        // 🧹 Cleanup
        return () => {
            stepBoxes.forEach((box) => {
                box.removeEventListener("click", handleClick);
            });
        };
    }, []);

    return (
        <>
            <Header />

            <section className="primary mb">
                <div className="container-fluid">
                    <div className="primary-first">
                        <div className="row align-items-center">

                            {/* Left Side Text */}
                            <div className="col-lg-8 col-md-8 col-12">
                                <div className="primar_tetx">
                                    <h1 id="child">
                                        Beyond Good Grades: Building the
                                        Confident Thinker for IGCSE Success.
                                    </h1>
                                    <p className="spec">
                                        The Lower Secondary years are a pivotal launchpad. As exclusive Cambridge specialists, we partner with you to transform your child from a diligent student into an agile, articulate thinker. In mentor-led micro-classes of just 8, we build the intellectual confidence and real-world skills needed to excel in the IGCSEs and lead in the future.
                                    </p>
                                    <Button className="btn-primarys" type="button" variant="contained"
                                        onClick={handleClickOpen}>
                                        Book Your Free Academic Blueprint Session
                                    </Button>
                                    <p className="mt-4">
                                        A conversation about their future. No credit card required.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side Image */}
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="primaryImg">
                                    <Image
                                        src="/assets/img/image22.jpg"
                                        alt="Child Learning"
                                        width={600}
                                        height={400}
                                        className="img-fluid w-100"
                                    />
                                    {/* <div className="plk" onClick={handleOpen}>
                                        <Image
                                            src="/assets/img/banne-play.png"
                                            alt="Play Button"
                                            width={80}
                                            height={80}
                                        />
                                    </div> */}
                                    {isOpen && (
                                        <div className="videoModal">
                                            <div className="videoWrapper">
                                                <button className="closeBtn" onClick={handleClose2}>
                                                    ✖
                                                </button>
                                                <iframe
                                                    width="100%"
                                                    height="400"
                                                    src="https://youtu.be/aOu1vWOGDdc?si=VUdvAtbanzl1F5XL"
                                                    title="Video"
                                                    frameBorder="0"
                                                    allow="autoplay; encrypted-media"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="hidden mb bird">
                <div className="container">
                    <div className="text-center hid-sec">
                        <h2>The Hidden Potential: Is Your Child&apos;s <br />
                            Brilliance Trapped by Traditional Methods?</h2>
                        <p className="mb-0">
                            Traditional tuition models are broken. One-on-one can be isolating, while large classes leave students anonymous. We have engineered the single most effective environment for intellectual growth: The Socratic Circle. In a curated cohort of just 8 ambitious peers, your child experiences the perfect balance of personalised mentorship and dynamic group collaboration.
                        </p>
                    </div>
                    <div className="bird_img">
                        <Image
                            src="/assets/img/bird.png"
                            alt="Right arrow"
                            className=""
                            width={250}
                            height={500}
                        />
                    </div>
                </div>
            </section>

            <FullWidthImageSection
                src="/assets/img/studys.webp"
                alt="Right arrow"
                className="d-none d-lg-flex"
                width="100%"
                objectFit="cover"
            />

            <section className="pkh">
                <Image
                    src="/assets/img/s1.png"
                    alt="Right arrow"
                    className="d-flex d-lg-none full-width-img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            </section>

            <section className="box_form_img mb bird">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="forms pnj-btnd">
                                <div className="bvx p-4">
                                    <h4 className="text-center text-white gft mb-4">
                                        Book A FREE Trial Now!
                                    </h4>

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"

                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                pattern="[A-Za-z\s]{3,50}"
                                                title="Please enter a valid name (only letters and spaces)"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"

                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                pattern="[6-9][0-9]{9}"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"

                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Stage</label>
                                            <select
                                                className="form-select form-select"
                                                name="stage"
                                                value={formData.stage}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="Select Stage">Select Stage</option>
                                                <option value="Cambridge Primary">Cambridge Primary</option>
                                                <option value="Cambridge Lower Secondary">Cambridge Lower Secondary</option>

                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Message</label>
                                            <textarea
                                                className="form-control"
                                                rows={2}

                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                        <button className="animated-button">
                                            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                                ></path>
                                            </svg>
                                            <span className="text">Submit</span>
                                            <span className="circle-btn"></span>
                                            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                                ></path>
                                            </svg>
                                        </button>

                                        <div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1"></div>
                        <div className="col-lg-6 col-md-7 col-12">

                            <StepsSection />

                        </div>
                    </div>
                </div>
            </section>

            <SocraticCircle />


            <section className="master-bv mb">
                <div className="container">
                    <div className="text-center">
                        <h2>Mastering the Tools of Thought, Together.</h2>
                        <p>
                            As exclusive Cambridge specialists, we view core primary years as training grounds for developing powerful and versatile minds. During foundational years, the focus is on sparking a genuine love for learning and unshakable core skills in our kids. We create a nurturing and interactive environment where curiosity is celebrated, and confidence begins to blossom.
                        </p>
                    </div>
                    <div className="maste_box_sec">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="master_boz1">
                                    <Image
                                        src="/assets/img/languages.gif" // public folder ka path
                                        alt="Girl with bag"
                                        width={100}   // required
                                        height={100}  // required
                                        className="img-fluid mb-2"
                                        style={{
                                            background: "transparent",
                                            mixBlendMode: "multiply", // try 'darken', 'screen', 'overlay' bhi
                                        }}
                                    />
                                    <h3 className="saga" style={{ textAlign: "left" }}>English</h3>
                                    <p>
                                        The Art of Rhetoric & Argument</p>
                                    <div className="title-underlines"></div>
                                    <p>
                                        We move beyond comprehension to the art of persuasion. Through structured debates and group analysis of sophisticated texts, students learn to master rhetorical skills, build nuanced arguments, and express complex ideas with clarity and conviction.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="master_boz1">
                                    <Image
                                        src="/assets/img/maths.gif" // public folder ka path
                                        alt="Girl with bag"
                                        width={100}   // required
                                        height={100}  // required
                                        className="img-fluid mb-2"
                                        style={{
                                            background: "transparent",
                                            mixBlendMode: "multiply", // try 'darken', 'screen', 'overlay' bhi
                                        }}
                                    />
                                    <h3 className="saga" style={{ textAlign: "left" }}>Mathematics</h3>
                                    <p>
                                        The Science of Abstract Reasoning</p>
                                    <div className="title-underlines"></div>
                                    <p>
                                        We transition from calculation to true mathematical thinking. In their cohorts, students tackle complex, non-routine problems, learning to apply abstract principles, articulate different logical pathways, and build the foundational reasoning skills essential for advanced mathematics.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="master_boz1">
                                    <Image
                                        src="/assets/img/science-book.gif" // public folder ka path
                                        alt="Girl with bag"
                                        width={100}   // required
                                        height={100}  // required
                                        className="img-fluid mb-2"
                                        style={{
                                            background: "transparent",
                                            mixBlendMode: "multiply", // try 'darken', 'screen', 'overlay' bhi
                                        }}
                                    />
                                    <h3 className="saga" style={{ textAlign: "left" }}>Science</h3>
                                    <p>
                                        The Practice of Critical Inquiry
                                    </p>
                                    <div className="title-underlines"></div>
                                    <p>
                                        We transition from calculation to true mathematical thinking. In their cohorts, students tackle complex, non-routine problems, learning to apply abstract principles, articulate different logical pathways, and build the foundational reasoning skills essential for advanced mathematics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pnj-btn">
                            <Button className="mentr" type="button" variant="contained" onClick={handleClickOpen}>Book  FREE Diagnostic & day Free Trial</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="phg mb">
                <div className="container">
                    <div className="pik-box">
                        <div className="text-center">
                            <h2>Your Child&apos;s Journey to Becoming a Confident Thinker</h2>
                            <p>Our methodology is a deliberate journey designed to unlock your child&apos;s potential and build the cognitive architecture for lifelong success.</p>
                        </div>
                        <div className="pink_sec d-none d-md-block">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="shg">
                                        <div className="d-flex pkjl">
                                            <Image
                                                src="/assets/img/Group3467.png"
                                                alt="Guardian"
                                                width={60}
                                                height={60}
                                                className="img-fluid me-3"
                                            />
                                            <h4>The Personalised <br />
                                                Blueprint</h4>

                                        </div>
                                        <hr className="dotss" />
                                        <div className="d-flex pkjl">
                                            <Image
                                                src="/assets/img/Group3467.png"
                                                alt="Guardian"
                                                width={30}
                                                height={30}
                                                className="img-fluid me-3"
                                            />
                                            <h4>The Collaborative
                                                <br />
                                                Discovery </h4>

                                        </div>
                                        <hr className="dotss" />
                                        <div className="d-flex pkjl">
                                            <Image
                                                src="/assets/img/Group3467.png"
                                                alt="Guardian"
                                                width={30}
                                                height={30}
                                                className="img-fluid me-3"
                                            />
                                            <h4>Mastery & <br />
                                                Articulation</h4>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <div className="p-k-bhg">
                                        <div className="p-test">
                                            <p>
                                                Our initial session is a deep dive into your child&apos;s unique strengths and learning style. We don&apos;t just test what they know; we seek to understand how they think allowing us to  to create a &apos;Personalised Blueprint&apos; that maps their potential and outlines a clear, inspiring path to achieving it.
                                            </p>
                                            <hr className="text-bla" />
                                        </div>
                                        <div className="p-test2">
                                            <p>
                                                This is where the magic happens. Our sessions are not lectures; they are dynamic Socratic dialogues. Wise Guardians are expert facilitators who guide the micro-class through a process of collaborative discovery. They use strategic questioning to spark debate, encourage different viewpoints, and help the group arrive at a deeper understanding
                                            </p>
                                            <hr className="text-bla" />
                                        </div>
                                        <div className="p-test3">
                                            <p>
                                                True mastery isn&apos;t just knowing the answer; it&apos;s being able to apply and communicate it with confidence. We challenge each cohort with complex, IGCSE-style problems that require them to synthesise their knowledge and present a unified solution. This is where they learn the invaluable skills of teamwork, leadership, and persuasive communication
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MobileBlueprintSection />
                    </div>
                </div>
            </section>


            {/* <section className="path mb">
                <div className="container">
                    <div className="bg-purple">
                        <div className="text-center">
                            <h2>The Path from Attention to Achievement</h2>
                            <p>Our method is a simple, powerful sequence where personalized attention directly builds the confidence and skills needed for success.</p>
                        </div>
                        <div className="path_sec">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="path_one">
                                        <h5>Building Confident <br />
                                            Communicators</h5>
                                        <hr />
                                        <p>
                                            Tutors identify and address individual learning gaps.
                                        </p>
                                        <h5 className="one_first">01</h5>
                                        <div className="line-arrow">
                                            <Image
                                                src="/assets/img/v-line.png"
                                                alt="Girl with bag"
                                                width={230}
                                                height={230}
                                                className="img-fluid mb-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="path_one path2">
                                        <h5>Increased
                                            <br />
                                            Participation</h5>
                                        <hr />
                                        <p>
                                            Students feel safe to ask, explore, and collaborate.
                                        </p>
                                        <h5 className="one_first">02</h5>
                                        <div className="line-arrow2">
                                            <Image
                                                src="/assets/img/v-2.png"
                                                alt="Girl with bag"
                                                width={225}
                                                height={225}
                                                className="img-fluid mb-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="path_one">
                                        <h5>Boosted
                                            <br />
                                            Confidence</h5>
                                        <hr />
                                        <p>
                                            Mastery of concepts builds self-esteem and courage.
                                        </p>
                                        <h5 className="one_first">03</h5>
                                        <div className="line-arrow3">
                                            <Image
                                                src="/assets/img/v-3.png"
                                                alt="Girl with bag"
                                                width={225}
                                                height={225}
                                                className="img-fluid mb-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="path_one path2">
                                        <h5>Exam
                                            <br />
                                            Readiness</h5>
                                        <hr />
                                        <p>
                                            Tutors identify and address individual learning gaps.
                                        </p>
                                        <h5 className="one_first">04</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="trasc mb">
                <div className="container">
                    <div className="gr-boxz">
                        <div className="d-flex">
                            <div>
                                <Image
                                    src="/assets/img/tick-circle.svg"
                                    alt="Right arrow"
                                    width={40}
                                    height={40}

                                />
                            </div>
                            <div>
                                <h3 className="sectd">See the Transformation: Start Your No-Risk 7-Day Trial</h3>
                                <p className="mb-0">
                                    Experience our teaching methodology firsthand. If it&apos;s not the perfect fit, simply walk away. </p>
                                <p>No commitment, no questions asked.</p>
                                <Button className="mentr" type="button" variant="contained" onClick={handleClickOpen}>Book  FREE Diagnostic & day Free Trial</Button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="partner" className="mb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-4 col-12">
                            <div className="pt-text">
                                <h2 style={{ textAlign: "left" }} className="metf">Meet the Wise Guardians: <br />
                                    Your Child&apos;s Personal Thinking
                                    Partner</h2>
                                <p>Our Wise Guardians are more than a tutor; they are an expert facilitator of intellectual discovery. We are relentlessly selective—just 1 in 5 applicants are chosen—seeking not only deep Cambridge curriculum expertise but the rare ability to manage and elevate a high-potential group discussion.
                                </p>
                                <p>
                                    Every mentor is rigorously trained in our Socratic, micro-class methodology. Their mission is not to lecture, but to guide the conversation, ensuring every child participates, is challenged, and learns from the collective intelligence of the group.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1"></div>
                        <div className="col-lg-6 col-md-6 col-12">
                            {/* <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="image-box mt-3">
                                        <Image
                                            src="/assets/img/kamalpreet.png"
                                            alt="Guardian"
                                            width={250}
                                            height={200}
                                            className="img-fluid"
                                        />
                                        <Link href="/mentors"><div className="hover-arrow">

                                            <div>
                                                <p className="text-white mb-0"><b>Ms. Kamalpreet Kaur Bagga</b></p>
                                                
                                            </div>
                                            <Image
                                                src="/assets/img/part-arrow.png"
                                                alt="arrow icon"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="image-box mt-3">
                                        <Image
                                            src="/assets/img/sujatha.png"
                                            alt="Guardian"
                                            width={250}
                                            height={200}
                                            className="img-fluid"
                                        />
                                        <Link href="/mentors"><div className="hover-arrow">

                                            <div>
                                                <p className="text-white mb-0"><b>Ms. Nivedita B Hadimani</b></p>
                                                
                                            </div>
                                            <Image
                                                src="/assets/img/part-arrow.png"
                                                alt="arrow icon"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="image-box mt-3">
                                        <Image
                                            src="/assets/img/nivedita.png"
                                            alt="Guardian"
                                            width={250}
                                            height={200}
                                            className="img-fluid"
                                        />
                                        <Link href="/mentors"><div className="hover-arrow">

                                            <div>
                                                <p className="text-white mb-0"><b>MMs. Sujatha S</b></p>
                                               
                                            </div>
                                            <Image
                                                src="/assets/img/part-arrow.png"
                                                alt="arrow icon"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="image-box mt-3">
                                        <Image
                                            src="/assets/img/thejaswini.png"
                                            alt="Guardian"
                                            width={250}
                                            height={200}
                                            className="img-fluid"
                                        />
                                        <Link href="/mentors"><div className="hover-arrow">
                                            <Image
                                                src="/assets/img/part-arrow.png"
                                                alt="arrow icon"
                                                width={50}
                                                height={50}
                                            />
                                            <div>
                                                <p className="text-white mb-0"><b>Ms. Thejaswini</b></p>
                                                
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
                           <Mentor/>
                        </div>
                    
                    </div>
                </div>
            </section>

            <section className="mb">
                <div className="container">
                    <div style={{ backgroundColor: "#FBFFF6", borderRadius: "40px", padding: "40px" }} className="no-padding">
                        <ConfidenceSection />
                        <div className="text-center">
                            <p><b>Limited complimentary sessions available each week. Book now to secure your spot and start their journey towards intellectual independence.</b></p>
                            <Button className="mentr" type="button" variant="contained" onClick={handleClickOpen}>Book  FREE Daignostic & day Free Trial</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why mb">
                <div className="container">
                    <div className="text-center">
                        <h2>Why Parents Choose Us</h2>
                        <p>
                            Building a foundation of trust through transparency, expertise, and a commitment to your child&apos;s holistic development.
                        </p>
                        <div>
                        </div>
                    </div>
                    <div className="meet_sec">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="meet_box">
                                    <Image
                                        src="/assets/img/shield1.png"
                                        alt="Girl with bag"
                                        width={60}
                                        height={60}
                                        className="img-fluid mb-2"
                                    />
                                    <h4 className="cxa">Cambridge Specialist Guarantee</h4>
                                    <p>
                                        Our mentors are rigorously trained Cambridge subject specialists, ensuring unparalleled expertise in every micro-class.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="meet_box">
                                    <Image
                                        src="/assets/img/cloud-security 2.png"
                                        alt="Girl with bag"
                                        width={60}
                                        height={60}
                                        className="img-fluid mb-2"
                                    />
                                    <h4 className="cxa">Safety & Privacy Assured</h4>
                                    <p>
                                        We prioritize your child&apos;s well-being with comprehensive safety protocols and strict privacy and child protection policies.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="meet_box">
                                    <Image
                                        src="/assets/img/choice2.png"
                                        alt="Girl with bag"
                                        width={60}
                                        height={60}
                                        className="img-fluid mb-2"
                                    />
                                    <h4 className="cxa">Proven Parent Satisfaction</h4>
                                    <p>
                                        Our high parent retention and satisfaction rates speak to the profound impact we have on our student&apos;s intellectual growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="fad mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <h2 className="text-center fres">Frequently Asked Questions</h2>
                            <SecondaryAccordion />
                        </div>
                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="faq-sdeimg">
                                <div className="mt-2">
                                    <h3 className="reacf">
                                         Don&apos;t Just Learn the Cambridge Curriculum. Challenge It.
                                    </h3>
                                    <p>
                                        Lower Secondary is where learning deepens—the pivotal stage where students move from collecting facts to constructing arguments. This is the critical foundation for IGCSE success; let&apos;s build it together. Your complimentary 7-day trial starts with a free Skill Assessment Session.
                                    </p>

                                    <p>
                                        Discover your child&apos;s analytical skills, intellectual rigor, and confidence to defend their own, well-reasoned perspective.
                                    </p>
                                    <Button
                                        className="btn-books mt-3"
                                        type="button"
                                        variant="contained"
                                        onClick={handleClickOpen}
                                    >
                                        Build Your Child&apos;s
                                        <br />
                                        Intellectual Edge
                                    </Button>
                                </div>
                                <div className="fqqq">
                                    <Image
                                        src="/assets/img/lowercta.webp"
                                        alt="testimonial"
                                        width={280}
                                        height={260}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="look mb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-3 col-12">
                            <div className="loo-imh ">
                                <Image
                                    src="/assets/img/secdary-img.png"
                                    alt="testimonial"
                                    width={450}
                                    height={260}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1"></div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="look-txt">
                                <h2 style={{ textAlign: "left" }}>Looking for our <br />
                                    Primary Programme (Stages 4-6)?</h2>
                                <div className="mt-4">
                                    <Link href="/cambridge-primary"><button className="btn-book mb-3" type="button">

                                        Click Here
                                    </button></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <PopupForm open={open} handleClose={handleClose} />
            <Footer />

        </>
    );

}