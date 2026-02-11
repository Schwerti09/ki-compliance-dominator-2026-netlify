import { getPost } from '@/lib/blog'
import { marked } from 'marked'

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return <div className="prose prose-invert">Not found.</div>
  const html = marked.parse(post.content)
  return (
    <article className="prose prose-invert max-w-3xl">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
