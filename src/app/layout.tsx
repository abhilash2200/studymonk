import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';

import BootstrapClient from '../app/BootstrapClient';


// Fonts config
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // jitne weights chahiye
  display: "swap",
  variable: '--font-poppins' // CSS variable ka naam
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata with type
export const metadata: Metadata = {
  title: 'Unleash Confidence & Focus in Cambridge Learning',
  description: 'Join Study Monks — where expert mentors ignite your child’s voice and guide them confidently through the Cambridge path to mastery.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="hydrated">
      {/* Apply fonts */}
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}