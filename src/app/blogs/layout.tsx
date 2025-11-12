import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blogs of study Monks',
    description: 'The Heart of the Study Monks Promise',
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