"use client";

import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Heading5 } from "lucide-react";
import Image from "next/image";

interface Review {
  id: number;
  heading: string;
  subheading: string;
  review: string;
  
  parent: string;
  place: string;
}

const reviews: Review[] = [
  {
    id: 1,
    heading: "Ms. Rajini Chaudhary ",
    subheading: "Stage 5",
    review:
      "“Ms. Nidhi is very systematic and structured in her teaching. Under her guidance, Vaani has grown remarkably confident. She has helped Vaani develop a genuine interest in Mathematics —Vaani now enjoys the subject and puts in effort to understand and apply concepts with ease.” ",
   
    parent: "Parent of Vaani Chaudhary",
    place: "Pune ",
  },
  {
    id: 2,
    heading: "Ms. Madhuri D ",
    subheading: "Stage 6 ",
    review:
      "“Karthikeya’s mentor is an amazing teacher who brings passion and dedication to her students’ success. My child is not only excelling academically but also growing into a more confident and responsible person. His love for Science has flourished under Sujatha Ma’am’s guidance.” ",
   
    parent: "Parent of Karthikeya D",
    place: " Hyderabad ",
  },
  {
    id: 3,
    heading: "Ananya Sharma’s Parent",
    subheading: "Stage 8 ",
    review:
      "“I really appreciate the teaching skills of Ms. Nivedita Ma’am. Thank you for your great support, guidance, making complex topics easy to understand and your approach in understanding my son’s pros n cons and changing your teaching methods which had a great impact on him. I wish and let this continue in the long run for his successful future.” ",
   
    parent: "Parent of Sriyansh Kalva",
    place: "Hyderabad ",
  },
  {
    id: 4,
    heading: "Ms. Poonam Garg",
    subheading: "Stage 6 ",
    review:
      "“Shruthi Ma’am’s Science classes are engaging and inspiring. Her deep knowledge, combined with her patient and clear teaching style, makes even the most complex topics easy to understand. Under her guidance, students not only learn thoroughly but also develop a genuine interest in Science” ",
   
    parent: "Parent of Pranav Garg",
    place: "Hyderabad ",
  },
   {
    id: 5,
    heading: "Ms. Manasa Kalva",
    subheading: "Stage 8  ",
    review:
      "“Thank you for creating such a positive and supportive environment where my child feels confident to ask questions without hesitation. This has greatly boosted their curiosity and willingness to learn, making the classroom a place they truly enjoy.”",
   
    parent: "Parent of Ved Kalva",
    place: "Hyderabad",
  },
];

export default function ReviewSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Parent’s Testimonials</h2>

      <Splide
        options={{
          perPage: 3,
          gap: "1rem",
          pagination: true,
          arrows: false,
          breakpoints: {
            768: { perPage: 1 },
          },
        }}
        aria-label="Parent Reviews"
      >
        {reviews.map((review, index) => {
          const isActive = activeIndex === index;

          return (
            <SplideSlide key={review.id}>
              <div
                className="p-3 text-center"
                onMouseEnter={() => handleMouseEnter(index)}
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  // backgroundColor: isActive ? "#E4EF8C" : "#f8f9fa",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
              >
                 <div>
                  <Image
                    src="/assets/img/right-comma.png"
                    alt="Decorative"
                    width={270}
                    height={40}
                    className="mb-3"
                  />
                </div>
                <h5
                  className="fw-bold mb-1"
                  style={{ color: "#001F3F" }} // always #001F3F
                >
                  {review.heading}
                </h5>

                <h6 className="mb-2">{review.subheading}</h6>

                {/* HR visible in both active & inactive */}
               

                <p className="mb-2">{review.review}</p>
                
                <h6 className="mb-1"><b>{review.parent}</b></h6>
                <p>{review.place}</p>
                <div>
                  <Image
                    src="/assets/img/left-comma.png"
                    alt="Decorative"
                    width={270}
                    height={40}
                  />
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <style jsx global>{`
        .splide__pagination {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          gap: 5px;
         
        }
.splide__pagination {
    bottom: -0.5em;
    }
        .splide__pagination__page {
          width: 15px;
          height: 2px;
          background: #d1d5db;
          transition: all 0.3s ease;
        }

        .splide__pagination__page.is-active {
          background: #001f3f;
          transform: scale(1.3);
           width: 20px;
          height: 2px;
        }
      `}</style>
    </div>
  );
}
