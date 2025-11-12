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
import Teacher from "../mentors/Teacher";
import MentorAccordion from "../mentors/MentorAccordion";





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
        service: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);

        // 👉 Yaha aap API call kar sakte ho (fetch/axios ke through)
        // Example:
        // fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
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

            <section className="mentrs">
                <div className="container">
                    <h1 id="blogs" className="mb-2 d-lg-flex d-none">
                            Our Mentors
                        </h1>
                        <h4 className="d-lg-flex d-none mtopgf">
                            The Heartbeat of the Method
                        </h4>
                        <h1 id="blogs" className="mb-2 d-lg-none d-flex">
                            Our <br /> Mentors
                        </h1>
                        <h4 className="d-lg-none d-flex mtopgf">
                            The Heartbeat <br /> of the Method
                        </h4>
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

            <section className="growth mb">
                <div className="container">
                    <div className="text-center">
                        <h2>Meet the Wise Guardians</h2>
                        <p>
                            Our mentors are the living embodiment of our philosophy. They are handpicked not only for their deep subject expertise but for their rare ability to guide and inspire. We believe so strongly in this that <span style={{ color: "#003C79" }} className="fw-bold">only one out of 5 applicants</span> meet our rigorous standards for both academic excellence and empathetic guidance. Below, you will find dedicated partners for your child&apos;s educational journey.
                        </p>
                    </div>
                </div>
            </section>

            <WidthImageSection
                src="/assets/img/MONKS.webp"
                alt="Right arrow"
                className="d-none d-lg-flex nbc"
                width="100%"
                objectFit="cover"
            />

            <section className="pkh nbc1">
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

            <Teacher />

            <section id="philosophy" className="position-relative ready-to">
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
                        Ready to Find the Perfect Teacher?
                    </h2>


                    <p>
                        Schedule a complimentary Clarity Session to speak with one of our academic counselors and discuss how we can tailor a learning path for your child.
                    </p>


                    <Button className="mentr" type="button" variant="contained" onClick={handleClickOpen}>Schedule a clarity session</Button>
                </div>
                <PopupForm open={open} handleClose={handleClose} />
            </section>

            <section className="fad mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <h2 className="text-center fres">Frequently Asked Questions</h2>
                            <MentorAccordion />
                        </div>
                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="faqs-sdeimg">
                                <div className="mt-2">
                                    <h3 className="reacf">
                                        Mentors – Our Method Has a Heartbeat.
                                    </h3>
                                    <p>
                                        A platform offers lessons, but a true mentor delivers a breakthrough. Our Mentors are more than experts in the Cambridge curriculum; they are experts in your child. And the right mentor can change a child&apos;s entire academic trajectory, unlocking their true potential.
                                    </p>

                                    <p>
                                        Find that perfect mentor for your child. Unlock their potential.
                                    </p>
                                    <Button className="mentr" type="button" variant="contained" onClick={handleClickOpen}>Meet a Wise Guardian</Button>
                                </div>
                                <div className="fqqm">
                                    <Image
                                        src="/assets/img/mentor-cta.png"
                                        alt="testimonial"
                                        width={250}
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