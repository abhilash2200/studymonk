import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Guiding Pre-Teens Toward Purpose & Excellence",
  description: "Through Cambridge Lower Secondary, we help learners grow in skill, self-belief, and independence for the next big leap ahead.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export default function SecodaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={poppins.className}>
      {children}
    </div>
  );
}