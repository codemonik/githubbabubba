import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavMenu from './NavMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Git Hubba Bubba',
  description: 'Grab a Hubba Bubba and get to work!',
  icons: {
    icon: [
      '/favicon.ico'
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><NavMenu />{children}</body>
    </html>
  )
}
