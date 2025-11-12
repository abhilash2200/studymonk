"use client";

import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Accordion, Dropdown } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ChevronDown } from "lucide-react";
interface FAQ {
    question: string;
    answer: string;
}

interface TabData {
    key: string;
    title: string;
    desc: string;
    subtitle: string;
    faqs: FAQ[];
}

export default function LearningExperience() {


    const tabs: TabData[] = [
        {
            key: "philosophy",
            title: "Our Philosophy",
            subtitle: "The Study Monks Philosophy: Our Approach to Education",
            desc: "This section delves into the core principles that define Study Monks. It explains our educational philosophy, our specialized focus, and what truly sets us apart from other learning platforms.",
            faqs: [
                {
                    question: 'What is "Mindful Mastery" and how does it benefit my child more than traditional online tutoring?',
                    answer: `
        <p>"Mindful Mastery" is the core of our educational philosophy, representing a fundamental shift away from the high-pressure "race for grades" that often causes student anxiety and burnout. Traditional tutoring frequently focuses on rote memorization and short-term exam preparation. In contrast, Mindful Mastery is the art of building deep, lasting conceptual understanding in a calm, focused, and supportive environment.</p>
        <p>For your child, this approach has several profound benefits:</p>
        <ul>
          <li><b>Reduces Anxiety, Builds Confidence: </b> By focusing on why concepts work rather than just how to answer a test question, we eliminate the anxiety that comes from a fragile, surface-level knowledge. This deep understanding is the greatest antidote to exam fear. It cultivates a genuine, unshakable confidence that extends beyond the classroom. In fact, 94% of our students report a significant increase in subject confidence.</li>
          <li><b>Fosters Lifelong Learning: </b> Mindful Mastery encourages "Guided Curiosity," one of our four key pillars. We teach students to ask "Why?" and "How?", transforming them from passive recipients of information into active, engaged learners. This inquisitiveness is a critical skill for success in the 21st century.</li>
          <li><b>Ensures True Retention: </b> Rote learning is fleeting. When a child truly understands a concept, it becomes a permanent part of their intellectual toolkit. Our methods ensure that knowledge is not just memorized for a test but is mastered for life.</li>
        </ul>
        <p>Ultimately, while improved grades are a natural outcome of our approach, they are not the primary goal. The true goal is to build a resilient, confident, and curious mind, equipped to thrive in any future academic or professional endeavour.</p>
      `,
                },
                {
                    question: "Why does Study Monks only teach the Cambridge Primary and Lower Secondary curriculum?",
                    answer: `
        <p>Our exclusive focus on Cambridge Primary (Stages 4-6, ages 8-11) and Cambridge Lower Secondary (Stages 7-9, ages 11-14) is a deliberate and strategic choice, not a limitation. While many platforms offer a wide array of subjects and levels, from primary to university prep, this often leads to a diluted, "one-size-fits-all" approach. We believe in specialized expertise.</p>
        <p>These foundational years are the most critical in a child's entire educational journey. It is during this period that their core attitudes towards learning are formed. They can either develop a passion for inquiry and discovery or learn to view education as a chore. Our specialization allows us to:</p>
        <ul>
          <li><b>Master the Curriculum: </b> Our mentors possess an unparalleled depth of knowledge in the Cambridge curriculum for these specific stages. They understand the pedagogical nuances, the common challenges students face, and the precise building blocks needed for future success in IGCSE and A-Level studies.</li>
          <li><b>Tailor Our Pedagogy: </b> The teaching methods required for a 9-year-old are vastly different from those for a 16-year-old. Our specialization enables us to perfect our "Mindful Mastery" approach for this specific age group, creating engaging, interactive, and age-appropriate learning experiences that spark curiosity in younger learners and develop critical thinking in early adolescents.</li>
          <li><b>Maximize Impact: </b> By concentrating our efforts on these foundational stages, we can have the greatest possible impact on a student's long-term academic trajectory. We build the strong, solid foundation of conceptual understanding and confidence that makes future learning easier and more enjoyable.</li>
        </ul>
        <p>Our commitment is to be the absolute best in this crucial niche, providing a level of focused expertise that broader platforms cannot match.</p>
      `,
                },
                 {
                    question: "What is your educational mission beyond improving grades in the Cambridge curriculum?",
                    answer: `
        <p>Our core mission is to prepare your child for life, not just for exams. While academic excellence within the Cambridge Pathway is a key objective, we see it as a byproduct of a much deeper educational process. Our mission is encapsulated in our "Beyond the Textbook" approach, which is designed to equip students with the essential, future-ready skills they will need to navigate an increasingly complex world.</p>
        <p>This means we actively cultivate:</p>
        <ul>
          <li><b>Critical Thinking and Problem-Solving:</b> We move beyond simple right-or-wrong answers. Our mentors challenge students to analyze information, evaluate evidence, and approach problems from multiple angles. This is the essence of our "Guided Curiosity" pillar.</li>
          <li><b>Effective Communication: </b> In our interactive "Micro Classes," students are encouraged to articulate their thoughts, ask insightful questions, and engage in respectful dialogue with their peers and mentor. This develops the "Expressive Confidence" needed to share ideas clearly and persuasively.</li>
          <li><b>Resilience and a Growth Mindset:</b> The "Mindful Mastery" philosophy teaches students to view challenges not as threats, but as opportunities for growth. By building understanding step-by-step in a supportive environment, we help them develop the resilience to persevere through difficult problems without fear of failure.</li>
        </ul>
        <p>In essence, our mission is to nurture well-rounded individuals who are not only academically proficient but are also confident communicators, creative problem-solvers, and curious lifelong learners. These are the skills that will truly define their success long after their school years are over.</p>
      `,
                },
                {
                    question: 'Is Study Monks affiliated with other "Study Monk" services for coding or CPA prep?',
                    answer: `
        <p>No, we are not. Study Monks is an independent organization with a singular and exclusive focus: providing expert, specialized mentoring for students in the Cambridge Assessment International Education (CAIE) curriculum.</p>
        <p>We are aware that there are other unaffiliated services that use a similar name for entirely different fields, such as coding bootcamps or CPA exam preparation. These organizations have no connection to our company, our mentors, or our educational philosophy.</p>

        <p>Our specialization is our strength. By dedicating 100% of our resources, curriculum development, and mentor training to the Cambridge Pathway for Primary and Lower Secondary students, we ensure a level of expertise and quality that is undiluted and unparalleled in our field. When you choose Study Monks, you are choosing a true specialist committed to your child's success within this specific, globally recognized curriculum.</p>
      `,
                },
                {
                    question: 'Where is Study Monks based and how do you support international students online?',
                    answer: `
        <p>Our main administrative office is located at Kanakapura Road, Bengaluru, India. However, our services are delivered through a state-of-the-art online platform, making our programs accessible to students all around the world.</p>
        <p>For international students and their parents, our global model means:</p>
          <ul>
          <li><b>Geographic Independence:</b> Your child can access our expert Cambridge curriculum mentoring from the comfort and safety of your home, no matter where you live. This is a significant advantage for families who may move internationally or live in areas where high-quality Cambridge-specific support is not locally available.</li>
          <li><b>Flexible Scheduling: </b> We understand the complexities of different time zones. Our academic counselors work closely with families to find class schedules that are convenient and fit into your child's routine.</li>

        </ul>
        <p>Our base in Bengaluru is an operational hub, but our classroom is global. We are fully equipped and experienced in providing a seamless, high-quality educational experience to families across different continents and time zones.</p>

      `,
                },
            ],
        },
        {
            key: "experience",
            title: "The Learning Experience",
            subtitle: "The Learning Experience: How It Works Day-to-Day",
            desc: "This section provides a transparent, detailed look at your child's journey with Study Monks, from the initial assessment to daily classroom interactions and progress tracking.",
            faqs: [
               {
                    question: 'What is the structure of a typical 40-minute online "Micro Class"?',
                    answer: `
        <p>Each 40-minute "Micro Class" is a dynamic and interactive session designed for deep learning, not passive listening. Our classes follow a natural, engaging rhythm that moves students through a cycle of understanding and application.</p>
        <p>The session begins with a warm, personal check-in to create a supportive and focused learning environment. From there, the mentor introduces the core concept of the day using engaging tools and curated resources, sparking curiosity and encouraging active discussion.   </p>
        <p>Once the foundation is laid, students apply their new knowledge, often working together in small groups to solve problems and learn from one another. The class concludes with a period of individual practice, which allows the mentor to provide real-time, personalized feedback to reinforce concepts and build each student's confidence and mastery. This proven structure ensures every class is a productive and empowering learning experience.   </p>
        <p>This structure ensures that every minute is productive, moving students through a powerful cycle of learning, applying, collaborating, and mastering.</p>
        `,
                },
                {
                    question: "How much individual attention does a child get in an 8-student online class?",
                    answer: `
        <p>This is a critical question, and the answer lies at the heart of our educational model. In our "Micro Classes," the 1:8 mentor-to-student ratio is intentionally designed to provide the optimal balance of personalized attention and collaborative learning.</p>
        <p>Your child will receive a significant amount of individual attention, far more than is possible in a traditional school classroom of 25-30 students. Here’s how:</p>
        <ul>
          <li><b>High Visibility:</b> In a group of eight, there is nowhere for a student to hide or get lost. The mentor can easily observe every child's engagement, see their work on the interactive whiteboard, and notice subtle cues like a look of confusion or a moment of insight.</li>
          <li><b>Frequent Interaction: </b> The mentor is not just lecturing; they are facilitating a conversation. They are trained to actively call on each student, ask targeted questions to check for understanding, and provide immediate, specific feedback multiple times throughout the 40-minute session.</li>
          <li><b>Increased Participation: </b> The small, psychologically safe environment of a Micro Class makes students feel more comfortable speaking up, asking questions, and sharing their ideas. It is our experience that students in this setting are three times more likely to actively participate in discussions compared to larger group settings.</li>

          </ul>
          <p>While 1-on-1 tutoring offers complete individual focus, it lacks the vital element of peer learning. Our Micro Class model is pedagogically superior because it combines deep personalization with the development of social and communication skills that come from guided interaction. It is the sweet spot where your child gets the individual support they need while also learning how to collaborate and communicate effectively with others.
          </p>

          <div class="table-responsive">
      <table class="table table-bordered table-lg align-middle">
        <thead class="table-primary text-center">
          <tr>
            <th>Feature</th>
            <th>Study Monks Micro Classes</th>
            <th>Traditional Large Group Tutoring</th>
            <th>1-on-1 Private Tutoring</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Class Size</b></td>
           <td>Max 8 Students (Optimal Balance)</td>
            <td>10-30+ Students</td>
            <td>1 Student</td>
          </tr>
          <tr>
            <td><b>Personalization</b></td>
            <td>High (Personalized plan, adaptive in-class pacing)</td>
            <td>Low (Standardized, one-size-fits-all curriculum)</td>
            <td>Very High (Fully customized to one child)</td>
          </tr>
          <tr>
            <td><b>Peer Interaction</b></td>
            <td><b>Key Feature:</b> Guided & supportive</td>
            <td>Limited, often competitive or passive</td>
            <td>None</td>
          </tr>
          <tr>
            <td><b>Cost-Effectiveness</b></td>
            <td>Excellent balance of cost and personalization</td>
            <td>High (Lower cost, but lower effectiveness)	</td>
            <td>Low (Highest cost per hour)</td>
          </tr>
           <tr>
            <td><b>Skill Development</b></td>
            <td>Academic Mastery, Communication, and Collaboration</td>
            <td>Primarily Academic Rote Learning</td>
            <td>Primarily Academic Mastery</td>
          </tr>
        </tbody>
      </table>
    </div>

      `,
                },
                {
                    question: 'What is the "Assess & Strategize" phase and what will the diagnostic report tell me?',
                    answer: `
        <p>The "Assess & Strategize" phase is the crucial first step in your child's journey with Study Monks and the foundation of their personalized learning plan. It is far more than a simple placement test. This phase involves a comprehensive "Diagnostic Assessment & Strategic Blueprint" designed to give us—and you—a deep and nuanced understanding of your child's academic standing.</p>
        <p>The assessment itself is designed to evaluate:</p>
        <ul>
          <li><b>Conceptual Gaps: </b> It goes beyond what your child knows to uncover why they might be struggling. For example, it can pinpoint whether a difficulty with fractions stems from a misunderstanding of division or a weak grasp of number lines.</li>
          <li><b>Strengths and Proficiencies: </b> We identify the areas where your child excels, which helps build their confidence and allows us to tailor challenges that keep them engaged.</li>
          <li><b>Learning Style and Approach: </b> We observe how your child approaches problems, which gives our mentors valuable insight into their preferred learning style (e.g., visual, logical, etc.).</li>

          </ul>
          <p>Following the assessment, you will receive a detailed Strategic Blueprint. This report is a clear, actionable roadmap that outlines:
          </p>
          <ul>
          <li>A summary of your child's key strengths and areas for development.</li>
          <li>A list of the specific Cambridge curriculum objectives that will be prioritized.</li>
          <li>The recommended learning path and goals for the upcoming term.</li>
          <li>Insights for the mentor to create a truly personalized teaching strategy.</li>
          </ul>
          <p>This initial phase ensures that we don't waste a single moment of your child's time. From the very first class, their learning is targeted, efficient, and precisely tailored to their unique needs.</p>

      `,
                },
                {
                    question: "How do you report on a child's progress in your online tutoring programs?",
                    answer: `
        <p>Progress tracking at Study Monks is a continuous, holistic process that aligns with our "Mindful Mastery" philosophy. While assignment scores and performance on Cambridge Progression and Checkpoint prep are tracked, they are only one part of a much bigger picture. We believe that true progress is also measured by growth in confidence, curiosity, and critical thinking.</p>
        <p>Our reporting model is built on a partnership with parents and includes:</p>
        <ul>
          <li><b>Continuous Qualitative Feedback:</b> This is the most important element. Our mentors are trained to assess deep conceptual understanding, not just the ability to get the right answer. After classes, they make notes on each student's participation, the quality of their questions, their ability to explain their reasoning, and their confidence in tackling new challenges.</li>
          <li><b>Regular Parent Updates:</b> You will receive regular, detailed progress reports from your child's mentor and academic counselor. These updates go beyond numbers and provide a narrative of your child's journey. </li>
          <li><b>Performance on Targeted Assignments:</b> The "Practice & Master" phase of our learning cycle includes targeted assignments designed to reinforce and apply concepts learned in class. We track performance on these tasks to ensure mastery and identify any areas that need further review.</li>
          <li><b>Milestone Assessments:</b>We use Cambridge-aligned assessments at key intervals to formally benchmark progress against the curriculum standards, ensuring your child is on track and fully prepared for official Cambridge Checkpoint assessments.</li>
          </ul>
          <p>This multi-faceted approach ensures you have a clear, consistent, and comprehensive view of your child's development—academically, intellectually, and personally.
          </p>

      `,
                },
                {
                    question: "What happens if my child misses an online class? Are recorded sessions effective for learning?",
                    answer: `
        <p>We understand that family schedules can be unpredictable, and occasional absences are unavoidable. To ensure that learning remains continuous and flexible, all of our live Micro Classes are recorded and made available to students on our platform.</p>
       <p>However, we recognize the valid concern that passive viewing of a recording is not the same as active participation. A recording alone is often not enough. That's why our process includes a crucial human element to ensure its effectiveness:</p>
        <ul>
          <li><b>Mentor Follow-up:</b> Our mentors are notified when a student misses a session. They make it a point to connect with the student during the next class to ensure they have watched the recording, to answer any questions they may have, and to briefly review the key concepts. This personal touch makes a significant difference in comprehension and accountability.</li>
          <li><b>Active Viewing Encouraged:</b> We encourage students to treat the recording as an interactive session, pausing to work through problems and taking notes as if they were live in the classroom.</li>
          <li><b>Seamless Catch-up:</b> : Because our curriculum is scaffolded, with each lesson building on the last, the combination of the recording and the mentor follow-up ensures that your child can rejoin the next live class feeling confident and fully up to speed, preventing them from falling behind.</li>

          </ul>
          <p>While nothing can fully replace the dynamic of a live class, our system of recorded sessions supported by proactive mentor engagement is the most effective way to ensure that a missed class does not become a gap in your child's learning.
          </p>

      `,
                },
                 {
                    question: "How is homework assigned in your Cambridge online courses and what is the workload?",
                    answer: `
        <p>Homework at Study Monks is purposeful and designed to reinforce, not overwhelm. We refer to it as "targeted assignments" as part of our "Practice & Master" learning stage. Our philosophy is strictly against "busy work." Every assignment has a clear objective directly linked to the concepts covered in the preceding Micro Class.</p>
        <p>Here’s what you can expect:</p>
        <ul>
          <li><b>Purpose:</b> The goal of each assignment is to solidify your child's understanding and give them a chance to apply new skills independently. This practice is essential for moving a concept from short-term memory to long-term mastery.</li>
          <li><b>Manageable Workload:</b> We are highly conscious that our students are also managing their regular schoolwork. Assignments are designed to be concise and focused, typically requiring no more than 30-45 minutes to complete per subject per week. The goal is quality of practice, not quantity of problems.</li>
          <li><b>Feedback Loop:</b> Assignments are not just graded; they are a vital tool for feedback. Mentors review the work to identify any lingering misconceptions and use these insights to tailor the start of the next lesson or provide individual support. This creates a continuous cycle of learning, practice, and refinement.</li>
          </ul>

          <p>Our approach ensures that homework is a meaningful and efficient part of the learning process, helping to build mastery and exam readiness without adding undue stress to your child's schedule.</p>


      `,
                },
                {
                    question: "Can I enroll my child in a single subject like Maths or Science, or is a package required?",
                    answer: `
        <p>We offer the flexibility for parents to enroll their child in our core subjects—English, Mathematics, and Science—individually, based on their specific needs. If your child requires targeted support in only one area, you are welcome to enroll them in just that subject.</p>
        <p>However, we highly recommend that students enroll in all three subjects for a more holistic and enriching educational experience. The Cambridge curriculum is designed to be interconnected, and skills learned in one subject often reinforce and enhance understanding in others. For example, strong analytical reading skills developed in English are invaluable for understanding complex word problems in Maths and interpreting data in Science.</p>
        <p>By enrolling in the complete package, your child benefits from:</p>
        <ul>
          <li><b>A Cohesive Learning Experience: </b> Our mentors for all three subjects can collaborate on your child's overall progress, ensuring a consistent approach to building critical thinking and study skills.</li>
          <li><b>Interdisciplinary Reinforcement:</b> Concepts are strengthened when they are seen and applied in different contexts, leading to deeper and more durable learning.</li>
          <li><b>Greater Scheduling Flexibility: </b> Enrolling in the full suite of subjects often provides more options for scheduling and may unlock certain benefits in our pricing structure.</li>

          </ul>
         <p>Our academic counsellors can discuss your child's specific situation during your free consultation to help you determine the best path forward, whether it's a single subject focus or the comprehensive three-subject program.</p>

      `,
                },

            ],
        },
        {
            key: "mentors",
            title: "Our Mentors",
            subtitle: "Our Mentors: The Heart of Our Promise",
            desc: "The quality of an education is determined by the quality of the educator. This section provides a transparent look into who our mentors are, the high standards they must meet, and how they are trained to deliver on the Study Monks promise of 'Mindful Mastery'",
            faqs: [
                {
                    question: "What are the qualifications for your Cambridge curriculum tutors?",
                    answer: `
        <p>Our mentors are expert educators with a deep passion for their subjects and a genuine gift for nurturing young minds. To meet our baseline requirements, every mentor must possess a strong academic background, typically including advanced degrees in their field of expertise (e.g., English, Mathematics, or the Sciences), and extensive teaching experience. We also seek out mentors who have valuable real-world experience and a passion for sharing their knowledge.</p>
        <p>However, formal qualifications are only the starting point. What truly defines a Study Monks mentor goes far beyond a resume. We select individuals based on a combination of qualities:</p>
        <ul>
          <li><b>Deep Cambridge Curriculum Expertise: </b> They have a profound, practical understanding of the Cambridge Primary and Lower Secondary curriculum, including its specific learning objectives, assessment styles, and pedagogical philosophy.</li>
          <li><b>Exceptional Communication Skills: </b> They are masters of clarity, able to break down complex topics into simple, understandable concepts for young learners.</li>
          <li><b>High Emotional Intelligence:</b> They are empathetic, patient, and skilled at creating a psychologically safe and encouraging classroom environment where every child feels seen, heard, and valued.</li>
         <li><b>Philosophical Alignment:</b> They are not just employees; they are believers in and practitioners of our "Mindful Mastery" philosophy. They are committed to building confidence and curiosity, not just teaching to a test.</li>
          </ul>

        <p>This holistic set of criteria ensures that your child is learning from a true professional who is not only a subject matter expert but also a gifted and inspiring guide.</p>


      `,
                },
                {
                    question: "What is the selection process for your online tutors?",
                    answer: `
        <p>The statement that fewer than one in five applicants become a Study Monks mentor is a fact we are proud of, as it reflects our uncompromising commitment to quality. Our multi-stage selection process is designed to filter for excellence in every dimension of teaching. Here is a detailed breakdown of the process:</p>

        <ul>
          <li><b>Stage 1: Initial Screening & Credentials Verification:</b> We begin by reviewing applications for the necessary academic qualifications and teaching experience or real-world experience. This initial screen filters out a significant number of applicants who do not meet our high baseline standards.</li>
          <li><b>Stage 2: Subject Matter Proficiency Examination:</b> Candidates who pass the initial screening undertake a rigorous assessment designed to test the depth and breadth of their subject matter knowledge, specifically as it pertains to the nuances of the Cambridge curriculum.</li>
          <li><b>Stage 3: Live Mock Teaching Session:</b>This is the most critical stage. Candidates must prepare and deliver a live, online lesson to a panel of our senior academic staff who role-play as students. They are evaluated not just on their accuracy and clarity, but on their ability to:</li>
            <ul>
                <li>Engage every "student" in the class.</li>
                <li>Adapt their teaching style in real-time.</li>
                <li>Manage the virtual classroom effectively.</li>
                <li>Demonstrate patience, empathy, and encouragement.</li>
                <li>Foster a positive and interactive learning environment.</li>

            </ul>
         <li><b>Stage 4: Philosophical Alignment Interview: </b> The final stage is a deep-dive interview with our leadership team. This conversation assesses the candidate's personal educational philosophy and their alignment with our core values of "Mindful Mastery," "Guided Curiosity," "Digital Serenity," and "Expressive Confidence". We are looking for educators who are intrinsically motivated to develop the whole child, not just their academic scores.</li>
          </ul>
         <p>Only those rare individuals who excel at every single stage are invited to join the Study Monks team. This ensures that when your child enters our classroom, they are being guided by one of the very best.</p>

      `,
                },
                 {
                    question: "Are your online tutors certified Cambridge educators?",
                    answer: `
        <p>This is an excellent question that gets to the heart of what defines a truly great teacher. Some of our mentors do hold official Cambridge teaching certifications or have extensive experience teaching in Cambridge-affiliated schools. For those who are not, we ensure they meet our stringent quality standards through other qualifications. We specifically recruit educators with deep subject matter expertise and a passion for teaching. We also believe in recruiting ones with real world industry experience.</p>
        <p>Our primary hiring criterion is a holistic standard of excellence that we believe and goes beyond any single certification. We have found that the best educators possess a combination of deep subject mastery, a natural gift for connecting with and inspiring children, and a genuine belief in our student-centered philosophy. This unique blend of qualities is what we screen for in our rigorous <20% acceptance rate process.</p>
        <p>Therefore, while a Cambridge certification is a valuable credential that some of our mentors have, we consider it one important data point among many. Our ultimate standard is effectiveness in the classroom and the demonstrated ability to embody our "Mindful Mastery" approach. We prioritize finding educators who can not only teach the Cambridge curriculum but can also ignite a lifelong love of learning in your child.</p>
      `,
                },
                 {
                    question: "How do you train tutors in the 'Mindful Mastery' teaching philosophy?",
                    answer: `
        <p>Becoming a Study Monks mentor is not just a job; it is an induction into a specific and powerful educational philosophy. Our comprehensive onboarding and continuous professional development program ensure that every mentor consistently delivers on our brand promise.</p>
        <p>The training process includes:</p>
        <ul>
          <li><b>Initial Onboarding Immersion:</b> Before teaching their first class, all new mentors undergo an intensive training program focused on the four pillars of our philosophy. They learn the practical techniques for implementing "Mindful Mastery" in a virtual setting, such as how to foster "Guided Curiosity" through Socratic questioning, how to create "Digital Serenity" by managing the online environment for calm focus, and how to build "Expressive Confidence" by encouraging every student's voice.</li>
          <li><b>Platform & Technology Training: </b> Mentors are trained to become experts on our interactive online platform, learning how to leverage all its tools—from digital whiteboards to breakout rooms—to create dynamic and engaging lessons.</li>
          <li><b>Peer Mentorship and Observation: </b> New mentors are paired with seasoned veterans. They observe live classes, co-teach sessions, and receive constructive feedback in a supportive, collaborative environment.</li>
          <li><b>Continuous Professional Development: </b> Our commitment to excellence is ongoing. All mentors participate in regular workshops and training sessions on topics such as the latest developments in the Cambridge curriculum, new digital teaching tools, and advanced strategies for supporting diverse learning needs, including students who may be shy or have learning difficulties.</li>
          </ul>
          <p>This robust training system ensures that the quality of teaching at Study Monks is not dependent on an individual's innate talent alone, but is a consistent, replicable, and constantly improving standard of excellence across our entire team.</p>

      `,
                },
                 {
                    question: "Can I request a different online tutor if the match isn't right for my child?",
                    answer: `
        <p>Yes, absolutely. We understand that the relationship and rapport between a student and their mentor is a critical component of the learning process. While we take great care in matching students with mentors we believe will be a wonderful fit, we recognize that sometimes a different personality or teaching style might work even better for your child.</p>
        <p>Our commitment to a personalized, student-centered experience means that your satisfaction and your child's comfort are our top priorities. If for any reason you feel the match is not ideal, we have a simple and supportive process in place:</p>
        <ul>
          <li><b>Contact Your Academic Counselor:</b> Your first step is to have an open conversation with your dedicated Academic Counselor. They will listen carefully to your feedback and your child's experience to understand what is and isn't working.</li>
          <li><b>Collaborative Solution:</b> Based on your conversation, your counselor will work with you to find a solution. This often involves working closely with the student and mentors for a reasonable period of time to resolve the gaps if any. If the same does not yield results transferring the student to another batch either currently conducted or to an upcoming batch to match your child's learning preferences.</li>
          <li><b>Seamless Transition: </b> We will handle all the logistics to ensure a smooth and positive transition for your child with minimal disruption to their learning schedule.</li>
        </ul>
        <p>We encourage open communication and view this as a vital part of our partnership with you. Our goal is to ensure your child not only learns but thrives, and we are committed to finding the perfect mentor to make that happen.</p>

      `,
                },
            ],
        },
        {
            key: "Growth & Well-being",
            title: "Growth & Well-being",
            subtitle: "Your Child's Growth & Well-being: Addressing Key Parental Concerns",
            desc: "We recognize that in today's digital age, a parent's concerns extend far beyond academics. This section directly addresses key questions about screen time, online engagement, social-emotional development, and safety. We validate these concerns and explain how our model is intentionally designed to create a healthy, safe, and positive online learning experience.",
            faqs: [
                 {
                    question: "How does Study Monks address concerns about screen time and digital fatigue from online learning?",
                    answer: `
        <p>This is one of the most important and valid concerns for parents today, and we have designed our entire learning experience with this in mind. It is crucial to distinguish between different types of screen time. Research consistently shows a distinction between passive, recreational screen use (like watching videos or playing games) and active, engaged, and interactive learning time.</p>
        <p>Our "Micro Classes" fall firmly into the latter category. Here’s how we mitigate digital fatigue and promote digital health:</p>
        <ul>
          <li><b>Active vs. Passive Engagement: </b> A Study Monks class is not a passive video lecture. Students are required to think critically, speak, collaborate with peers in breakout rooms, and interact with the mentor and materials on a digital whiteboard. This active cognitive engagement is fundamentally different from the mental state of passively consuming content.</li>
          <li><b>The "Digital Serenity" Pillar:</b> This is a core tenet of our philosophy. Our mentors are trained to create a calm, focused, and organized online classroom. There are no distracting pop-ups, advertisements, or chaotic elements. The environment is intentionally serene to allow for deep concentration without the overstimulation that causes digital burnout.</li>
          <li><b>Structured and Finite Sessions:</b> Our classes are a structured 40 minutes. They have a clear beginning, middle, and end. This is unlike the endless, unstructured scrolling that characterizes much of recreational screen time. The defined duration helps children manage their energy and focus.</li>
          <li><b>Emphasis on Off-Screen Application:</b> We encourage the application of learned concepts in the real world, connecting the digital classroom to tangible, off-screen activities and thought processes.</li>
        </ul>
        <p>We see our platform not as "more screen time," but as a dedicated "Focus Chamber" where technology is used as a tool for mindful, productive, and healthy intellectual engagement.</p>

      `,
                },
               {
                    question: "What strategies do you use to keep young children (ages 8-11) engaged in a virtual classroom?",
                    answer: `
        <p>Keeping a young child engaged online requires a deliberate and dynamic teaching strategy, which is why our model is so different from the emergency remote learning many families experienced. Our mentors are equipped with a toolkit of techniques to ensure students remain focused and participative:</p>

        <ul>
          <li><b>High Levels of Interactivity:</b> We keep lessons short and varied. A mentor might use a quick poll to gauge understanding, switch to the interactive whiteboard for a collaborative problem, and then use a breakout room for a paired activity—all within a single session. This variety prevents monotony and caters to the shorter attention spans of younger learners.</li>
          <li><b>The Power of the 1:8 Ratio:</b> In a small group, there is a high degree of individual accountability. The mentor frequently uses students' names, asks them direct questions, and provides immediate verbal praise and feedback. This personalization makes it much harder for a child to tune out than in a large, anonymous group.</li>
          <li><b>Making Learning Visible:</b> : We use tools that allow students to show their work and thinking in real time. This active demonstration of learning is far more engaging than simply listening. It also provides the mentor with a constant stream of information about each student's level of comprehension, allowing them to adjust the lesson's pace instantly.</li>
          <li><b>Building a Community:</b> From the very first session, mentors work to build a sense of community in the class. Simple icebreakers and collaborative tasks help students feel connected to their peers, making them more invested in the group and more likely to participate.</li>
          </ul>
          <p>These strategies transform the virtual classroom from a passive viewing experience into an active, collaborative learning space where every child is a visible and valued participant.</p>


      `,
                },
                 {
                    question: "How do you support shy or hesitant children in your online classes?",
                    answer: `
        <p>This is precisely the kind of student our "Mindful Mastery" approach and Micro Class structure are designed to empower. We understand that for a shy child, a large, bustling classroom can be intimidating. Our environment is intentionally crafted to be a psychologically safer and more nurturing space for them to find their voice.</p>
        <p>Here is our multi-layered approach to supporting a hesitant child:</p>
        <ul>
          <li><b>A Safe and Non-Judgmental Space:</b> The small group size of only 8 students immediately reduces the feeling of being "on stage." Mentors establish clear rules of respectful communication and create a culture where mistakes are viewed as learning opportunities, removing the fear of "saying the wrong thing."</li>
          <li><b>Gentle and Gradual Encouragement:</b>: Our mentors are trained to gently invite participation without putting a child on the spot. They might start by asking for a non-verbal response (like a thumbs-up emoji), then move to asking for a one-word answer in the chat box, and gradually build up to verbal contributions as the child's comfort level grows.</li>
          <li><b>Building Confidence Through Competence:</b> The core of our philosophy is that confidence is a natural byproduct of genuine understanding. As your child begins to deeply master the concepts through our personalized approach, their confidence will grow organically, and with it, their willingness to share their ideas.</li>
          <li><b>Fostering "Expressive Confidence":</b> This is one of our four key pillars. Our ultimate goal is not just to get your child to speak, but to help them feel confident and capable in expressing their unique thoughts and perspectives. We celebrate every contribution, reinforcing the value of their voice.</li>
          </ul>
          <p>Many parents have shared with us how their shy child blossomed in our program, transforming from a silent observer into an active, confident participant. </p>


      `,
                },
                 {
                    question: "How do your online classes help develop a child's social skills?",
                    answer: `
        <p>This is a thoughtful question that acknowledges the importance of social development. While online interaction is different from in-person play, it offers a unique and highly valuable opportunity to develop a specific set of crucial social skills in a structured and guided manner.</p>
        <p>Rather than the often unstructured and sometimes chaotic nature of a playground, our Micro Classes foster:</p>

        <ul>
          <li><b>Structured Collaboration:</b> In our breakout rooms, students are given a specific task and a common goal. They must learn to listen to each other's ideas, take turns speaking, negotiate different approaches to a problem, and work together to produce a result. These are high-level collaboration skills essential for academic and professional success.</li>
          <li><b>Articulate Communication: </b>The online format requires students to be clear and precise in their verbal communication. They learn to articulate their thoughts without relying as heavily on physical cues, which is a powerful skill in our increasingly digital world.</li>
          <li><b>Respectful Disagreement:</b> Our mentors facilitate discussions and model how to engage with differing opinions respectfully. They teach students how to challenge an idea, not a person, fostering intellectual curiosity and respectful debate.</li>
          <li><b>Inclusive Interaction:</b> In a small, well-moderated online group, the social dynamics can be more equitable. Mentors ensure that quieter students have a chance to contribute and that no single voice dominates the conversation, teaching children the importance of inclusive group work.</li>
          </ul>
       <p>Therefore, we view our Micro Classes not as a replacement for in-person interaction, but as a powerful complement that develops a different but equally vital set of modern social and collaborative skills.</p>

      `,
                },
                {
                    question: "How does your teaching method help students with Cambridge exam anxiety?",
                    answer: `
        <p>Our entire educational philosophy is designed as an antidote to the very root causes of exam anxiety. We believe that anxiety is a symptom of a fragile foundation. When a student's knowledge is based on last-minute cramming and rote memorization, they feel insecure and fearful that their memory will fail them under pressure.</p>
        <p>Our "Mindful Mastery" approach builds genuine, lasting confidence by systematically replacing that fragile foundation with one of solid, deep understanding:</p>
        <ul>
          <li><b>Focusing on Concepts, Not Tricks:</b> We teach the 'why' behind every formula and rule. When a child understands the core logic of a concept, they don't need to panic about memorizing dozens of variations. They have the tools to reason their way through any problem, which is the ultimate source of academic confidence.</li>
          <li><b>Gradual Skill Building:</b> Our curriculum is carefully scaffolded. We ensure a student has mastered one concept before we build the next one upon it. This step-by-step process prevents the formation of knowledge gaps that later turn into major sources of anxiety.</li>
          <li><b>Preparation as a Process, Not an Event: </b> Our "Mastery Method" includes targeted preparation for Cambridge Assessments, but it is integrated throughout the learning journey. It is a continuous process of application and review, not a frantic, high-stress event at the end of the term. This builds familiarity and competence over time, making the actual exam feel like just another practice session.</li>
          <li><b>Decoupling Self-Worth from Scores:</b> By celebrating effort, curiosity, and progress, we help students understand that their value is not defined by a single test score. This healthier perspective reduces the immense pressure they often place on themselves and allows them to perform at their best.</li>
          </ul>

          <p>By focusing on building competence from the ground up, confidence becomes the natural and inevitable result.</p>


      `,
                },
                {
                    question: "How do you ensure the online classroom is a safe and secure environment for children?",
                    answer: `
        <p>The safety and security of your child in our virtual classroom is our absolute highest priority. We have implemented a multi-layered security protocol to create a protected and controlled learning environment, addressing common parental concerns about online risks like cyberbullying or unauthorized access.</p>
        <p>Our safety measures include:</p>

        <ul>
          <li><b>Secure, Closed Classrooms: </b> Every live session takes place in a secure, password-protected virtual classroom. Access is restricted to enrolled students and their assigned mentor. This prevents any unauthorized individuals from entering the session.</li>
          <li><b>Full Mentor Control:</b> The mentor has complete administrative control over the virtual environment. They have the ability to mute participants, manage chat functions, and immediately remove any individual who is not behaving appropriately. This ensures the mentor can maintain a respectful and orderly classroom at all times.</li>
          <li><b>Strict Code of Conduct:</b> All students and parents agree to a clear code of conduct upon enrollment. This code outlines our zero-tolerance policy for any form of bullying, harassment, or disrespect. Any violation of this code results in immediate action.</li>
          <li><b>Vetted and Trained Mentors:</b> As detailed in our rigorous selection process, all our mentors are trained specifically in online classroom management and safety protocols, ensuring they are fully prepared to create and maintain a secure learning space.</li>
          </ul>

          <p>These measures work together to ensure that the Study Monks classroom is a safe haven for learning, free from the distractions and dangers of the open internet.</p>


      `,
                },
                  {
                    question: "How is my child's data and privacy protected on your online learning platform?",
                    answer: `
        <p>We take data privacy and the protection of your child's information with the utmost seriousness. Our policies and technical infrastructure are designed to ensure the confidentiality and security of all personal data.</p>
        <p>Here are the key aspects of our privacy protection:</p>
        <ul>
          <li><b>Minimal Data Collection: </b> We only collect the data that is essential for the educational process, such as names, contact information for parents, and academic progress records.</li>
          <li><b>Strictly Educational Use:</b> Your child's data is used for one purpose only: to support their learning journey. We use it to personalize their education, and communicate with you. We will never sell or share your personal information with third-party marketers.</li>
          <li><b>Secure Platform and Data Encryption:</b> Our online platform and mobile app use modern security protocols. All data transmitted are encrypted and stored.</li>
          <li><b>Transparent Privacy Policy: </b>Our full Privacy Policy is available for your review. It clearly outlines what data we collect, how we use it, and your rights regarding your information, including procedures for data deletion requests.</li>
           <li><b>Controlled Online Presence:</b> Within our platform, your child's interaction is limited to their small class group and their mentor. There is no open-forum interaction with the general public, ensuring their online presence is contained within a safe and monitored educational context.</li>
          </ul>
      <p>We are committed to being responsible stewards of your data and providing a digital environment where you can be confident that your child's privacy is protected.</p>

      `,
                },
            ],
        },
        {
            key: "Practicalities",
            title: "Practicalities",
            subtitle: "Practicalities: Enrollment, Technology, and Support",
            desc: "This final section is designed to make your journey with Study Monks as smooth and transparent as possible. Here you will find clear answers to practical questions about pricing, the enrollment process, technical requirements, and how to get support when you need it.",
            faqs: [
                {
                    question: "What are your pricing plans for online Cambridge tutoring?",
                    answer: `
        <p>We offer a range of flexible plans designed to suit different learning needs and family budgets. For a complete and up-to-date breakdown of our course fees and package options, we encourage you to visit our dedicated "Plans & Pricing" page on our website.</p>
        <p>However, to provide a transparent overview, our plans are generally structured based on the number of subjects your child enrolls in (English, Maths, and/or Science).</p>
        <p>Regardless of the plan you choose, every Study Monks enrollment includes:</p>
        <ul>
          <li>Live, interactive 1:8 Micro Classes with an expert mentor.</li>
          <li>The initial Diagnostic Assessment and personalized Strategic Blueprint.</li>
          <li>Access to all class recordings and proprietary learning materials.</li>
          <li>Targeted assignments and continuous, qualitative feedback from mentors.</li>
           <li>Regular parent-counselor progress reports and meetings.</li>
          </ul>
      <p>There are no hidden fees. The price you see on our plans page is the all-inclusive cost for a comprehensive, premium educational experience.</p>

      `,
                },
                {
                    question: "How does the free trial class for your online tutoring work?",
                    answer: `
        <p>We believe that the best way to understand the Study Monks difference is to experience it firsthand. That's why we offer a no-obligation, free trial class for your child.1</p>
        <p>Here’s what to expect:</p>
        <ul>
          <li><b>It's a Real Class, Not a Sales Pitch:</b> The free trial is a genuine, 40-minute Micro Class. Your child will be placed in a small group with other potential students and will be taught by one of our expert mentors. They will participate in the same interactive activities and collaborative exercises as our enrolled students.</li>
          <li><b>Mutual Assessment: </b>The trial serves a dual purpose. It allows your child to experience our unique teaching style and virtual classroom environment to see if it feels right for them. Simultaneously, it gives our academic team a preliminary opportunity to observe your child's learning style and engagement level.</li>
          <li><b>Post-Trial Consultation:</b>After the class, you will have the opportunity to connect with one of our expert academic counsellors. They will discuss your child's experience, share any initial observations, and answer any remaining questions you may have.</li>

          </ul>
      <p>The goal of the free trial is to provide you with complete clarity and confidence. It is a genuine opportunity to ensure that Study Monks is the perfect fit for your child's needs before you make any commitment. You can book a trial through our website or by scheduling a free consultation with our team.</p>

      `,
                },
    //             {
    //                 question: "How does the free trial class for your online tutoring work?",
    //                 answer: `
    //     <p>We believe that the best way to understand the Study Monks difference is to experience it firsthand. That's why we offer a no-obligation, free trial class for your child.</p>
    //     <p>Here’s what you can expect from the process:</p>
    //     <ul>
    //       <li><b>It's a Real Class, Not a Sales Pitch:</b> The free trial is a genuine, 40-minute Micro Class for a Week. Your child will be placed in a small group with other students and will be taught by one of our expert mentors. They will participate in the same interactive activities and collaborative exercises as our enrolled students.</li>
    //       <li><b>Mutual Assessment: </b>The trial serves a dual purpose. It allows your child to experience our unique teaching style and virtual classroom environment to see if it feels right for them. Simultaneously, it gives our academic team a preliminary opportunity to observe your child's learning style and engagement level.</li>
    //       <li><b>Post-Trial Consultation:</b> After the class, you will have the opportunity to connect with one of our expert academic counselors. They will discuss your child's experience, share any initial observations, and answer any remaining questions you may have.</li>
    //       </ul>
    //   <p>The goal of the free trial is to provide you with complete clarity and confidence. It is a genuine opportunity to ensure that Study Monks is the perfect fit for your child's needs before you make any commitment. You can book a trial through our website or by scheduling a free consultation with our team.</p>

    //   `,
    //             },
                 {
                    question: "What are the technical requirements for your online learning platform?",
                    answer: `
        <p>Our platform is designed to be modern, user-friendly, and accessible without requiring complex software installations. To ensure a smooth and interactive experience for your child, you will need the following:</p>
        <ul>
          <li><b>A Stable Internet Connection:</b>We recommend a broadband internet connection with a download speed of at least 10 Mbps to handle live video and interactive features without interruption. </li>
          <li><b>A Capable Device: </b>A desktop computer, laptop, or modern tablet is ideal. The device should have a working webcam and microphone so your child can see, hear, and interact with their mentor and peers.</li>
          <li><b>A Modern Web Browser:</b> Our platform runs directly in most modern web browsers, such as Google Chrome, Firefox, Safari, or Microsoft Edge. We recommend keeping your browser updated to the latest version for optimal performance and security.</li>
          <li><b>•A Quiet Space:</b> To help your child focus and get the most out of their session, we recommend they join the class from a quiet space, free from distractions like television or household noise.</li>

          </ul>
      <p>Before your first class, our support team is available to help you test your setup and ensure everything is working correctly.</p>

      `,
                },
                {
                    question: "Who is our primary point of contact for academic or technical support?",
                    answer: `
        <p>We believe in providing clear, structured, and human-centric support. You will never be left navigating a confusing system of automated responses. Upon enrolling your child, you will have two primary points of contact for different needs:</p>

        <ul>
          <li><b>Your Dedicated Academic Counselor: </b> For all academic matters, your primary point of contact will be a dedicated Academic Counselor. This individual will be your partner throughout your journey with Study Monks. You can reach out to them to discuss your child's progress, provide feedback, discuss scheduling, or ask any questions related to the curriculum and your child's learning plan. They are your strategic guide and advocate within our system.</li>
          <li><b>Our Technical Support Team:</b> For any technical issues—such as trouble logging in, audio/video problems, or questions about the mobile app—our dedicated technical support team is ready to assist. You can reach them via email at support @studymonks.com or through our main support channels listed on our website. They are trained to resolve issues quickly and efficiently to minimize any disruption to your child's learning.</li>
        </ul>
      <p>This two-pronged support structure ensures that you always know exactly who to turn to and that you will receive expert assistance tailored to your specific needs.</p>

      `,
                },
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState("philosophy");
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const handleAccordionToggle = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="faq-sectint">
            <Container className="my-5">
                <div className="faq-sectin">
                    {/* 🔹 Mobile Dropdown Tabs */}
                    <div className="d-lg-none mb-3">


                        <Dropdown>
                            {/* 🔹 Header with icon */}
                            <Dropdown.Toggle
                                variant="outline-dark"
                                className="w-100 d-flex justify-content-between align-items-center"
                            >
                                <span>{tabs.find((t) => t.key === activeTab)?.title}</span>
                                <ChevronDown size={20} />
                            </Dropdown.Toggle>

                            {/* 🔹 Menu (no icons here) */}
                            <Dropdown.Menu className="w-100">
                                {tabs.map((tab) => (
                                    <Dropdown.Item
                                        key={tab.key}
                                        active={tab.key === activeTab}
                                        onClick={() => {
                                            setActiveTab(tab.key);
                                            setOpenAccordion(0); // reset accordion when tab changes
                                        }}
                                    >
                                        {tab.title}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>

                    {/* 🔹 Desktop Tabs */}
                    <Tab.Container activeKey={activeTab} onSelect={(k) => k && setActiveTab(k)}>
                        <Row>
                            <Col lg={12} className="d-none d-lg-block">
                                <Nav variant="tabs faq-tabs" className="mb-4">
                                    {tabs.map((tab) => (
                                        <Nav.Item key={tab.key}>
                                            <Nav.Link
                                                eventKey={tab.key}
                                                onClick={() => {
                                                    setOpenAccordion(0);
                                                }}
                                            >
                                                {tab.title}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </Col>

                            {/* 🔹 Tab Content with Accordion */}
                            <Col lg={12}>
                                <Tab.Content>
                                    {tabs.map((tab) => (
                                        <Tab.Pane key={tab.key} eventKey={tab.key}>
                                            <h3 className="saga font-bold mb-3">{tab.subtitle}</h3>
                                            <p className="mb-3">{tab.desc}</p>

                                            <div className="faq-section">
                                                {tab.faqs.map((faq, index) => (
                                                    <div key={index} className="mb-3 border rounded-3 overflow-hidden">
                                                        <button
                                                            onClick={() => handleAccordionToggle(index)}
                                                            className={`w-100 text-start d-flex justify-content-between align-items-center p-3 border-0  text-white ${openAccordion === index ? "active-accordion" : ""
                                                                }`}
                                                        >
                                                            <span className="fw-medium">{faq.question}</span>

                                                            <div
                                                                className={`transition-transform ${openAccordion === index ? "rotate-180" : "rotate-0"
                                                                    }`}
                                                            >
                                                                {openAccordion === index ? (
                                                                    <ArrowBackIcon className="text-white" />
                                                                ) : (
                                                                    <ArrowForwardIcon className="text-white" />
                                                                )}
                                                            </div>
                                                        </button>

                                                        {openAccordion === index && (
                                                            <div
                                                                className="p-3 bg-light text-muted"
                                                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Container>
        </section>
    );
}
