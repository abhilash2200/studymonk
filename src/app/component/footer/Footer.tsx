'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          {/* Logo and description */}
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footrd bhb">
              <Image src="/assets/img/white-logo.png" alt="Logo" width={180} height={50} />
              <p className="text-white">
               At the heart of our platform are inspiring mentors who guide every student, opening doors to infinite possibilities in learning and growth.
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footrd used">
              <h3 style={{ color: "#fff" }}>Useful Links</h3>
              <div className="footeil">
                <ul>
                  <li><Link href="/our-story">Our Story</Link></li>
                  <li><Link href="/cambridge-primary">Cambridge Primary</Link></li>
                  <li><Link href="/cambridge-lower-secondary">Cambridge Lower Secondary</Link></li>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                  <li><Link href="/faq">Faq</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footrd">
              <h3 style={{ color: "#fff" }}>Legal</h3>
              <div className="footeil">
                <ul>
                  <li><Link href="#">Refund Policy</Link></li>
                  <li><Link href="/terms-of-service">Terms of Service</Link></li>
                  <li><Link href="#">Content Policy</Link></li>
                  <li><Link href="#">Cancellation Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="col-lg-3 col-md-4 col-12">
            <h3 style={{ color: "#fff" }}>Contact Us</h3>
            <div className="d-flex">
              <Image src="/assets/img/location1.png" alt="Location" width={20} height={20} className="me-2 imhg" />
              <p id="btd">#311, Kanakapura Road, Bengaluru</p>
            </div>
            <div className="d-flex">
              <Image src="/assets/img/call-calling1.png" alt="Call" width={20} height={20} className="me-2 imhg" />
              <Link href="tel:+919535672142" className="rishra">
                <p id="btd">+919535672142</p>
              </Link>
            </div>
            <div className="d-flex">
              <Image src="/assets/img/sms-notification1.png" alt="Email" width={20} height={20} className="me-2 imhg" />
              <Link href="mailto:info@studymonks.com" className="rishra">
                <p id="btd">info@studymonks.com</p>
              </Link>
            </div>
            {/* <div className="social">
              <h3>Social Links</h3>
              <span><Link href="#"><Image src="/assets/img/facebook.png" width={27} height={27} alt="facebook" /></Link></span>
              <span><Link href="#"><Image src="/assets/img/whatsapp.png" width={27} height={27} alt="whatsapp" /></Link></span>
              <span><Link href="#"><Image src="/assets/img/twiitter.png" width={27} height={27} alt="twitter" /></Link></span>
              <span><Link href="#"><Image src="/assets/img/instagram.png" width={27} height={27} alt="instagram" /></Link></span>
            </div> */}
          </div>
        </div>
        <hr className="hr-li" />
        <p className="copy text-center text-white">
          © {new Date().getFullYear()} Copyright@Skolaris India Learning Solutions! • All Rights Reserved -{' '}
          <Link href="/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</Link>
        </p>
      </div>
    </section>
  );
  
}

export default Footer;
