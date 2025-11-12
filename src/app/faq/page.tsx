'use client';
import { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/footer/Footer";
import BootstrapClient from '../BootstrapClient';
import FullWidthImageSection from "../component/FullWidthImageSection";
import WidthImageSection from "../component/WidthImageSection";
import Faqs from "../faq/Faqs"
import Image from "next/image";
import StickyFooter from "../component/StickyFooter";
import PopupForm from "../component/PopupForm";
import { Button } from "@mui/material";

export default function Page() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Header />
            <section className="faqsec">
                <div className="container">
                    <h1 id="blogs" className="mb-2 d-lg-flex d-none">
                        Frequently Asked Questions
                    </h1>
                    <h4 className="d-lg-flex d-none mtopgf">
                           A 360° Guide for Parents
                        </h4>
            <h1 id="blogs" className="mb-2 d-lg-none d-flex">
                           Frequently Asked Questions
                        </h1>
                        <h4 className="d-lg-none d-flex mtopgf">
                             A 360° Guide for Parents
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
                        <h2>A 360° Guide for Parents</h2>
                        <p>
                            Welcome to Study Monks. We understand that choosing the right educational support for your child is one of the most significant decisions you will make. In a world of endless options, clarity and trust are paramount.
                        </p>
                        <p>
                           This guide has been designed in a user-friendly, expandable format. Simply click on a question that interests you to reveal a detailed answer. This allows you to quickly find the information you need while still having access to a comprehensive, 360-degree view of our philosophy, our methods, and our unwavering commitment to your child's success and well-being. We invite you to explore this resource to understand how we nurture confident, curious, and resilient young minds within the Cambridge curriculum.
                          </p>
                    </div>
                </div>
            </section>



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
            <WidthImageSection
                src="/assets/img/MONKS.webp"
                alt="Right arrow"
                className="d-none d-lg-flex nbc"
                width="100%"
                objectFit="cover"
            />
            <Faqs />
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
                        Ready to Begin the Journey?
                    </h2>


                    <p>
                        Experience the Study Monks difference for yourself. Book a free trial class to see our Mindful Mastery
                        approach in action.
                    </p>


                    <Button className="mentr" type="button" variant="contained" onClick={handleClickOpen}>Book a Free Trial</Button>
                </div>
                <PopupForm open={open} handleClose={handleClose} />
            </section>
            <StickyFooter />
            <Footer />
        </>
    );
}
