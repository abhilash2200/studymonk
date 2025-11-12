"use client";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Optional: Auto redirect to homepage after 8 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light"
      style={{
        background: "#eef2ff",
        color: "#fff",
      }}
    >
      <div className="card shadow-lg border-0 p-5" style={{ borderRadius: "1.5rem", maxWidth: "600px" }}>
        <div className="card-body">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Thank You"
            className="mb-4"
            width={100} height={100}
            style={{ width: "100px" }}
          />
          <h2 className="fw-bold mb-3 text-dark">Thank You!</h2>
          <p className="lead text-muted">
            Your application has been successfully submitted. Our team will get back to you soon.
          </p>

          <button
            onClick={() => router.push("/")}
            className="btn btn-primary btn-lg mt-4 px-5"
            style={{ borderRadius: "50px" }}
          >
            Go to Home
          </button>
        </div>
      </div>

      <p className="mt-4 small text-white-50">Redirecting to homepage in 8 seconds...</p>
    </div>
  );
}
