import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Let’s Talk | Study Monk is Here to Guide You',
    description: 'Do you have a query or need support? Get in touch with our caring team at Study Monks! We’re just a message away from helping your child grow confidently.',
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