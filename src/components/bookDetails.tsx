import { BookDetailsContainer } from '../styles/about/aboutStyle.ts'
import { IBookDetails } from '../@types/openLibary'
import { ReadBookButton } from './readBookButton.tsx'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/globalContext.tsx'
import { useParams } from 'react-router-dom'
import { Loading } from './loading.tsx'
import { FavoriteBookButton } from './favoriteBookButton.tsx'
import { aboutBook } from '../utils/openLibrary/aboutBook.ts'
import { fetchBookCover } from '../utils/openLibrary/fetchBookCover.ts'
import { about } from '../utils/eLivrosAPI/about.ts'

export function BookDetails() {
  const { user } = useContext(AppContext)
  const { id } = useParams() as { id: string }
  const [book, setBook] = useState<IBookDetails>({} as IBookDetails)
  const [loading, setLoading] = useState(true)
  console.log(user)

  console.log('->')
  console.log(book)

  async function fetchAboutBook() {
    setLoading(true)
    const bookData = await aboutBook(id)
    const img = await fetchBookCover(bookData.covers[0])

    if (user?.accessToken) {
      console.log('->')
      console.log('entrou')
      const { isRead, isFavorite } = await about(user?.accessToken, id)
      setBook({
        ...bookData,
        img,
        isRead,
        isFavorite,
      })

      return
    }

    setBook({
      ...bookData,
      img,
      isRead: false,
      isFavorite: false,
    })
  }
  useEffect(() => {
    fetchAboutBook().finally(() => setLoading(false))
  }, [id, user])

  if (loading) return <Loading />

  return (
    <BookDetailsContainer>
      <img alt={'book'} src={book.img} />
      <div>
        <h1>{book.title}</h1>
        <p>{book.description}</p>
        {book.first_publish_date && (
          <p>Release Date: {book.first_publish_date}</p>
        )}

        <div className={'container_btns'}>
          <ReadBookButton id={id} isAlreadyRead={book.isRead} />
          <FavoriteBookButton id={id} isAlreadyFavorite={book.isFavorite} />
        </div>
      </div>
    </BookDetailsContainer>
  )
}
