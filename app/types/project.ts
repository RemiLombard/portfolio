export interface Project {
  id: number
  created_at: string
  title: string
  slug: string
  category: 'web' | 'design' | 'video' | 'communication'
  introduction: string
  description: string | null
  image_url: string | null
  gallery: string[]
  tags: string[]
  link: string | null
  featured: boolean
  order: number
}
