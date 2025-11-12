import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Plans & Pricing',
    description: 'Plans & Pricing of Study Monks ',
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