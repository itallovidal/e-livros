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
}

export interface IBookData {
  books: IBook[]
  books_count: number
}
