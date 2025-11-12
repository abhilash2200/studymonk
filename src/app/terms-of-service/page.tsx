import Footer from "../component/footer/Footer";
import Header from "../component/Header";
import StickyFooter from "../component/StickyFooter";
import "./TermsService.css";

function TermsService() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="terms-content">
                    <h1>Part I: Terms of Service Agreement</h1>
                    <div className="divider"></div>

                    <p className="effective-date">
                        <strong>Effective Date:</strong> August 20, 2025
                    </p>

                    <p className="welcome">Welcome to Skolaris India Learning Solutions!</p>

                    <p className="intro">
                        These Terms of Service {`("Terms")`} govern your use of the website located at studymonks.com {`(the "Site")`}, and the online educational services provided by Skolaris India Learning Solutions, a proprietorship concern registered in Bangalore, Karnataka, India {`("Company," "we," "us," or "our")`}. Our services include live online classes, access to recorded educational content, downloadable worksheets, Multiple-Choice Question (MCQ) banks, and other related educational resources {`(collectively, the "Services")`}.
                    </p>

                    <p className="intro">
                        By creating an account, accessing, or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Services.
                    </p>

                    <div className="section">
                        <h2>1. Acceptance of Terms & User Eligibility</h2>
                        
                        <div className="subsection">
                            <h3>Binding Agreement</h3>
                            <p>These Terms constitute a legally binding agreement between you and the Company. You represent that you have read, understood, and agree to be bound by these Terms. To use our Services, you must explicitly accept these Terms through an affirmative action, such as ticking a checkbox during the registration process {`(a "click-wrap" agreement)`}. This action signifies your binding acceptance.</p>
                        </div>
                        
                        <div className="subsection">
                            <h3>Eligibility</h3>
                            <p>To enter into this agreement, you must be at least 18 years of age and legally competent to enter into a contract under Indian law.</p>
                        </div>
                        
                        <div className="subsection">
                            <h3>For Minors</h3>
                            <p>Our Services are designed for students, many of whom may be minors (individuals under the age of 18). If a user is a minor, this agreement must be accepted by their parent or legal guardian. In such cases, the parent or legal guardian is the contracting party, is responsible for the minor&apos;s use of the Services, and is bound by these Terms. By accepting these Terms, you represent that you are the parent or legal guardian of the minor user and provide your consent for them to use the Services in accordance with our policies.</p>
                        </div>
                    </div>

                    <div className="section">
                        <h2>2. Definitions</h2>
                        
                        <div className="subsection">
                            
                            <p><strong>Company</strong> refers to Skolaris India Learning Solutions.</p>
                        </div>
                        
                        <div className="subsection">
                            
                            <p><strong>Content</strong> means all educational materials provided through the Services, including but not limited to live and recorded video lectures, worksheets, MCQs, text, graphics, images, software, and other materials.</p>
                        </div>
                        
                        <div className="subsection">
                            
                            <p><strong>Services</strong> refers to all offerings provided by the Company as described in the preamble.</p>
                        </div>
                        
                        <div className="subsection">
                            
                            <p><strong>User, you, or your</strong> refers to the individual student and/or their parent or legal guardian who has registered for and uses the Services.</p>
                        </div>
                        
                        <div className="subsection">
                            
                            <p><strong>Subscription</strong> refers to the paid plan selected by the User to access the Services for a specified period.</p>
                        </div>
                    </div>

                    <div className="section">
                        <h2>3. Account Registration and Security</h2>
                        
                        <div className="subsection">
                            <h3>Account Creation</h3>
                            <p>To access our Services, you must register for a personal account {`("Account")`}. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
                        </div>
                        
                        <div className="subsection">
                            <h3>Account Security</h3>
                            <p>You are solely responsible for maintaining the confidentiality of your Account password and for all activities that occur under your Account. You agree to notify us immediately of any unauthorized use of your Account.</p>
                        </div>
                        
                        <div className="subsection">
                            <h3>One Account Per User</h3>
                            <p>You agree that you will create and use only one Account. Sharing your Account with any third party is strictly prohibited. Unauthorized sharing may result in the immediate suspension or termination of your Account without a refund.</p>
                        </div>
                    </div>

                    <div className="section">
                        <h2>4. Scope of Services</h2>
                        <p>The Company provides online after-school educational support. Our Services include:</p>
                        
                        <ul>
                            <li>Live, interactive online classes conducted by our instructors.</li>
                            <li>Access to a library of pre-recorded video content.</li>
                            <li>Downloadable and online worksheets for practice.</li>
                            <li>Interactive MCQs and assessments to test knowledge.</li>
                        </ul>
                        
                        <p className="note">The availability and scope of Services depend on the Subscription plan you purchase. We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time.</p>
                    </div>

                    <div className="section">
                        <h2>5. Subscriptions, Fees, and Payment</h2>
                        
                        <div className="subsection">
                            <h3>Subscription Plans</h3>
                            <p>Our Services are available under various subscription plans, including monthly and quarterly options, the details of which are available on our Site. By purchasing a Subscription, you agree to pay the applicable fees.</p>
                        </div>
                        
                        <div className="subsection">
                            <h3>Payment</h3>
                            <p>You must pay all fees in full at the time of your Subscription purchase. We use third-party payment gateways (e.g., Razorpay, PayU, etc.) to process payments. You agree to abide by the terms and conditions of such third-party payment gateways. The Company is not responsible for any issues arising from your use of these third-party services.</p>
                        </div>
                        
                        <div className="subsection">
                            <h3>Taxes</h3>
                            <p>All fees are exclusive of applicable taxes. Goods and Services Tax (GST) will be charged over and above the displayed fees as per the prevailing rates under Indian law.</p>
                        </div>
                        
                        <div className="subsection">
                            <h3>Automatic Renewals for Subscriptions</h3>
                            <p>For your convenience, you may have the option to select automatic renewal for your monthly or quarterly Subscription.</p>
                            
                            <div className="sub-subsection">
                                <h4>Opt-In Consent</h4>
                                <p>Automatic renewal is an optional feature. You must provide your explicit, affirmative consent to enable auto-renewal (for example, by ticking an unticked checkbox at the time of purchase). Auto-renewal will not be enabled by default.</p>
                            </div>
                            
                            <div className="sub-subsection">
                                <h4>Billing Cycle</h4>
                                <p>If you opt-in for auto-renewal, your Subscription will automatically renew at the end of each subscription period (monthly or quarterly), and your designated Payment Method will be charged the applicable Subscription fee.</p>
                            </div>
                            
                            <div className="sub-subsection">
                                <h4>Pre-Debit Notification</h4>
                                <p>In compliance with RBI guidelines, you will receive a pre-debit notification via email or SMS at least 24 hours before your card is charged for the renewal. This notification will provide you with a clear option to cancel the upcoming payment and the auto-renewal.</p>
                            </div>
                            
                            <div className="sub-subsection">
                                <h4>Cancellation of Auto-Renewal</h4>
                                <p>You can cancel the auto-renewal feature at any time through your account dashboard or by contacting our support team. This will stop all future recurring payments, but you will retain access to the Services until the end of your current paid subscription term.</p>
                            </div>
                        </div>
                        
                        <div className="subsection">
                            <h3>Fixed-Term Subscriptions</h3>
                            <p>If you do not opt-in for auto-renewal, your Subscription will be for a fixed term and will not automatically renew. You will be prompted to purchase a new Subscription at the end of your current term to continue accessing the Services.</p>
                        </div>
                    </div>

                    <div className="section">
                        <h2>6. Intellectual Property (IP) Rights</h2>
                        <p>All Content provided through the Services, including the website design, software, source code, text, videos, audio, graphics, logos, and trademarks, is the exclusive property of the Company or its licensors. This Content is protected by Indian and international intellectual property laws, including The Copyright Act, 1957. Your use of the Services does not grant you any ownership rights in or to our intellectual property.</p>
                    </div>

                    <div className="section">
                        <h2>7. Grant of Limited License</h2>
                        <p>Upon successful payment of the applicable Subscription fees, the Company grants you a limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to access and use the Content solely for your personal, non-commercial, educational purposes during the term of your Subscription. This license is subject to your compliance with these Terms. Any use of the Content for purposes other than those expressly permitted herein is strictly prohibited.</p>
                    </div>

                    <div className="section">
                        <h2>8. User Conduct and Acceptable Use</h2>
                        <p>You agree to use the Services in a lawful manner and in compliance with our Acceptable Use Policy (provided as a separate document). You agree not to:</p>
                        
                        <ul>
                            <li>Reproduce, distribute, modify, sell, or publicly display any of our Content.</li>
                            <li>Use the Services for any commercial purpose.</li>
                            <li>Engage in any activity that is harassing, defamatory, or harmful to other users or our instructors.</li>
                            <li>Attempt to reverse-engineer, decompile, or otherwise access the source code of our platform.</li>
                            <li>Violate any applicable laws or regulations.</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>9. Termination and Suspension</h2>
                        <p>The Company reserves the right to suspend or terminate your Account and access to the Services, at its sole discretion, without notice and without a refund, if you breach these Terms or our Acceptable Use Policy. You may terminate your Account at any time by contacting our support team, but such termination will not entitle you to a refund for any pre-paid fees.</p>
                    </div>

                    <div className="section">
                        <h2>10. Disclaimers of Warranties</h2>
                        <p>The Services and Content are provided on an {`"as-is"`} and {`"as-available"`} basis, without any warranties of any kind, either express or implied. The Company does not warrant that:</p>
                        
                        <ul>
                            <li>The Services will be uninterrupted, error-free, or free of viruses or other harmful components.</li>
                            <li>The Content will be accurate, complete, or reliable.</li>
                            <li>Your use of the Services will result in specific academic outcomes, such as improved grades, test scores, or admission to any educational institution.</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>11. Limitation of Liability</h2>
                        <p>To the fullest extent permitted by law, in no event shall the Company, its proprietor, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services. The Company&apos;s total cumulative liability to you for any and all claims arising from or relating to the Services shall not exceed the total amount of fees paid by you to the Company for the Services in the six (6) months immediately preceding the event giving rise to the claim.</p>
                    </div>

                    <div className="section">
                        <h2>12. Indemnification</h2>
                        <p>You agree to defend, indemnify, and hold harmless the Company, its proprietor, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited attorney&apos;s fees) arising from: (i) your use of and access to the Services; (ii) your violation of any term of these Terms; or (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right.</p>
                    </div>

                    <div className="section">
                        <h2>13. Grievance Redressal Mechanism</h2>
                        <p>In compliance with the Information Technology Act, 2000, and the Consumer Protection (E-Commerce) Rules, 2020, we have established a grievance redressal mechanism.</p>
                        
                        <div className="subsection">
                            <h3>Grievance Officer</h3>
                            <p>Any complaints, abuse, or concerns regarding the Services or a breach of these Terms shall be immediately informed to the designated Grievance Officer in writing or through email.</p>
                            <ul>
                                <li><strong>Name:</strong> Ms. Bhavyashree N C</li>
                                <li><strong>Email:</strong> grievance.officer@studymonks.com</li>
                                <li><strong>Address:</strong> Skolaris India Learning Solutions, Unicon Foland, 2nd Main Road, Reshme Nagara, Bayyanapalya, Off Kanakapura Main Road, Ganigarapalya, Adarsha Layout, Lingadeeranahalli, Bengaluru, Karnataka 560062</li>
                            </ul>
                        </div>
                        
                        <div className="subsection">
                            <h3>Resolution Timeline</h3>
                            <p>We will acknowledge the receipt of your complaint within forty-eight (48) hours and will resolve the complaint within one (1) month from the date of receipt.</p>
                        </div>
                    </div>

                    <div className="section">
                        <h2>14. Governing Law and Dispute Resolution</h2>
                        <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. You agree that any legal action or proceeding arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts located in Bangalore, Karnataka, India.</p>
                    </div>
                </div>
            </div>
            <StickyFooter />
            <Footer />
        </>
    );
}

export default TermsService;