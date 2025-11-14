"use client";

import { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Image from "next/image";
import PopupForm from "../component/PopupForm";
import { FaRegCheckCircle } from "react-icons/fa";
import pricingData, { type Stage } from "../data/Prices";

interface StagePricingDetailedProps {
  activeStage: Stage;
  setActiveStage: (stage: Stage) => void;
}

export default function StagePricingDetailed({
  activeStage,
  setActiveStage,
}: StagePricingDetailedProps) {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const stageInfo = pricingData[activeStage];

  const stageOptions: { value: Stage; label: string }[] = [
    { value: "stage4", label: "Stage 4" },
    { value: "stage5", label: "Stage 5" },
    { value: "stage6", label: "Stage 6" },
    { value: "stage7", label: "Stage 7" },
    { value: "stage8", label: "Stage 8" },
    { value: "stage9", label: "Stage 9" },
  ];

  const toggleSubject = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const subjectDescriptions: Record<string, string> = {
    Math: "Builds strong problem-solving skills.",
    English: "Develops powerful communication.",
    Science: "Sparks curiosity and discovery.",
  };

  const subjectCount = selectedSubjects.length;

  // Calculate final total based on selected subjects
  // Each item costs the same: subjectCount × single price
  const finalTotal = subjectCount * stageInfo.single;

  // Calculate individual subject price (single price per subject)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const subjectPrice = (_subject: string) => {
    return stageInfo.single;
  };

  // Calculate discount for left side (Ultimate Advantage Package)
  // Right side uses simple multiplication, so no discount calculation needed
  const calculateLeftSideDiscount = () => {
    if (subjectCount === 0) return { amount: 0, percent: 0 };

    const individualTotal = subjectCount * stageInfo.single;
    let discountAmount = 0;
    let discountPercent = 0;

    if (subjectCount === 2) {
      discountAmount = individualTotal - stageInfo.combo2;
      // Extract percentage from save2 string (e.g., "~14% Savings" -> 14)
      const percentMatch = stageInfo.save2.match(/(\d+)%/);
      discountPercent = percentMatch ? parseInt(percentMatch[1]) : 0;
    } else if (subjectCount === 3) {
      discountAmount = individualTotal - stageInfo.combo3;
      // Extract percentage from save3 string (e.g., "~25% Savings" -> 25)
      const percentMatch = stageInfo.save3.match(/(\d+)%/);
      discountPercent = percentMatch ? parseInt(percentMatch[1]) : 0;
    }

    return { amount: discountAmount, percent: discountPercent };
  };

  const { amount: discountAmount, percent: discountPercent } = calculateLeftSideDiscount();

  // Calculate left side price from static data based on selected subjects
  let leftSidePrice = 0;
  if (subjectCount === 1) leftSidePrice = stageInfo.single;
  else if (subjectCount === 2) leftSidePrice = stageInfo.combo2;
  else if (subjectCount === 3) leftSidePrice = stageInfo.combo3;

  const getHeading = () => {
    if (subjectCount === 1) return "Single Subject Plan (Monthly Fee)";
    if (subjectCount === 2) return "Two-Subject Bundle (Monthly Fee)";
    if (subjectCount === 3)
      return "Three-Subject Achiever Bundle (Monthly Fee)";
    return "Build a Custom Plan";
  };

  const formatINR = (value: number) =>
    value.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="tab-sec mb" id="price">
      {/* ✅ Always show tabs (removed mobile dropdown) */}
      <Container className="my-5">
        <div className="mb-5">
          <Nav
            variant="pills"
            activeKey={activeStage}
            onSelect={(selectedKey) =>
              selectedKey && setActiveStage(selectedKey as Stage)
            }
            className="justify-content-center flex-wrap gap-2 gap-md-3 px-2"
          >
            {stageOptions.map(({ value, label }) => (
              <Nav.Item key={value} className="flex-grow-1 flex-md-grow-0" style={{ minWidth: "120px" }}>
                <Nav.Link
                  eventKey={value}
                  className="w-100 text-center shadow-sm border"
                  style={{
                    borderRadius: "999px",
                    fontWeight: 600,
                    borderColor: activeStage === value ? "#01356C" : "rgba(1, 53, 108, 0.15)",
                    color: activeStage === value ? "#fff" : "#01356C",
                    backgroundColor:
                      activeStage === value ? "#01356C" : "rgba(1, 53, 108, 0.05)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <Row className="align-items-stretch">
          <Col md={6}>
            <div className="gr-jg">
              <div className="text-center">
                <h3 id="pyhs">The Ultimate Advantage Package</h3>
                <p>
                  For the parent committed to providing a decisive academic
                  edge.
                </p>
                <p>
                  This holistic package fosters unshakeable confidence and a
                  lifelong love of learning that goes far beyond exams.
                </p>
                <div className="d-flex bgfxz justify-content-center">
                  {["Math", "English", "Science"].map((s) => (
                    <div
                      key={s}
                      className="fw-bold text-success d-flex mathc mx-2 align-items-center"
                    >
                      <Image
                        src="/assets/img/tick-circle2.png"
                        alt="tick"
                        width={25}
                        height={25}
                        className="me-2"
                      />
                      <h5 className="fw-bold text-success m-0">{s}</h5>
                    </div>
                  ))}
                </div>

                <div className="twelvex my-3">
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                    <p className="mb-0">You Pay Only</p>
                  </div>
                  <h3 id="pyhs" className="mb-2">
                    {subjectCount > 0 ? `₹${formatINR(leftSidePrice)}` : "—"}
                  </h3>
                  <div
                    style={{
                      height: "44px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        padding: "6px 16px",
                        color: "#198754",
                        opacity: subjectCount > 1 && discountAmount > 0 ? 1 : 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <div style={{ fontSize: 14 }}>
                        You save <strong>{discountPercent}%</strong> on
                        this bundle
                      </div>
                      <div
                        style={{ fontWeight: 700, color: "#01356C", minWidth: "80px", textAlign: "right" }}
                      >
                        - ₹{formatINR(discountAmount)}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="btn-frd mt-3"
                  onClick={handleClickOpen}
                >
                  Start your 7 day free trial
                </button>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="secd-bcx text-center">
              <h3 id="pyhs" className="mb-2" style={{ minHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {getHeading()}
              </h3>
              <p>Focus on specific areas with a flexible plan you design.</p>

              <div
                className="text-start mt-3"
                style={{ maxWidth: 520, margin: "0 auto" }}
              >
                {(["Math", "English", "Science"] as string[]).map((sub) => {
                  const isSelected = selectedSubjects.includes(sub);
                  return (
                    <div
                      key={sub}
                      className={`d-flex align-items-center justify-content-between mb-3 px-3 py-2 rounded-4`}
                      style={{
                        background: isSelected ? "#F3FFF2" : "#F3F8FF",
                        border: isSelected ? "1px solid #198754" : "1px solid transparent",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        minHeight: "80px",
                      }}
                      onClick={() => toggleSubject(sub)}
                    >
                      <div className="d-flex align-items-start">
                        <div>
                          <FaRegCheckCircle
                            size={18}
                            color={isSelected ? "#198754" : "#6c757d"}
                            className="my-3 me-3"
                          />
                        </div>

                        <div>
                          <div
                            className="monthg"
                            style={{
                              fontWeight: 600,
                              color: isSelected ? "#198754" : "#001F3F", // ✅ subject text color change
                            }}
                          >
                            {sub}
                          </div>
                          <div style={{ color: "#6c757d", fontSize: 14 }}>
                            {subjectDescriptions[sub]}
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          fontWeight: 700,
                          color: isSelected ? "#198754" : "#01356C", // ✅ price color match
                        }}
                      >
                        ₹{formatINR(subjectPrice(sub))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                style={{ maxWidth: 520, margin: "10px auto 0" }}
                className="text-start"
              >
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ padding: "0px 16px" }}
                >
                  <div style={{ color: "#6c757d" }}>Your Monthly Plan</div>

                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#01356C",
                      minWidth: "80px",
                      textAlign: "right",
                    }}
                  >
                    {subjectCount > 0
                      ? `₹${formatINR(finalTotal)}`
                      : `—`}
                  </div>
                </div>



                <div style={{ height: "13px", overflow: "hidden" }}>
                  <hr
                    style={{
                      borderTop: "1px solid #e9eef3",
                      margin: "12px 0",
                      opacity: subjectCount > 0 ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </div>

                <div className="text-center mt-3">
                  <button
                    className="mentr"
                    onClick={handleClickOpen}
                  >
                    Start your 7 day free trial
                  </button>
                </div>
              </div>
            </div>
            <PopupForm open={open} handleClose={handleClose} />
          </Col>
        </Row>

        <div className="text-center mt-4">
          <p className="notex">
            <b>Please Note:</b> Enrollment for the current term is closing soon.
            Limited spots available.
          </p>
        </div>
      </Container>
    </section>
  );
}
