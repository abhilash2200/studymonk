"use client";

import Image from "next/image";

export default function MobileBlueprintSection() {
  return (
    <div className="d-block d-md-none"> 
      {/* Only show on mobile */}
      <div className="my-4">
        
        {/* Card 1 */}
        <div className="customs-card mb-4">
          <div className="card-header-customs d-flex align-items-center">
            <Image
              src="/assets/img/Group3467.png"
              alt="Guardian"
              width={40}
              height={40}
              className="me-2"
            />
            <h6 className="mb-0 text-white">The Personalised Blueprint</h6>
          </div>
          <div className="card-body-customs">
            <p>
              Our initial session is a deep dive into your child&apos;s unique
              strengths and learning style. We don&apos;t just test what they
              know; we seek to understand how they think allowing us to create a
              &apos;Personalised Blueprint&apos; that maps their potential and
              outlines a clear, inspiring path to achieving it.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="customs-card mb-4">
          <div className="card-header-customs d-flex align-items-center">
            <Image
              src="/assets/img/Group3467.png"
              alt="Guardian"
              width={40}
              height={40}
              className="me-2"
            />
            <h6 className="mb-0 text-white">The Collaborative Discovery</h6>
          </div>
          <div className="card-body-customs">
            <p>
              This is where the magic happens. Our sessions are not lectures;
              they are dynamic Socratic dialogues. Wise Guardians are expert
              facilitators who guide the micro-class through a process of
              collaborative discovery. They use strategic questioning to spark
              debate, encourage different viewpoints, and help the group arrive
              at a deeper understanding.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="customs-card mb-4">
          <div className="card-header-customs d-flex align-items-center">
            <Image
              src="/assets/img/Group3467.png"
              alt="Guardian"
              width={40}
              height={40}
              className="me-2"
            />
            <h6 className="mb-0 text-white">Mastery & Articulation</h6>
          </div>
          <div className="card-body-customs">
            <p>
              True mastery isn&apos;t just knowing the answer; it&apos;s being
              able to apply and communicate it with confidence. We challenge each
              cohort with complex, IGCSE-style problems that require them to
              synthesise their knowledge and present a unified solution. This is
              where they learn the invaluable skills of teamwork, leadership, and
              persuasive communication.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
