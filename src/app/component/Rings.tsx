"use client";

import { useState, useMemo, useEffect } from "react";
import styles from "./Rings.module.css";

type RingType =
  | "create"
  | "evaluate"
  | "analyze"
  | "apply"
  | "understand"
  | "remember";

const colors: Record<RingType, string> = {
  create: "linear-gradient(135deg, #AEDAC1, #BEE6D0)",
  evaluate: "linear-gradient(135deg, #91C9AE, #A8E1BF)",
  analyze: "linear-gradient(135deg, #B1DDCC, #D0F0E0)",
  apply: "linear-gradient(135deg, #BBDEC8, #D4EFE0)",
  understand: "linear-gradient(135deg, #C5E5D5, #E0F6ED)",
  remember: "linear-gradient(135deg, #E9F1EF, #F5FBF9)",
};

const MOBILE_BASE_SIZE = 300;

const ringList: { type: RingType | "outer"; label: string; sizeRatio: number }[] = [
  { type: "outer", label: "", sizeRatio: 0.95 },
  { type: "create", label: "Create", sizeRatio: 0.85 },
  { type: "evaluate", label: "Evaluate", sizeRatio: 0.72 },
  { type: "analyze", label: "Analyze", sizeRatio: 0.6 },
  { type: "apply", label: "Apply", sizeRatio: 0.48 },
  { type: "understand", label: "Understand", sizeRatio: 0.35 },
  { type: "remember", label: "Remember", sizeRatio: 0.22 },
];

const circlePathD = (cx: number, cy: number, r: number) =>
  `M ${cx - r}, ${cy} a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 ${-r * 2},0`;

export default function Rings() {
  const [activeRing, setActiveRing] = useState<RingType>("evaluate");
  const [containerSize, setContainerSize] = useState(MOBILE_BASE_SIZE);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const maxWidth = Math.min(window.innerWidth, 500);
      const newSize = Math.max(Math.min(maxWidth * 0.9, 500), MOBILE_BASE_SIZE);
      setContainerSize(newSize);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rings = useMemo(
    () =>
      ringList.map((ring) => ({
        ...ring,
        size: containerSize * ring.sizeRatio,
      })),
    [containerSize]
  );

  const cx = containerSize / 2;
  const cy = containerSize / 2;
  const pad = containerSize * 0.02;

  const paths = useMemo(() => {
    return rings.reduce<Record<string, string>>((acc, ring) => {
      const r = Math.max(ring.size / 2 - pad, 0);
      acc[ring.type] = circlePathD(cx, cy, r);
      return acc;
    }, {});
  }, [cx, cy, pad, rings]);

  return (
    <div
      className={styles.targetSection}
      style={{ width: containerSize, height: containerSize }}
    >
      {rings.map((ring) => {
        const isActive = activeRing === ring.type;
        return (
          <div
            key={ring.type}
            className={`${styles.ring} ${styles[ring.type] || ""}`}
            style={{
              width: ring.size,
              height: ring.size,
              background:
                ring.type === "outer"
                  ? "rgba(215,236,229,0.4)"
                  : isActive
                  ? colors[ring.type as RingType]
                  : "#D7ECE5",
            }}
            onClick={() => ring.type !== "outer" && setActiveRing(ring.type as RingType)}
          />
        );
      })}

      <svg
        className={styles.svgOverlay}
        viewBox={`0 0 ${containerSize} ${containerSize}`}
        width={containerSize}
        height={containerSize}
      >
        <defs>
          {rings.map((ring) => (
            <path
              key={`path-${ring.type}`}
              id={`path-${ring.type}`}
              d={paths[ring.type]}
              transform={`rotate(-90 ${cx} ${cy})`}
            />
          ))}
        </defs>

        {rings.map((ring) => (
          <text
            key={`text-${ring.type}`}
            className={styles.ringText}
            style={{
              fontWeight: activeRing === ring.type ? 700 : 500,
              fontSize: containerSize * 0.024,
            }}
          >
            <textPath
              href={`#path-${ring.type}`}
              startOffset="50%"
              textAnchor="middle"
              letterSpacing="0.5px"
            >
              {ring.label}
            </textPath>
          </text>
        ))}
      </svg>
    </div>
  );
}
