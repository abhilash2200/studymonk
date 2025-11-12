"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    Button,
    Dialog,
    DialogContent,
    IconButton,
    Slide,
    TextField,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement },
    ref: React.Ref<unknown>
) {
    return <Slide direction="right" ref={ref} {...props} />;
});

type PopupFormProps = {
    open: boolean;
    handleClose2: () => void;
};

interface FormData {
    name: string;
    email: string;
    phone: string;
    resume: File | null;
}

export default function PopupForm({ open, handleClose2 }: PopupFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        resume: null,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkSize = () => setIsMobile(window.innerWidth < 768);
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            setError("Please enter your name");
            return false;
        }
        if (!formData.email.trim()) {
            setError("Please enter your email");
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            setError("Please enter a valid email address");
            return false;
        }
        if (!formData.phone.trim()) {
            setError("Please enter your phone number");
            return false;
        }
        if (!/^\d{10}$/.test(formData.phone)) {
            setError("Phone number must be 10 digits");
            return false;
        }
        if (!formData.resume) {
            setError("Please upload your resume");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);


        if (!validateForm()) return;

        setLoading(true);

        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("qualification_id", "");
            data.append("role_of_interest", "");
            data.append("comment", "");
            if (formData.resume) data.append("resume", formData.resume);

            const res = await fetch("https://learning.studymonks.com/api/v1/career", {
                method: "POST",
                body: data,
            });

            const result = await res.json();

            if (res.ok && (result.status || result.success)) {
                setFormData({ name: "", email: "", phone: "", resume: null });
                setSuccess(true);
                router.push("/thankyou");
            } else {
                setError(result.message || "Submission failed");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }


    };

    const inputStyle = {
        backgroundColor: "#f8f8f8",
        borderRadius: "12px",
        fontSize: "12px",
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
        "&.Mui-focused": { boxShadow: "0 0 0 0.2rem rgba(0, 33, 71, 0.25)" },
    };

    return (<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
        fullWidth
        disableScrollLock
    >
        <IconButton
            aria-label="close"
            onClick={handleClose2}
            sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
                zIndex: 10,
            }}
        > <CloseIcon /> </IconButton>


        <DialogContent sx={{ p: 0 }}>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {!isMobile && (
                    <div
                        style={{
                            flex: "1 1 50%",
                            position: "relative",
                            minHeight: "520px",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src="/assets/img/study11-job.jpg"
                            alt="Study"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                )}

                <div
                    style={{
                        flex: "1 1 50%",
                        padding: "20px",
                        background: "#fff",
                    }}
                >
                    <h3
                        style={{
                            color: "#002147",
                            textAlign: "center",
                            marginBottom: "8px",
                        }}
                    >
                        “Turn your passion into profession”
                    </h3>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.name}
                            onChange={handleChange}
                            sx={inputStyle}
                        />
                        <TextField
                            name="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.email}
                            onChange={handleChange}
                            sx={inputStyle}
                        />
                        <TextField
                            name="phone"
                            label="Phone Number"
                            type="tel"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.phone}
                            onChange={handleChange}
                            sx={inputStyle}
                        />

                        <Button
                            variant="outlined"
                            component="label"
                            fullWidth
                            sx={{
                                mt: 2,
                                borderRadius: "12px",
                                textTransform: "none",
                            }}
                        >
                            {formData.resume ? formData.resume.name : "Upload Resume"}
                            <input
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                hidden
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setFormData({
                                            ...formData,
                                            resume: e.target.files[0],
                                        });
                                    }
                                }}
                            />
                        </Button>

                        {error && (
                            <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
                                {error}
                            </p>
                        )}
                        {success && (
                            <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>
                                Form submitted successfully!
                            </p>
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            sx={{
                                mt: 2,
                                background: "#002147",
                                color: "#fff",
                                borderRadius: "30px",
                                padding: "7px",
                                border: "2px solid #002147",
                                fontWeight: "600",
                                textTransform: "none",
                                transition: "0.3s",
                                "&:hover": {
                                    background: "transparent",
                                    color: "#002147",
                                },
                            }}
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </div>
            </div>
        </DialogContent>
    </Dialog>


    );
}
