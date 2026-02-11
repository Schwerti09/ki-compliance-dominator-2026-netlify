import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog')

export function listPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const slug = f.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), 'utf8')
      const { data } = matter(raw)
      return { slug, title: (data.title as string) || slug }
    })
}

export function getPost(slug: string) {
  const file = path.join(BLOG_DIR, `${slug}.md`)
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  return { slug, frontmatter: data as Record<string, unknown>, content }
}
