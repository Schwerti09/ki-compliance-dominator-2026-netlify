import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <nav style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Link href="/">KI Compliance Dominator</Link>
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  )
}
