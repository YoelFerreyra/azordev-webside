import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Azordev - Desarrollo Web Profesional',
  description: 'Desarrollo de aplicaciones web a medida',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
