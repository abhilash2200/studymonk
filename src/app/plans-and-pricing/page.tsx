'use client';

import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/footer/Footer";
import BootstrapClient from '../BootstrapClient';
import { useState } from "react";
import { useEffect } from "react";
import * as React from "react";
import StickyFooter from "../component/StickyFooter";
import PopupForm from "../component/PopupForm";
import { Button } from "@mui/material";
import FullWidthImageSection from "../component/FullWidthImageSection";
import WidthImageSection from "../component/WidthImageSection";
import PriceAccordion from "../plans-and-pricing/PriceAccordion";
import PriceTab from "../plans-and-pricing/PriceTab";
import ReviewSlider from "../plans-and-pricing/ReviewSlider";
import pricingData, { type Stage } from "../data/Prices";




export default function Page() {
    const [open, setOpen] = useState(false);
    const [activeStage, setActiveStage] = useState<Stage>("stage4");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Calculate Ultimate Advantage Package price based on active stage
    const stageInfo = pricingData[activeStage];
    const ultimatePackagePrice = stageInfo.combo3;

    const formatINR = (value: number) =>
        value.toLocaleString("en-IN", { maximumFractionDigits: 0 });





    return (
        <>
            <Header />

            <section className="price-banner">
                <div className="container-fluid">
                    <div className="row flex-column-reverse flex-md-row d-none d-md-flex">
                        <div className="col-lg-7 col-md-7 col-12 order-md-first">
                            <div className="price-txt">
                                <h2>The Perfect Balance of Personal Attention
                                    and Peer Collaboration.</h2>
                                <p className="">
                                    Most parents believe the goal of tutoring is to master a subject. But the true challenge of a Cambridge education lies deeper—it&apos;s in learning to analyze, debate, and defend a perspective with confidence. That is the deeper value your investment delivers.
                                </p>
                                <p className="">
                                    Give your child the confidence to excel with expert-led online Micro Classes in English, Math, and Science, designed for focused, small-group learning.
                                </p>
                                <a href="#price"><Button className="btn-primarys" id="pr"
                                    type="button">Explore Plans <Image
                                        src="/assets/img/arrow-down.png"
                                        alt="Right arrow"
                                        width={25}
                                        height={25}
                                    /></Button></a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 order-md-last">
                            <div className="price-img">
                                <Image
                                    src="/assets/img/peer.png"
                                    alt="Right arrow"
                                    width={800}
                                    height={500}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="row d-block d-md-none">
                    <div
                        className="mob-banner d-flex d-md-none align-items-center"
                        style={{
                            // backgroundImage: "url('/assets/img/peer-mob.png')",
                            // backgroundSize: "cover",
                            // backgroundPosition: "center",
                            // padding: "40px 20px",
                            height: "200px",
                            position: "relative",
                            
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                bottom: "50%",
                                transform: "translateY(50%)",
                                left: "10px",
                                right: "20px",
                                color: "#fff",
                                zIndex: 2,
                                // textShadow: "0 2px 10px rgba(0,0,0,0.2)"
                            }}
                        >
                            <h2 style={{ fontSize: "20px", fontWeight: "700", lineHeight: "1.3" }}>
                                The Perfect Balance of Personal Attention and Peer Collaboration.
                            </h2>

                            <a href="#price">
                                <Button
                                    className="btn-primarys"
                                    id="pr"
                                    type="button"
                                    style={{ marginTop: "12px" }}
                                >
                                    Explore Plans{" "}
                                    <Image
                                        src="/assets/img/arrow-down.png"
                                        alt="Right arrow"
                                        width={25}
                                        height={25}
                                    />
                                </Button>
                            </a>
                        </div>
                    </div>
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



            <WidthImageSection
                src="/assets/img/MONKS.webp"
                alt="Right arrow"
                className="d-none d-lg-flex mb"
                width="100%"
                objectFit="cover"
            />

            <section className="pkh">
                <Image
                    src="/assets/img/m1.png"
                    alt="Right arrow"
                    className="d-flex d-lg-none full-width-img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            </section>

            <PriceTab activeStage={activeStage} setActiveStage={setActiveStage} />
            <section className="sep mb">
                <div className="container">
                    <div className="text-center">
                        <h2 className="more">More Than Tuition. An Investment in Growth.</h2>
                        <p style={{ color: "#fff" }}>
                            Before you choose a plan, see the integrated value we provide. Each bundle includes academic excellence, confidence-building skills, and wellness mentorship at a fraction of the cost of sourcing them separately.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-12 mx-auto">
                            <div className="sep-box">
                                <div className="sep-border">
                                    <div className="text-center">
                                        <h3 id="pyh">The Separate Path</h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 col-7 mx-auto">
                                            <p className="text-white">
                                                Cambridge Tutors (2)
                                            </p>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-5">
                                            <p className="text-white">
                                                ~ ₹15,000/mo
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 col-7 mx-auto">
                                            <p className="text-white">
                                                Public Speaking Class
                                            </p>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-5">
                                            <p className="text-white">
                                                ~ ₹3,500/mo
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 col-7 mx-auto">
                                            <p className="text-white">
                                                Wellness / Mentor
                                            </p>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-5">
                                            <p className="text-white">
                                                ~ ₹3,000/mo
                                            </p>
                                        </div>
                                    </div>
                                    <hr className="text-white" />
                                    <div className="text-center">
                                        <p className="text-white">
                                            Typical Monthly Cost
                                        </p>
                                        <h3 id="pyh"><del>₹21,500</del></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 mx-auto">
                            <div className="seps-box">
                                <div className="seps-border">
                                    <div className="text-center">
                                        <h3 id="pyhs">The Study Monks Way</h3>
                                        <div
                                            className="prtr mx-auto"
                                            style={{ height: "100%", textAlign: "center" }}
                                        >
                                            <div className="d-flex align-items-center mb-2">
                                                <Image
                                                    src="/assets/img/tick-circle.png"
                                                    alt="Right arrow"
                                                    width={20}
                                                    height={20}
                                                    className="me-2"
                                                />
                                                <p className="text-black mb-0">Academics</p>
                                            </div>

                                            <div className="d-flex align-items-center mb-2">
                                                <Image
                                                    src="/assets/img/tick-circle.png"
                                                    alt="Right arrow"
                                                    width={20}
                                                    height={20}
                                                    className="me-2"
                                                    style={{ gap: "8px" }}
                                                />
                                                <p className="text-black mb-0">Life Skills</p>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <Image
                                                    src="/assets/img/tick-circle.png"
                                                    alt="Right arrow"
                                                    width={20}
                                                    height={20}
                                                    className="me-2"
                                                />
                                                <p className="text-black mb-0">Mentorship</p>
                                            </div>
                                        </div>

                                    </div>
                                    <hr className="tops" />
                                    <div className="text-center">
                                        <p className=" text-black">
                                            All-In-One Bundles Start At
                                        </p>
                                        <h3 id="pyhs">₹{formatINR(ultimatePackagePrice)}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className="trasc mb teachinh">
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

                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="text-center t-nhg">
                        <button className="mentr" onClick={handleClickOpen}>Claim Your Child&apos;s 7 Day Free Trial</button>
                    </div>
                    <PopupForm open={open} handleClose={handleClose} />
                </div>
            </section>




            <section id="philosophy" className="position-relative mb d-none d-md-block">
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
                        More Than Just Tutoring. A Complete Support System.
                    </h2>


                    <p className="bxf">
                        Every Study Monks plan is all-inclusive, providing your child with a comprehensive academic support system designed for success.
                    </p>



                </div>

            </section>

            <section className="bg-ble">
                <div className="container">
                    <div className="bg-blues">
                        <div className="icon-hg">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12 d-block d-md-none">
                                    <div className="b-ocon-box px-0">
                                        <h2 className="mb-3">
                                            More Than Just Tutoring. A Complete Support System.
                                        </h2>
                                        <p className="bxf w-100">
                                            Every Study Monks plan is all-inclusive, providing your child with a comprehensive academic support system designed for success.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="b-ocon-box ">
                                        <Image src="/assets/img/admin.png" alt=""
                                            width={80}
                                            height={0}
                                            style={{ height: 'auto', width: '80px' }}
                                        />
                                        <h6 className="live-cl">Live, Interactive Small <br />
                                            Group Classes</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="b-ocon-box br-right">
                                        <Image src="/assets/img/bookd.png" alt=""
                                            width={80}
                                            height={0}
                                            style={{ height: 'auto', width: '80px' }}
                                        />
                                        <h6 className="live-cl">Custom Library of <br />
                                            Curriculum-Aligned Resources</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="b-ocon-box">
                                        <Image src="/assets/img/users.png" alt=""
                                            width={80}
                                            height={0}
                                            style={{ height: 'auto', width: '80px' }}
                                        />
                                        <h6 className="live-cl">Access to a Supportive <br />
                                            Peer Learning Community</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="b-ocon-box">
                                        <Image
                                            src="/assets/img/right.png"
                                            alt=""
                                            width={80}
                                            height={0}
                                            style={{ height: 'auto', width: '80px' }}
                                        />
                                        <h6 className="live-cl">A Safe, Secure, and <br />
                                            Distraction-Free Digital Platform</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="b-ocon-box br-right">
                                        <Image src="/assets/img/safe.png" alt=""
                                            width={80}
                                            height={0}
                                            style={{ height: 'auto', width: '80px' }}
                                        />
                                        <h6 className="live-cl">Regular, Personalized <br />
                                            Progress Reports</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="b-ocon-box b-conv">
                                        <Image src="/assets/img/mentor-ico.png" alt=""
                                            width={80}
                                            height={0}
                                            style={{ height: 'auto', width: '80px' }}
                                        />
                                        <h6 className="live-cl">Mentorship from a <br />
                                            Cambridge Specialist</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ReviewSlider />

            <section className="fad mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <h2 className="text-center fres">Frequently Asked Questions</h2>
                            <PriceAccordion />
                        </div>
                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="faq-sdeimg position-relative">
                                <div className="mt-2">
                                    <h3 className="reacf">
                                        For Young Minds, Curiosity is a
                                        Superpower. We Help Them Master It.
                                    </h3>
                                    <p>
                                        This is the magical age where curiosity can either blossom into a lifelong love for learning or fade away. Our mentors are trained to catch every {`why?`} and turn it into a thrilling discovery, ensuring their natural curiosity becomes an unstoppable academic strength.
                                    </p>

                                    <p>
                                        Your complimentary 7-day trial begins with a free Discovery Session, designed to unlock the questions your child is most excited to answer.
                                    </p>
                                    <Button
                                        className="btn-books mt-3"
                                        type="button"
                                        variant="contained"
                                        onClick={handleClickOpen}
                                    >
                                        Start Your Learning
                                        <br />
                                        Adventure
                                    </Button>
                                </div>
                                <div className="ijhg hgy position-absolute pr-cta" style={{ right: "10px", bottom: "10px" }}>
                                    <Image
                                        src="/assets/img/pricing-cta.webp"
                                        alt="testimonial"
                                        width={300}
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






            <StickyFooter />
            <Footer />

        </>
    );

}