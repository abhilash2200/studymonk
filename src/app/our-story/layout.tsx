import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Rooted in Purpose, Teaching with Heart',
    description: 'Discover the journey behind Study Monks — driven by compassion, clarity, and commitment to empower young learners.',
  }


export default function StoryLayout({
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