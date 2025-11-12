'use client';

import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/footer/Footer";
import BootstrapClient from '../BootstrapClient';
import * as React from "react";
import Link from 'next/link';
import StickyFooter from "../component/StickyFooter";




export default function Page() {
    return (
        <>
            <Header />

            <section className=" mb blog-rc">
                <div className="circles">
                    <span className="circles circle1"></span>
                    <span className="circles circle2"></span>
                    <span className="circles circle3"></span>
                </div>

                <div className="content">
                    <h1 id="blogs">
                        Blogs
                    </h1>
                    <p className="mt-3" style={{ color: "#001F3F" }}>
                        The Heart of the Study Monks Promise
                    </p>
                </div>
            </section>

            <section className="blog-section mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="blog_box">
                                <Image src="/assets/img/blog-img.png" alt="Login Icon" width={600} height={500} className="img-fluid me-2" />
                                <div>
                                    <p className="atur mb-0">Author: Admin | 22nd august 2025</p>
                                </div>
                                <div className="mt-2">
                                    <h2 className="blof-heading mnb">This is a blog title</h2>
                                </div>
                                <p>
                                    Before you choose a plan, see the integrated value we provide.
                                    Each bundle includes academic excellence, confidence-building skills, and wellness mentorship at a fraction of the cost of sourcing them separately.
                                </p>
                                <Link href="/blog-details" ><button className="mentr">Learn More</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="blog_box">
                                <Image src="/assets/img/blog-img.png" alt="Login Icon" width={600} height={500} className="img-fluid me-2" />
                                <div>
                                    <p className="atur mb-0">Author: Admin | 22nd august 2025</p>
                                </div>
                                <div className="mt-2">
                                    <h2 className="blof-heading mnb">This is a blog title</h2>
                                </div>
                                <p>
                                    Before you choose a plan, see the integrated value we provide.
                                    Each bundle includes academic excellence, confidence-building skills, and wellness mentorship at a fraction of the cost of sourcing them separately.
                                </p>
                                <Link href="/blog-details" ><button className="mentr">Learn More</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="blog_box">
                                <Image src="/assets/img/blog-img.png" alt="Login Icon" width={600} height={500} className="img-fluid me-2" />
                                <div>
                                    <p className="atur mb-0">Author: Admin | 22nd august 2025</p>
                                </div>
                                <div className="mt-2">
                                    <h2 className="blof-heading mnb">This is a blog title</h2>
                                </div>
                                <p>
                                    Before you choose a plan, see the integrated value we provide.
                                    Each bundle includes academic excellence, confidence-building skills, and wellness mentorship at a fraction of the cost of sourcing them separately.
                                </p>
                                <Link href="/blog-details" ><button className="mentr">Learn More</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="blog_box">
                                <Image src="/assets/img/blog-img.png" alt="Login Icon" width={600} height={500} className="img-fluid me-2" />
                                <div>
                                    <p className="atur mb-0">Author: Admin | 22nd august 2025</p>
                                </div>
                                <div className="mt-2">
                                    <h2 className="blof-heading mnb">This is a blog title</h2>
                                </div>
                                <p>
                                    Before you choose a plan, see the integrated value we provide.
                                    Each bundle includes academic excellence, confidence-building skills, and wellness mentorship at a fraction of the cost of sourcing them separately.
                                </p>
                                <Link href="/blog-details" ><button className="mentr">Learn More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

















            <StickyFooter />
            <Footer />

        </>
    );

}