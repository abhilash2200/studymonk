import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Shape Futures — Join Our Mission',
    description: 'Bring your passion and purpose to Study Monks. Help us cultivate confidence, curiosity, and deep learning for children.',
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