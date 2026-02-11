import Link from 'next/link'
import { listPosts } from '@/lib/blog'

export default function Blog() {
  const posts = listPosts()
  return (
    <div className="prose prose-invert max-w-3xl">
      <h1>Blog</h1>
      <ul>
        {posts.map(p => (
          <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link></li>
        ))}
      </ul>
    </div>
  )
}
