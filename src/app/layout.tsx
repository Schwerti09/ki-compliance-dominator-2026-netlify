import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export const metadata: Metadata = { title: 'KI Compliance Dominator 2026' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main style={{ minHeight: '70vh', padding: '24px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
