"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@mui/material";
import PopupForm from "../component/PopupForm";
import { useState } from "react"; 

export default function StickyFooter() {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <footer
      className="fixed-bottom text-white shadow-lg"
      style={{ zIndex: 1030 }}
    >
      <div className="d-flex justify-content-between align-items-center">

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/9535672142"
          target="_blank"
          className="btn btn-success d-flex align-items-center gap-3 w-100 px-3 py-2  shadow"
          style={{ transition: "0.3s" }}
        >

          WhatsApp
        </Link>

        {/* Login Button - Highlighted */}
        <Button type="button"  style={{ backgroundColor: "#fcc300" }}
                    variant="contained"
                    onClick={handleClickOpen}
         
          className="btn btn-warning text-dark fw-bold py-2 w-100"

        >
          Free Trial
        </Button >                                                                                                                

        {/* Call Button */}
        <a
          href="tel:+919535672142"
          className="btn btn-primary  text-center gap-4 px-3 py-2 w-100 shadow"
        >
          Call
        </a>

      </div>
      <PopupForm open={open} handleClose={handleClose} /> 
    </footer>
  );
}