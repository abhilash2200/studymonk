'use client';

import { useEffect } from "react";
import { useState } from "react";
import "aos/dist/aos.css";
import Image from "next/image";
import Header from "../app/component/Header";
import Footer from "../app/component/footer/Footer";
import styles from "./page.module.css";
import BootstrapClient from '../app/BootstrapClient';
import ImageSlider from "../app/component/ImageSlider";
import FullWidthImageSection from "../app/component/FullWidthImageSection";
import WidthImageSection from "../app/component/WidthImageSection";
import Rings from "./component/Rings";
import BottomAccordion from "./component/BottomAccordion ";
import StickyFooter from "./component/StickyFooter";
import MobSlider from "./component/Mobslider";
import PopupForm from "./component/PopupForm";
import { Button } from "@mui/material";
import Link from "next/link";






export default function Home() {


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const accordionData = [
    {
      title: "Mindful Mastery",
      content: `We move beyond rote learning to ensure deep conceptual 
understanding. Our mentors foster a calm, focused approach that builds lasting 
knowledge and unshakable confidence.`
    },
    {
      title: "Guided Curiosity",
      content: `A great education sparks a lifelong desire to learn. We encourage 
students to ask "why," explore ideas, and connect subjects to the world around 
them, turning learning into a journey of discovery.`},
    {
      title: "Digital Serenity",
      content: `Our platform is a safe, distraction-free space designed for focus. We 
provide a tranquil environment where students can learn, express themselves, 
and thrive without digital noise. 
`},
    {
      title: "Expressive Confidence",
      content: `Knowledge becomes powerful when it can be shared and applied. We help students find the words to explain their thinking, defend their ideas, and lead with what they know, both in and out of the classroom. 
` },
  ];





  return (
    <>
      <Header />
      {/* Banner Section */}
      <section className="focus-section mb">
        <div className="circles">
          <span className="circles circle1"></span>
          <span className="circles circle2"></span>
          <span className="circles circle3"></span>
        </div>

        <div className="content">
          <h1>
            Find Your <span className="focus">Focus.</span> Find Your <span className="focus">Voice.</span>
          </h1>
          <p className="mt-3">
            You chose the Cambridge path for its depth and global advantage. Our
            specialist mentors cultivate the focus and confidence your child needs
            to master its challenges and unlock their full potential.
          </p>
          <Button className="btn-primarys"
            type="button" variant="contained"
                    onClick={handleClickOpen}>Experience the difference</Button>
        </div>
      </section>
      {/* Frame Section */}
      <section className="frame">
        <div className="container">
          <h2>The Framework for Your Focus & Voice</h2>
          <div className="all-text">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-12">
                <Rings />
              </div>
              <div className="col-lg-1 col-md-1 col-1"></div>
              <div className="col-lg-7 col-md-6 col-12">
                <div className="fram-text">
                  <h3 className="cam">The Focus Chamber</h3>
                  <p>
                    The pinnacle of learning. Students synthesize knowledge to
                    produce original work, formulate new hypotheses, and design
                    innovative solutions.
                  </p>
                  <div className="row gy-3 d-none d-lg-flex">
                    <div className="col-lg-4 col-md-4 col-4">
                      <div className="green bg-grey">
                        <h4 className="assetx">
                          Assess & <br /> Strategize
                        </h4>
                        <p>
                          We begin with a Diagnostic Assessment & Strategic Blueprint to understand your childs unique needs, then co-create a personalized learning plan.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <div className="green bg-grey">
                        <h4 className="assetx">
                          Engage & <br /> Build Concepts
                        </h4>
                        <p>
                          Live, interactive 1:8 Micro Classes to focus on deep conceptual understanding using curated resources to enable concept clarity and critical thinking.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <div className="green bg-grey">
                        <h4 className="assetx">
                          Practice & <br /> Master
                        </h4>
                        <p>
                          Targeted assignments and continuous feedback by Mentors, reinforcing Application, Mastery & Exam Readiness for Cambridge Assessments.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row gy-3 d-flex d-lg-none">
                    <MobSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Champ Section */}
      <section className="champ">
        <div className="container">
          <div className="tersd">
            <div className="row">
              {[
                {
                  title: "The Cambridge Compass",
                  text: [
                    "Our proprietary",
                    "Cambridge aligned framework",
                    "is designed to provide purpose, direction, and clarity at every stage of your child's academic journey",
                  ],
                },
                {
                  title: "The Cambridge Code",
                  text: [
                    "Get our proprietary",
                    "Curated content,",
                    "designed for each Strand, Unit & Objective meticulously offering a clear and coherent pathway to success.",
                  ],
                },
                {
                  title: "The Mastery Method",
                  text: [
                    "Face your exams with unshakable confidence, powered by our Targeted",
                    "Progression Test Prep",
                    "and Comprehensive",
                    "Checkpoint Prep.",
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="col-lg-4 col-md-4 col-12">
                  <div className="gfd">
                    <h4 className="assetx">{item.title}</h4>
                    <p>
                      {item.text.map((t, i) => (
                        <span key={i}>
                          {i === 1 || i === 3 ? (
                            <strong style={{ color: "#003C79" }}>{t}</strong>
                          ) : (
                            t
                          )}
                          {i < item.text.length - 1 && " "}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
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

      {/* Blue Section */}
      <section className="blue mb">
        <div className="container">
          <div className="blu-box">
            <div className="text-center">
              <h2>Tailored Guidance for Your Child&apos;s Cambridge Stage</h2>
              <p>
                We understand that a student&apos;s needs evolve dramatically as they progress through the Cambridge curriculum...
              </p>
            </div>
            <div className="blu-box">
              <div className="row gy-3">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className=" bh-c h-100">
                    <h4 className="assetx">Cambridge Primary (Stages 4-6)</h4>
                    <p><b>Building a Love for Learning</b></p>
                    <p>For our youngest learners, we focus on sparking curiosity and building unshakable confidence. Our mentors create a nurturing environment where foundational concepts in English, Maths, and Science are explored in an engaging, interactive way.</p>
                    <Link href="/cambridge-primary"><button className="btgf">
                      <span className="text">View More</span>
                      <span>
                        <Image
                          src="/assets/img/btnp-arrow.png"
                          alt="Right arrow"
                          width={25}
                          height={25}
                        />
                      </span>
                    </button></Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className=" bh-c h-100">
                    <h4 className="assetx">Cambridge Lower Secondary (Stages 7-9)</h4>
                    <p><b>Deepening Knowledge, Building Skills</b></p>
                    <p>As students advance, we shift focus to developing critical thinking and analytical skills. We guide them through the increasing rigor of English, Maths, and Science, preparing them for the challenges of IGCSE and beyond.</p>
                    <Link href="/cambridge-lower-secondary"><button className="btgf">
                      <span className="text">View More</span>
                      <span>
                        <Image
                          src="/assets/img/btnp-arrow.png"
                          alt="Right arrow"
                          width={25}
                          height={25}
                        />
                      </span>
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WidthImageSection
        src="/assets/img/MONKS.webp"
        alt="Right arrow"
        className="d-none d-lg-flex"
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

      {/* Limited Seats Section */}
      <section className="linvit mb">
        <div className="container">
          <div className="linit">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-12">
                <div className="lim-txt text-white">
                  <h3 id="lij">Limited Seats. Endless Possibilities.</h3>
                  <p className="text-white">
                    Drop your details now and get a call from our expert counsellors!
                  </p>
                  <Button className="mentr" type="button" variant="contained" onClick={handleClickOpen}>Book a consultation</Button>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 col-12">
                <div className="lim-img">
                  <Image
                    src="/assets/img/girl.webp"
                    alt="Girl"
                    className="img-fluid"
                    width={600}
                    height={600}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="promise mb">
        <div className="container">
          <div className="pro-i text-center">
            <span className="our">Our Promise</span>  <Image
              src="/assets/img/arrow-ims.webp"
              alt="Arrow"
              width={100}
              height={100}
              className="img-fluid ades"
            />  <span className="learning">
              Learning experience built on Four pillars
            </span>
          </div>

          <div className="next_div">
            <div className="row">
              {/* Left Side Accordion */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="pro-text">
                  <p>
                    True education is not a race for grades; it is the art of building a confident,
                    curious, and resilient mind.
                  </p>

                  <div className="accordions">
                    {accordionData.map((item, index) => (
                      <div key={index} className="accordion-items">
                        <div
                          className="accordion-headers bvzx"
                          onClick={() => toggleAccordion(index)}
                          style={{ cursor: "pointer" }}
                        >
                          {item.title}
                          <span className="accordion-icons">
                            {activeIndex === index ? "−" : "+"}
                          </span>
                        </div>
                        {activeIndex === index && (
                          <div className="accordion-contents active">
                            <p>{item.content}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-1 col-md-1 col-1"></div>

              {/* Right Side Image + Titles */}
              <div className="col-lg-5 col-md-5 col-12">
                <div className="nexy_div_img text-center">
                  <Image
                    src="/assets/img/macs.webp"
                    alt="Arrow"
                    width={500}
                    height={500}
                    className="img-fluid"
                  />

                  {/* Each text block checks if it's active */}
                  <div className={`master ${activeIndex === 0 ? "active-text" : ""}`}>
                    <h6 className="mind">Mindful <br /> Mastery</h6>
                  </div>
                  <div className={`master1 ${activeIndex === 1 ? "active-text" : ""}`}>
                    <h6 className="mind">Guided <br /> Curiosity</h6>
                  </div>
                  <div className={`master3 ${activeIndex === 2 ? "active-text" : ""}`}>
                    <h6 className="mind">Digital <br /> Serenity</h6>
                  </div>
                  <div className={`master2 ${activeIndex === 3 ? "active-text" : ""}`}>
                    <h6 className="mind">Expressive <br /> Confidence</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Styles for animation */}
        <style jsx>{`
  .active-text {
    color: #000;
    animation: pulseGlow 1.5s ease-in-out infinite;
  }

  @keyframes pulseGlow {
    0% { 
      transform: scale(1);
      text-shadow: 0 0 0px rgba(0, 255, 128, 0.2);
    }
    50% { 
      transform: scale(1.1);
      text-shadow: 0 0 12px rgba(0, 255, 128, 0.6);
      color: #00cc66;
    }
    100% { 
      transform: scale(1);
      text-shadow: 0 0 0px rgba(0, 255, 128, 0.2);
    }
  }
`}</style>
      </section>
      <section className="dark mb">
        <div className="container">
          <div className="text-center text-white mx-auto darkbox">
            <h2 className="text-white">The Heart of Our Promise: The Mentors</h2>
            <h3 className="yellow">&lt; 20%</h3>
            <h5 className="mentor">Mentor Acceptance Rate</h5>
            <p className="text-white">
              Our mentors are the living embodiment of our promise. They are handpicked not only for their deep subject
              expertise but for their rare ability to guide and nurture young minds. Fewer than 20% of applicants meet
              our
              rigorous standards for both academic excellence and empathetic guidance.
            </p>
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

      <section className="study mb d-none d-lg-flex">
        <div className="container">
          <h2>The Study Monks Impact: A Snapshot</h2>
         

          <div className="impact-container">
            <div className="circle">94%</div>
            <div className="label1">
              <Image src="/assets/img/arrow3.png" alt="arrow3" width={100}
                height={120} />
              <p> of students report a significant increase <br /> in subject confidence.</p>
            </div>

            <div className="circle mid">3X</div>
            <div className="label2">
              <Image src="/assets/img/arrow1.png" alt="arrow3" width={5}
                height={80} />
              <p> more likely to actively participate in <br />
                class discussions.  </p>
            </div>
            <div className="circle large">4.8/5</div>
            <div className="label3">
              <Image src="/assets/img/arrow2.png" alt="arrow3" width={100}
                height={120} />
              <p> average satisfaction rating from our
                <br /> parent community.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="study1 mb d-lg-none">
        <div className="conatiner">
          <h2>The Study Monks Impact: A Snapshot</h2>
          <div className="text-center">
            <div className="c1-2">
              <div className="circle">94%</div>
              <Image
                src="/assets/img/small-arrow.png"
                alt="Right arrow"
                width={16}
                height={31}
              />
              <p className="mt-2"> of students report a significant increase <br /> in subject confidence.</p>
            </div>
            <div className="c1-3">
              <div className="circle mid">3X</div>
              <Image
                src="/assets/img/small-arrow.png"
                alt="Right arrow"
                width={16}
                height={31}
              />
              <p className="mt-2"> more likely to actively participate in <br />
                class discussions.  </p>
            </div>
            <div className="c1-4">
              <div className="circle large">4.8/5</div>
              <Image
                src="/assets/img/small-arrow.png"
                alt="Right arrow"
                width={16}
                height={31}
              />
              <p className="mt-2"> average satisfaction rating from our
                <br /> parent community.</p>
            </div>
          </div>
        </div>
      </section>

      <WidthImageSection
        src="/assets/img/MONKS.webp"
        alt="Right arrow"
        className="d-none d-lg-flex"
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
      <ImageSlider />

      {/* <section className="grey mb">
        <div className="container">
          <div className="grey-box">
            <div className="text-center">
              <h2>Your Guide to the Cambridge Journey</h2>
              <p>
                The world of Education is complex and you deserve clear, unbiased answers. Our Resources Hub is your library
                of expert guides, created to empower you to make the best decisions for your child’s future with absolute
                confidence.
              </p>
            </div>
            <div className="sub-box">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="white-box">
                    <h6 className="printig">
                      The printing and typesetting <br /> industry ?
                    </h6>
                    <p>
                      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="imh-bx">
                      <Image
                        src="/assets/img/tree.webp"
                        alt="tree"
                        className="img-fluid"
                        width={500}
                        height={300}
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-2 col-12">
                  <div className="small-box">
                    <Image
                      src="/assets/img/boy.webp"
                      alt="boy"
                      className="img-fluid"
                      width={300}
                      height={400}
                      priority
                    />
                    <div className="lorem">
                      <p className="ipsum">
                        Lorem Ipsum is simply industry. Lorem Ipsum has been the industrys
                      </p>
                      <p style={{ borderBottom: "1px solid #000", display: "inline-block" }}>
                        GET STARTED
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-5 col-12">
                  <div className="fds">
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-12">
                        <div className="gfsds">
                          <h6 className="printig">
                            The printing and typesetting <br /> industry ?
                          </h6>
                          <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-7 col-12">
                        <div className="ijh">
                          <Image
                            src="/assets/img/vfd.webp"
                            alt="girl n boy"
                            className="img-fluid"
                            width={500}
                            height={350}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="work">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="wh-box">
                          <div className="d-flex align-items-center">
                            <Image
                              src="/assets/img/worksheet.png"
                              alt="worksheet"
                              className="me-2 mb-2"
                              width={50}
                              height={50}
                              priority
                            />
                            <h6 className="printig">Worksheets</h6>
                          </div>
                          <p>
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="wh-box">
                          <div className="d-flex align-items-center">
                            <Image
                              src="/assets/img/video-call 1.png"
                              alt="video-call"
                              className="me-2 mb-2"
                              width={50}
                              height={50}
                              priority
                            />
                            <h6 className="printig">Recorded Class</h6>
                          </div>
                          <p>
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}





      <section className="fad mb">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-12">
              <h2 className="text-center fres">Frequently Asked Questions</h2>
              <BottomAccordion />
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div className="faq-sdeimg">
              
                <div className="mt-2">
                  <h3 className="reacf">
                    The Cambridge Path is a Promise. We Help Your Child Fulfil It.
                  </h3>
                  <p>
                    You chose the Cambridge curriculum for its promise of a world-class
                    education. Ensuring your child thrives in it is the next bridge to
                    cross. Don&apos;t let another term go by with the same nagging
                    questions. Your 7-day complimentary trial begins with a strategic
                    conversation with our expert mentor.
                  </p>

                  <p>
                    Discover how our focused approach builds not just knowledge, but the
                    unshakable confidence to use it. Let&apos;s build their roadmap to
                    success today.
                  </p>
                  <Button
                    className="btn-books mt-3"
                    type="button"
                    variant="contained"
                    onClick={handleClickOpen}
                  >
                    Create My Child&apos;s <br />
                    Success Plan
                  </Button>
                </div>
                <div className="fq">
                  <Image
                    src="/assets/img/mummy1.png"
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

      <StickyFooter />
      <Footer />
    </>
  );
}
