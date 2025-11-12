"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Thin Left Arrow (SVG)
const ArrowLeft = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="custom-arrow custom-arrow-left"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  </div>
);

const ArrowRight = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="custom-arrow custom-arrow-right"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </div>
);

export default function TestimonialSlider() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    dot: false,
    autoplaySpeed: 4000,
    speed: 1050,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 768, // mobile breakpoint
        settings: {
          arrows: true, // 👈 mobile pe arrows show karenge
          dots: true,
        },
      },
    ],
  };

  const slides = [
    {
      heading: `"The sessions have definitely shown a great improvement in her academic performance."`,
      description: ["Hear directly from Ms. Saritha Poosa's family about the impact of Study Monks approach on their daughter's vocabulary and confidence."],
      points: [
        { title: "Learning to Applying:", text: "She doesn't just memorize vocabulary; she now uses new words with confidence and in the right context." },
        { title: "Renewed Interest:", text: " Their interactive approach transformed reading into a subject she finds genuinely interesting and engaging." },
        { title: "Proven Results:", text: "As a parent, I'm highly satisfied. We've seen a definite improvement not just in her grades, but in her confidence to express her own ideas." },
      ],
      personImg: "/assets/img/test1.png",
      playBtn: "/assets/img/play-btn.png",
      watchText: "Ditya's Story",
     
      video: "/assets/video/tetsione.mp4", // demo video
      videoWidth: 800, // 👈 width add kiya
      videoHeight: 450, // 👈 height add kiya
    },
    // {
    //   heading: `"For the first time, he wasn't just studying. He was understanding."`,
    //   description:
    //     "Hear directly from the Sharma family about the impact of the Study Monks approach on their son's confidence and focus.",
    //   points: [
    //     { title: "Reduced From Anxiety:", text: "From stressful nights to calm preparation." },
    //     { title: "+40% Conceptual Clarity:", text: "He now teaches us the concepts." },
    //     { title: "A True Partnership:", text: "We finally feel like we have an expert on our side." },
    //   ],
    //   personImg: "/assets/img/test1.png",
    //   playBtn: "/assets/img/play-btn.png",
    //   watchText: "Manoj Story",
      
    //   video: "/assets/video/tetsione.mp4", // demo video
    // },
  ];

  const handlePlayClick = (video: string) => {
    setVideoUrl(video);
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoUrl(""); // reset video
  };

  return (
    <section className="testimo mb">
      <div className="container">
        <h2>Parent&apos;s Testimonial</h2>
        <Slider {...settings}>
          {slides.map((slide, idx) => (
            <div className="parent_box" key={idx}>
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 col-12">
                  <h3 className="for">{slide.heading}</h3>
                  {Array.isArray(slide.description) ? (
                    slide.description.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))
                  ) : (
                    <p>{slide.description}</p>
                  )}

                  {slide.points.map((p, i) => (
                    <div className="d-flex tivh mb-2" key={i}>
                      <Image src="/assets/img/tick-square.png" alt="tick" width={20} height={20} className="me-2" />
                      <p className="mb-0"><b>{p.title}</b> {p.text}</p>
                    </div>
                  ))}
                </div>
                <div className="col-lg-1 d-none d-lg-block"></div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 mt-md-0">
                  <div className="texs-img position-relative">
                    <Image src={slide.personImg} alt="testimonial" width={400} height={300} className="img-fluid" />
                    <div
                      className="trdfd position-absolute"
                      style={{ cursor: "pointer" }}
                      onClick={() => handlePlayClick(slide.video)}
                    >
                      <Image src={slide.playBtn} alt="play-btn" width={50} height={50} />
                    </div>
                    <div className="test-txt position-absolute text-white">
                      <p className="mb-0 text-white"><b>{slide.watchText}</b></p>
                      <p className="text-white"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div
          className="video-popup"
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100%", height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex", justifyContent: "center", alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div style={{ position: "relative", maxWidth: "90%", maxHeight: "80%" }}>
            <video src={videoUrl} autoPlay controls style={{ width: "100%", height: "auto", maxHeight: "500px" }} />
            <button
              onClick={handleCloseVideo}
              style={{
                position: "absolute", top: "-40px", right: "0",
                background: "transparent", border: "none", color: "#fff",
                fontSize: "30px", cursor: "pointer"
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
