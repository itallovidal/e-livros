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
}

export interface IBookData {
  books: IBook[]
  books_count: number
  category: string
}

export interface IAboutBook {
  description: string
  first_publish_date: string
  title: string
}

export type ICategories = typeof categories
