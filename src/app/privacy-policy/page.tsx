import Footer from "../component/footer/Footer";
import Header from "../component/Header";
import StickyFooter from "../component/StickyFooter";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  // Data for definitions
  const definitions = [
    { term: '"Personal Data"', definition: 'means any data about an individual who is identifiable by or in relation to such data.' },
    { term: '"Processing"', definition: 'means any automated operation performed on digital personal data, including collection, storage, use, sharing, and erasure.' },
    { term: '"Data Fiduciary"', definition: 'means the entity that determines the purpose and means of processing personal data. For the purpose of our Services, Skolaris India Learning Solutions is the Data Fiduciary.' },
    { term: '"Data Processor"', definition: 'means any person who processes personal data on behalf of a Data Fiduciary.' },
    { term: '"Data Principal"', definition: 'means the individual to whom the personal data relates. This includes our student users and their parents or legal guardians.' },
    { term: '"Child"', definition: 'means an individual who has not completed eighteen years of age.' }
  ];

  // Data for information categories
  const infoCategories = [
    {
      title: "User-Provided Data:",
      items: [
        { label: "Student Information", detail: "Full name, email address, phone number, city, and current grade/class level." },
        { label: "Parent/Guardian Information", detail: "Full name, email address, and phone number." },
        { label: "Account Information", detail: "Username and password." },
        { label: "Payment Information", detail: "When you make a purchase, your payment details (such as credit/debit card information) are collected and processed directly by our third-party payment gateway providers. We do not store this information on our servers." }
      ]
    },
    {
      title: "Performance and Usage Data:",
      items: [
        { label: "Academic Performance Data", detail: "Information on student performance in MCQs, scores on worksheets, progress reports, and learning patterns (e.g., topics where the student needs improvement)." },
        { label: "Interaction Data", detail: "Content of queries submitted to instructors, participation in live class discussions, and any other communications made through the Services. You acknowledge that live classes may be recorded for quality and training purposes." }
      ]
    },
    {
      title: "Automatically Collected Data:",
      items: [
        { label: "Technical Information", detail: "Internet Protocol (IP) address, browser type and version, device type, operating system, and login information." },
        { label: "Log Data", detail: "Information about your use of our Services, including pages visited, time spent on pages, and links clicked." }
      ]
    }
  ];

  // Data for processing purposes table
  const processingPurposes = [
    { category: "Student & Parent Information", purpose: "To create and manage your account, communicate with you about the Services (e.g., class schedules, updates), provide customer support, and process payments." },
    { category: "Academic Performance Data", purpose: "To provide personalized learning experiences, track academic progress, generate performance reports for students and parents, and improve our educational content." },
    { category: "Interaction Data", purpose: "To resolve academic doubts, provide educational support, ensure the safety and integrity of our learning environment, for internal quality control and instructor training, and for content improvement." },
    { category: "Automatically Collected Data", purpose: "To operate and maintain the security of our Services, analyze usage trends to improve our platform, and ensure technical functionality." }
  ];

  // Data for notice details
  const noticeDetails = [
    "The specific Personal Data we collect and the explicit purposes for which it is processed.",
    "The manner in which you can exercise your rights as a Data Principal.",
    "The process for making a complaint to the Data Protection Board of India."
  ];

  // Data for data sharing circumstances
  const sharingCircumstances = [
    {
      title: "With Data Processors:",
      detail: "We engage trusted third-party service providers (Data Processors) to perform functions on our behalf, such as payment processing and cloud hosting (e.g., Amazon Web Services). We share your data with them only to the extent necessary for them to provide their services and only under valid contracts that obligate them to protect your data with the same level of security that we do."
    },
    {
      title: "For Legal Reasons:",
      detail: "We may disclose your information if required to do so by law or in response to a valid request from a law enforcement or government authority."
    }
  ];

  // Data for retention policies
  const retentionPolicies = [
    {
      title: "Active Accounts:",
      detail: "We retain your data as long as your account is active to provide you with the Services."
    },
    {
      title: "Inactive Accounts:",
      detail: "If your account becomes inactive, we may retain your data for a reasonable period (e.g., 24 months) to allow for easy reactivation and to preserve your learning history. After this period, your personal data will be either erased or anonymized."
    },
    {
      title: "Your Right to Erasure:",
      detail: "You have the right to request the erasure of your personal data at any time. Upon receiving a valid request, or if you withdraw your consent, we will erase your data in accordance with the law."
    },
    {
      title: "Legal Obligations:",
      detail: "Notwithstanding the above, we may be required to retain certain information, such as transaction data, for longer periods to comply with legal, tax, or accounting requirements."
    }
  ];

  // Data for data principal rights
  const dataRights = [
    { right: "Right to Access Information", detail: "You have the right to obtain a summary of your Personal Data that we process and the identities of any third parties with whom it has been shared." },
    { right: "Right to Correction and Erasure", detail: "You have the right to request the correction of inaccurate or incomplete data and the erasure of your Personal Data that is no longer necessary." },
    { right: "Right to Grievance Redressal", detail: "You have the right to a readily available means of grievance redressal for any issues concerning your data." },
    { right: "Right to Nominate", detail: "You have the right to nominate another individual to exercise your rights in the event of your death or incapacity." },
    { right: "Right to Withdraw Consent", detail: "You have the right to withdraw your consent at any time. The process for withdrawal is as easy as the process for giving consent. Withdrawal will not affect the lawfulness of processing based on consent before its withdrawal." }
  ];

  // Data for security measures
  const securityMeasures = [
    "Data encryption both in transit and at rest.",
    "Strict access controls to ensure only authorized personnel can access your data.",
    "Regular security assessments and audits of our systems."
  ];

  return (
    <>
      <Header />
      
      <div className="container">
        <div className="privacy-content">
          <h1>Part II: Privacy Policy (Compliant with the DPDP Act, 2023)</h1>
          <div className="divider"></div>
          
          <p className="effective-date"><strong>Effective Date:</strong> August 20, 2025</p>
          
          <p className="welcome">Welcome to Skolaris India Learning Solutions!</p>
          
          <p>This Privacy Policy applies to all users of the services provided by Skolaris India Learning Solutions {`("Company," "we," "us," or "our")`}. It describes our practices for handling your personal data in connection with our website at studymonks.com and our online educational services (collectively, Services).</p>
          
          <p className="notice">Please read this policy carefully. By providing your consent to this Privacy Policy, you agree to the processing of your personal data as described herein.</p>
          
          <h2>1. Introduction & Definitions</h2>
          
          <p>This policy uses terms defined in the Digital Personal Data Protection Act, 2023 {`("DPDP Act")`}.</p>
          
          <ul>
            {definitions.map((item, index) => (
              <li key={index}>
                <strong>{item.term}</strong> {item.definition}
              </li>
            ))}
          </ul>
          
          <h2>2. What Information We Collect</h2>
          
          <p>We collect the following categories of Personal Data to provide and improve our Services. We are committed to the principle of data minimization and only collect data that is necessary for the specified purpose. The information is collected in an itemized and granular manner as follows:</p>
          
          {infoCategories.map((category, index) => (
            <div key={index} className="info-category">
              <h3>{category.title}</h3>
              
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <strong>{item.label}:</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <h2>3. How and Why We Use Your Information (Purpose Limitation)</h2>
          
          <p>We process your Personal Data only for specified, explicit, and lawful purposes. We link each category of data to a specific purpose as follows:</p>
          
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Data Category</th>
                  <th>Purpose of Processing</th>
                </tr>
              </thead>
              <tbody>
                {processingPurposes.map((item, index) => (
                  <tr key={index}>
                    <td>{item.category}</td>
                    <td>{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <h2>4. Legal Basis for Processing</h2>
          
          <p>The sole legal basis for processing your Personal Data is your explicit consent, obtained in accordance with Section 6 of the DPDP Act. We do not process any Personal Data without your prior, informed, and unambiguous consent.</p>
          
          <h2>5. Notice and Consent Mechanism</h2>
          
          <p>Our commitment to informed consent is fulfilled through a unified process at registration. This Privacy Policy, and the other legal documents linked during registration, serve as the comprehensive, plain-language notice required by law. This notice details:</p>
          
          <ul>
            {noticeDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          
          <p>The mechanism for obtaining your consent is the unticked checkbox presented during registration. By actively ticking this box, you provide a clear affirmative action that signifies your free, specific, informed, and unambiguous agreement to the processing of your data as described in this policy.</p>
          
          <h2>6. Data Sharing and Disclosure</h2>
          
          <p>We do not sell or rent your Personal Data to third parties. We may share your Personal Data only in the following limited circumstances:</p>
          
          <ul>
            {sharingCircumstances.map((circumstance, index) => (
              <li key={index}>
                <strong>{circumstance.title}</strong> {circumstance.detail}
              </li>
            ))}
          </ul>
          
          <h2>7. Data Retention and Erasure</h2>
          
          <p>We retain your Personal Data only for as long as is necessary to fulfill the purposes for which it was collected and to comply with our legal obligations.</p>
          
          <ul>
            {retentionPolicies.map((policy, index) => (
              <li key={index}>
                <strong>{policy.title}</strong> {policy.detail}
              </li>
            ))}
          </ul>
          
          <h2>8. Your Rights as a Data Principal</h2>
          
          <p>Under the DPDP Act, you have the following rights over your Personal Data:</p>
          
          <ul>
            {dataRights.map((right, index) => (
              <li key={index}>
                <strong>{right.right}:</strong> {right.detail}
              </li>
            ))}
          </ul>
          
          <p>To exercise any of these rights, please contact our designated contact person for privacy matters using the details provided below.</p>
          
          <h2>9. Data Security Measures</h2>
          
          <p>We are committed to protecting your Personal Data. We have implemented reasonable security safeguards and appropriate technical and organizational measures to prevent unauthorized access, use, alteration, disclosure, or destruction of your data. These measures include:</p>
          
          <ul>
            {securityMeasures.map((measure, index) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
          
          <p>In the event of a personal data breach, we will notify the Data Protection Board of India and affected users as required by law.</p>
          
          <h2>10. Processing of Children&apos;s Data</h2>
          
          <p>We provide special protections for the Personal Data of Children (users under 18). We do not knowingly collect Personal Data from a Child without first obtaining Verifiable Parental Consent (VPC) from their parent or legal guardian. Our registration process is designed to identify users who are children and initiate a separate process to obtain this required parental consent. We strictly prohibit any processing of a child&apos;s data that could be detrimental to their well-being, and we do not engage in tracking, behavioural monitoring, or targeted advertising directed at Children.</p>
          
          <h2>11. Cookie Policy</h2>
          
          <p>We use cookies and similar tracking technologies to operate and personalize our Services. Cookies are small text files stored on your device. We use them for essential functions like keeping you logged in and for analytics to understand how our Services are used. For more detailed information, please refer to our separate Cookie Policy.</p>
          
          <h2>12. Policy Updates and Contact Information</h2>
          
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our Site.</p>
          
          <p>For any questions, concerns, or to exercise your rights under this policy, please contact our designated officer:</p>
          
          <div className="contact-info">
            <p><strong>Designation:</strong> Grievance Officer</p>
            <p><strong>Name:</strong> Ms. Bhavyashree N C</p>
            <p><strong>Email:</strong> grievance.officer@studymonks.com</p>
            <p><strong>Address:</strong> Skolaris India Learning Solutions, Unicon Foland, 2nd Main Road, Reshme Nagara, Bayyanapalya, Off Kanakapura Main Road, Ganigarapalya, Adarsha Layout, Lingadeeranahalli, Bengaluru, Karnataka 560062</p>
          </div>
        </div>
      </div>

      <StickyFooter />
      <Footer />
    </>
  );
}

export default PrivacyPolicy;