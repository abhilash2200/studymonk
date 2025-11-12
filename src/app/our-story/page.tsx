'use client';

import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/footer/Footer";
import StickyFooter from "../component/StickyFooter";
import FullWidthImageSection from "../component/FullWidthImageSection";
import styles from "./page.module.css";
import BootstrapClient from '../BootstrapClient';
import { Button } from "@mui/material";
import PopupForm from "../component/PopupForm";
import StoryAccordion from "./StoryAccordion";
import Link from 'next/link';
import WidthImageSection from "../component/WidthImageSection";


export default function Page() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation speed (ms)
            once: true,
        });
    }, [])

    return (
        <>
            <Header />
            <section className="stry-banner">
                <div className="container">
                    <div className="circlest circlestr"></div>
                    <div className="circlest circlestr2"></div>

                    <div className="mb-3 ">
                        <div className="nbxp">
                            <h1 className="edu d-lg-flex d-none"><b>An Educator’s Concern. <br />
                                A Parent’s Dilemma. A Child’s Potential.</b></h1>
                            <h1 className="edu d-lg-none d-block"><b>An Educator’s Concern. <br />
                                A Parent’s Dilemma.
                                <br />A Child’s Potential.</b></h1>
                        </div>
                        <Button className="btn-primarys"
                            type="button" variant="contained"
                            onClick={handleClickOpen}>Experience the difference</Button>
                    </div>
                </div>
            </section>

            <section id="observation" className="mb">
                {/* decorative img on left side */}
                <div className="deco-img">
                    <Image
                        src="/assets/img/image28.png"
                        alt="Decorative"
                        width={270}
                        height={450}
                    />
                </div>

                <div className="container">
                    <h2>It Started with a Simple Observation.</h2>
                    <div className="itz">
                        <div className="obj-text">
                            <p>
                                Our founder, a Cambridge Curriculum Educator, saw Cambridge students
                                with great potential struggling. Not from lack of effort, but from a
                                lack of the right support. She saw the gap between a world-class
                                curriculum and the local, expert guidance needed to truly master it.
                                Study Monks was born from that observation—not as a business, but as
                                the answer.
                            </p>
                        </div>
                    </div>
                </div>

                <WidthImageSection
                    src="/assets/img/MONKS.webp"
                    alt="Right arrow"
                    className="d-none d-lg-flex monk-stry"
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

                {/* after image this section */}
                <div className="guiding-section text-center container">
                    <h2 className="section-title">
                        Our Guiding Principle: The Wise Guardian
                    </h2>
                    <p className="section-intro">
                        Every decision we make is guided by our powerful archetype, a synthesis
                        of two essential roles that every child needs to thrive. A single,
                        powerful idea: <strong>The Wise Guardian.</strong>
                    </p>

                    <div className="row justify-content-center mt-5">
                        {/* The Sage Card */}
                        <div className="col-md-6 mb-4">
                            <div className="guardian-card h-100">
                                <h3 className="saga" style={{ textAlign: 'center' }}>
                                    The Sage:<br /> Your Expert Guide
                                </h3>
                                <div className="title-underline"></div>
                                <p className="text-center">
                                    The Sage represents our unwavering commitment to intellectual
                                    honesty and expertise. It is our promise to provide factually
                                    impeccable knowledge, to demystify the complexities of the
                                    Cambridge curriculum with calm authority, and to guide students
                                    with the wisdom that comes from true mastery of a subject.
                                </p>
                            </div>
                        </div>

                        {/* The Caregiver Card */}
                        <div className="col-md-6 mb-4">
                            <div className="guardian-card h-100">
                                <h3 className="saga" style={{ textAlign: 'center' }}>
                                    The Caregiver:<br /> Your Trusted Protector
                                </h3>
                                <div className="title-underline"></div>
                                <p className="text-center">
                                    The Caregiver represents our profound commitment to your childs
                                    wellbeing. It is our promise to create a safe, nurturing, and
                                    empathetic environment, to shield students from digital
                                    distractions and academic anxiety, and to support them with the
                                    patience and understanding needed for genuine, confident growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="academ">
                <div className="container academy">
                    <div className="container">
                        <h2 className="academy-title text-center">More Than an Academy</h2>
                        <p className="academy-intro text-center">
                            We believe true learning happens when academic rigor meets psychological safety.
                            Our entire approach is built on the philosophy of the Wise Guardian
                            a blend of expert guidance and nurturing support.
                        </p>

                        <div className="row align-items-center">
                            {/* Left Image */}
                            <div className="col-lg-4 text-center mb-4 mb-lg-0">
                                <Image
                                    src="/assets/img/academy-1.png"
                                    alt="Academy"
                                    width={370}
                                    height={370}
                                    className="img-fluid"
                                />
                            </div>

                            {/* Middle Column */}
                            <div className="col-lg-4 d-flex flex-column justify-content-between">
                                <div className="mindful mb-4">
                                    <h3 className="saga" style={{ color: "#fff" }}>Mindful Mastery</h3>
                                    <p>
                                        We believe that true confidence comes from deep conceptual clarity, not memorisation.
                                        Our mentors guide students to build a foundational understanding of every topic,
                                        fostering a calm, focused approach that reduces academic anxiety
                                        and builds knowledge that lasts a lifetime.
                                    </p>
                                </div>
                                <div className="serenity sere">
                                    <h3 className="saga">Digital Serenity</h3>
                                    <p>
                                        We believe that true confidence comes from deep conceptual clarity, not memorisation.
                                        Our mentors guide students to build a foundational understanding of every topic,
                                        fostering a calm, focused approach that reduces academic anxiety
                                        and builds knowledge that lasts a lifetime.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="col-lg-4 d-flex flex-column justify-content-between order-2 order-md-1">
                                <div className="serenity mb-4 guif">
                                    <h3 className="saga vcfs" >Guided Curiosity</h3>
                                    <p className="bed">
                                        We believe that true confidence comes from deep conceptual clarity, not memorisation.
                                        Our mentors guide students to build a foundational understanding of every topic,
                                        fostering a calm, focused approach that reduces academic anxiety
                                        and builds knowledge that lasts a lifetime.
                                    </p>
                                </div>
                                <div className="mindful mindfuls sere expr">
                                    <h3 className="saga cojhf" style={{ color: "#DBFFD6" }}>Expressive Confidence</h3>
                                    <p className="beli">
                                        We believe that true confidence comes from deep conceptual clarity, not memorisation.
                                        Our mentors guide students to build a foundational understanding of every topic,
                                        fostering a calm, focused approach that reduces academic anxiety
                                        and builds knowledge that lasts a lifetime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="action" className="position-relative">
                {/* Background Image */}
                <div className="act-bg">
                    <div style={{ position: "relative", width: "20%", height: "350px" }}>
                        <Image
                            src="/assets/img/action-bg.png"
                            alt="Action Background"
                            width={700}
                            height={900}
                            priority
                        />
                    </div>
                </div>

                <div className="container">
                    <h2 className="cambridge-title text-center">Our Beliefs in Action</h2>
                    <p className="cambridge-intro text-center">
                        A philosophy is only as strong as the commitments it inspires.
                        Here is how the principles of the Wise Guardian are woven into the
                        very fabric of Study Monks.
                    </p>

                    <div className="row align-items-start">
                        {/* Left Column */}
                        <div className="col-lg-8 order-2 order-md-1">
                            <div className="cambridge mb-4">
                                <h3 className="saga" style={{ textAlign: "left" }}>An Unwavering Focus on Cambridge</h3>
                                <p>
                                    We specialize exclusively in the Cambridge curriculum. This singular focus allows our mentors
                                    to achieve a level of expertise and curriculum alignment that generalist platforms simply
                                    cannot match.
                                </p>
                            </div>
                            <div className="cambridge mb-4">
                                <h3 className="saga" style={{ textAlign: "left" }}>A Commitment to True Expertise</h3>
                                <p>
                                    Every mentor is rigorously trained in Cambridge pedagogy. We believe so strongly in the ‘Wise guardian’ model that <strong>fewer than 20% of applicants</strong> meet our standards for
                                    both academic excellence and empathetic guidance.
                                </p>
                            </div>
                            <div className="cambridge">
                                <h3 className="saga" style={{ textAlign: "left" }}>A Nurturing, Confidence-Building Environment</h3>
                                <p>
                                    We keep our online classes small to ensure every student feels seen and heard. Our
                                    interactive sessions encourage students to find their voice and build confidence alongside a
                                    supportive community of peers.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-0"></div>
                        {/* Right Column */}
                        <div className="col-lg-3 text-center order-1 order-md-2 bvcz">
                            <Image
                                src="/assets/img/bigf.webp"
                                alt="Action Illustration"
                                width={280}
                                height={350}
                                className="img-fluid action-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="lajgfd mb">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4">
                            <Image
                                src="/assets/img/mindful.png"
                                alt="Mindful Learners"
                                width={400}
                                height={400}
                                className="img-fluid"
                            />
                        </div>


                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start">
                            <div>
                                <h3 className="saga"><span className="mijh">Raising a Generation of Confident Mindful Learners</span></h3>
                            </div>
                            <div>
                                <p style={{ color: "#fff" }}>
                                    Our vision is to become India&apos;s most trusted partner for Cambridge families,
                                    bridging the gap between a world-class education and local, accessible expertise.
                                </p>
                                <p style={{ color: "#fff" }}>
                                    We are committed to cultivating students who are not only academically successful
                                    but are also focused, curious, and confident global citizens. Because when students
                                    feel understood, they don&apos;t just improve—they excel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="philosophy" className="position-relative mb">
                <div className="container">


                    <div className="left-img">
                        <Image
                            src="/assets/img/l-bh.png"
                            alt="Left Decoration"
                            width={300}
                            height={300}
                        />
                    </div>


                    <div className="right-img">
                        <Image
                            src="/assets/img/r-bh.png"
                            alt="Right Decoration"
                            width={300}
                            height={300}
                        />
                    </div>


                    <h2>
                        Experience the Difference a <br /> Philosophy Makes
                    </h2>


                    <p>
                        Reading about our philosophy is one thing. Seeing it in action is another.
                        Take the next step and meet the Wise Guardians who <br /> bring our commitment
                        to life every day.
                    </p>


                    <Link href="/mentors"><button className="mentr">Meet Our Mentors</button></Link>
                </div>
                <PopupForm open={open} handleClose={handleClose} />
            </section>

            <section className="fad mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <h2 className="text-center fres">Frequently Asked Questions</h2>
                            <StoryAccordion />
                        </div>
                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="faqs-sdeimg">
                                <div className="mt-2">
                                    <h3 className="reacf">
                                        Our Philosophy Isn&apos;t a Page. It&apos;s a Person.
                                    </h3>
                                    <p>
                                        You&apos;ve read our beliefs. Now, meet them. The heart of Study Monks isn&apos;t a methodology; it&apos;s the mentor who embodies it. Finding the perfect mentor-student connection is the most critical step, and our most sought-after mentors have limited availability.
                                    </p>

                                    <p>
                                        This is your invitation to a personal session with a true Wise Guardian. Let&apos;s start the journey.
                                    </p>
                                    <Button className="mentr" type="button" variant="contained" onClick={handleClickOpen}>Meet a Wise Guardian</Button>
                                </div>
                                <div className="fqqs">
                                    <Image
                                        src="/assets/img/story-cta.png"
                                        alt="testimonial"
                                        width={340}
                                        height={260}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <PopupForm open={open} handleClose={handleClose} />
            </section>

            <Footer />
            <StickyFooter />
        </>
    );
}