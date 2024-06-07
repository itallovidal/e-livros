import { Card } from '../card.tsx'
import { Loading } from '../loading.tsx'
import { IBookData } from '../../@types/openLibary'
import { fetchBooks } from '../../utils/openLibrary/fetchBooks.ts'
import { useEffect, useState } from 'react'
import { searchBooks } from '../../utils/openLibrary/searchBook.ts'

interface IBookListingProps {
  category: string
  offset: string
  title: string | null
}

export function BookListing({ category, offset, title }: IBookListingProps) {
  const [bookList, setBookList] = useState<IBookData>({} as IBookData)
  const [loading, setLoading] = useState(true)

  console.log(bookList)
  async function fetchBooksData() {
    setLoading(true)
    let books = []

    if (category === 'search' && title) {
      books = await searchBooks(title)
      console.log(books)
    } else {
      const fetched = await fetchBooks(category, Number(offset))
      books = fetched.works
    }

    setBookList({
      books_count: books.work_count,
      books,
      category,
    })
  }

  useEffect(() => {
    fetchBooksData().finally(() => setLoading(false))
  }, [category, offset])

  if (loading) return <Loading />

  if (bookList?.books.length === 0) return <h1>Ops, no results found.</h1>

  return bookList?.books.map((book, i) => (
    <Card
      delay={i}
      key={i}
      book={{
        ...book,
        category: bookList.category,
      }}
    />
  ))
}
