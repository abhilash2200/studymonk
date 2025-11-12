'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react"; 
import React from 'react';
import { Button } from "@mui/material";
import PopupForm from "../component/PopupForm";


function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <header>
      <section className="sticky-navbar">
        <div className="navbars">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                  <Image src="/assets/img/logos.png" alt="Study Monk" width={160} height={50} />
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/our-story">Our Story</Link>
                    </li>
                    <li className="nav-item dropdown custom-dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        The Cambridge Pathway
                      </a>
                      <ul className="dropdown-menu vbgf">
                        <li>
                          <Link className="dropdown-item" href="/cambridge-primary">
                            Cambridge Primary
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/cambridge-lower-secondary">
                            Cambridge Lower Secondary
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/mentors">Our Mentors</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/">Resource Hub</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/career">Career</Link>
                    </li>
                    {/* <li className="nav-item dropdown custom-dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Resource Hub
                      </a>
                      <ul className="dropdown-menu vbgf">
                        <li><Link className="dropdown-item" href="/">Cambridge Primary</Link></li>
                        <li><Link className="dropdown-item" href="/">Cambridge Secondary</Link></li>
                      </ul>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" href="/plans-and-pricing">Plans & Pricing</Link>
                    </li>

                  </ul>
                </div>
                <Button className="btn btn-login" type="button"
                    variant="contained"
                    onClick={handleClickOpen} style={{ color: '#fff' }}>
                  <Image src="/assets/img/login.png" alt="Login Icon" width={20} height={20} className="me-2" />
                  Free Trial
                </Button>

              </div>
            </nav>
          </div>
        </div>
        </section>
       <PopupForm open={open} handleClose={handleClose} /> 
    </header>
    
  );
}

export default Header;
