import { useEffect, useState } from 'react'
import { getUserBooksFromOpenAPI } from '../../utils/openLibrary/getUserReadBooksFromOpenAPI.ts'
import { Loading } from '../loading.tsx'
import { Card } from '../card.tsx'
import { IBook } from '../../@types/openLibary'

export function ProfileBookList({
  books,
}: {
  books: {
    id: string
    user_id: string
    book_id: string
    created_at: Date
  }[]
}) {
  const [loading, setLoading] = useState(false)
  const [bookList, setBookList] = useState<IBook[]>()

  useEffect(() => {
    if (books) {
      setLoading(true)
      getUserBooksFromOpenAPI(books)
        .then((data) => {
          setBookList(data)
        })
        .finally(() => setLoading(false))
    }
  }, [])

  console.log(books)

  if (loading || !bookList) return <Loading />

  return bookList.map((book, i) => (
    <Card
      delay={i}
      key={i}
      book={{
        ...book,
        category: '',
      }}
    />
  ))
}
