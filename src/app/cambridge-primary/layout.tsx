import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Building Bright Foundations for Young Minds',
    description: 'Inspire curiosity early! Study Monks’ Cambridge Primary program nurtures confidence, creativity, and a lifelong love for learning.',
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