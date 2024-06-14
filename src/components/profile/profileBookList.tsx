import { useEffect, useState } from 'react'
import { getUserBooksFromOpenAPI } from '../../utils/openLibrary/getUserReadBooksFromOpenAPI.ts'
import { Loading } from '../loading.tsx'
import { Card } from '../card.tsx'
import { IBook } from '../../@types/openLibary'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Carousel responsive={responsive} className={'carouselBooks'}>
      {bookList.map((book, i) => (
        <Card
          delay={i}
          key={i}
          book={{
            ...book,
            category: '',
          }}
        />
      ))}
    </Carousel>
  )
}
