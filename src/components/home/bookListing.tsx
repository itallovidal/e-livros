import { Card } from '../card.tsx'
import { Loading } from '../loading.tsx'
import { IBookData } from '../../@types/openLibary'
import { fetchBooks } from '../../utils/openLibrary/fetchBooks.ts'
import { useEffect, useState } from 'react'

interface IBookListingProps {
  category: string
  offset: string
}

export function BookListing({ category, offset }: IBookListingProps) {
  const [bookList, setBookList] = useState<IBookData>({} as IBookData)
  const [loading, setLoading] = useState(true)

  async function fetchBooksData() {
    setLoading(true)

    const books = await fetchBooks(category, Number(offset))

    setBookList({
      books_count: books.work_count,
      books: [...books.works],
      category,
    })
  }

  useEffect(() => {
    fetchBooksData().finally(() => setLoading(false))
  }, [category, offset])

  if (loading) return <Loading />

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
