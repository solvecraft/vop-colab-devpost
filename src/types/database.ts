export const POVERTY_TYPES = [
  'Water',
  'Housing', 
  'Education',
  'Roads'
] as const

export type PovertyType = typeof POVERTY_TYPES[number]

export interface Profile {
  id: string
  email: string
  first_name: string
  last_name: string
  voice_level: number
  created_at: string
  updated_at: string
}

export interface Issue {
  id: string
  title: string
  description: string
  poverty_types: string[]
  country: string
  province: string
  city: string
  ngo: string | null
  author_id: string
  created_at: string
  updated_at: string
}

export interface Comment {
  id: string
  issue_id: string
  author_id: string
  content: string
  created_at: string
  updated_at: string
}

export interface IssueWithAuthor extends Issue {
  profiles: Profile
  comment_count?: number
}

export interface CommentWithAuthor extends Comment {
  profiles: Profile
}