import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eli Horne - Design Leader & Mentor',
  description: "I'm a product design leader focused on building high performance teams and crafting impactful experiences that drive business value.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
