import { categories } from '../utils/schemas.ts'

export interface IAuthor {
  key: string
  name: string
}

export interface IBook {
  title: string
  cover_id: number
  subject: string[]
  authors: IAuthor
  first_publish_year: number
  key: string
  category?: string
}

export interface IBookData {
  books: IBook[]
  books_count: number
  category: string
}

export interface IBookDetails {
  description: string
  first_publish_date: string
  title: string
  isRead: boolean
  isFavorite: boolean
  img: string
}

export type ICategories = typeof categories
