"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./MobSlider.css"; // Your custom styles

const MobSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Assess & Strategize",
      content:
        "We begin with a Diagnostic Assessment & Strategic Blueprint to understand your child's unique needs, then co-create a personalized learning plan.",
    },
    {
      id: 2,
      title: "Engage & Build Concepts",
      content:
        "Live, interactive 1:8 Micro Classes to focus on deep conceptual understanding using curated resources to enable concept clarity and critical thinking.",
    },
    {
      id: 3,
      title: "Practice & Master",
      content:
        "Targeted assignments and continuous feedback by Mentors, reinforcing Application, Mastery & Exam Readiness for Cambridge Assessments.",
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        loop={true}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <div className="slide-text">
                <h3>{slide.title}</h3>
                <p>{slide.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobSlider;
