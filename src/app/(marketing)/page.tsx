import Link from 'next/link'

export default function Page() {
  return (
    <div className="prose prose-invert max-w-2xl">
      <h1>KI Compliance Dominator 2026</h1>
      <p>Deploy-ready Next.js skeleton for Netlify. Marketing pages + Dashboard stubs + API routes.</p>
      <ul>
        <li><Link href="/pricing">Pricing</Link></li>
        <li><Link href="/features">Features</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/tools/ai-act-checker">AI Act Checker</Link></li>
      </ul>
    </div>
  )
}
