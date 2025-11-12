import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Mentors Who Care, Teach, and Inspire',
    description: 'Meet the heart of Study Monks — mentors chosen for empathy, expertise, and ability to uplift each student’s growth.',
  }


export default function PrimaryLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          {children}
          
        </>
    )
}