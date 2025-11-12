import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Got Questions? We’ve Got Clear Answers',
    description: 'Find honest, helpful answers to your Study Monks queries — from programs and pricing to how we make every child feel seen and supported.',
  }


export default function FaqLayout({
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