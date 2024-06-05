import {
  DivImgContainer,
  Header,
  Main,
  Section,
} from '../styles/about/aboutStyle.ts'
import ProfileButton from '../components/profileButton.tsx'
import { Button } from '../components/button.tsx'
import { BookBookmark, CaretLeft, Check, Heart } from 'phosphor-react'
import { SuggestionSection } from '../components/suggestionSection.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import type { IAboutBook } from '../@types/openLibary.d.ts'
import { Loading } from '../components/loading.tsx'
import { aboutBook } from '../utils/openLibrary/aboutBook.ts'
import { AppContext } from '../contexts/globalContext.tsx'
import { fetchBookCover } from '../utils/openLibrary/fetchBookCover.ts'
import { about } from '../utils/eLivrosAPI/about.ts'
import { readBook } from '../utils/eLivrosAPI/readBook.ts'
import { unreadBook } from '../utils/eLivrosAPI/unreadBook.ts'
import { favoriteBook } from '../utils/eLivrosAPI/favoriteBook.ts'
import { unfavoriteBook } from '../utils/eLivrosAPI/unfavoriteBook.ts'

function About() {
  const { id } = useParams() as { id: string }
  const { user } = useContext(AppContext)
  const [book, setBook] = useState<IAboutBook>({} as IAboutBook)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigate()
  async function handleRead(
    userToken: string,
    bookID: string,
    operation: boolean,
  ) {
    setLoading(true)

    if (operation) {
      await readBook(userToken, bookID)
      setBook((prevState) => {
        return {
          ...prevState,
          isRead: true,
        }
      })
      setLoading(false)
      return
    }

    await unreadBook(userToken, bookID)
    setBook((prevState) => {
      return {
        ...prevState,
        isRead: false,
      }
    })
    setLoading(false)
  }

  async function handleFavorite(
    userToken: string,
    bookID: string,
    operation: boolean,
  ) {
    if (operation) {
      await favoriteBook(userToken, bookID)
      setBook((prevState) => {
        return {
          ...prevState,
          isFavorite: true,
        }
      })
      setLoading(false)
      return
    }

    await unfavoriteBook(userToken, bookID)
    setBook((prevState) => {
      return {
        ...prevState,
        isFavorite: false,
      }
    })
    setLoading(false)
  }

  async function fetchAboutBook() {
    const bookData = await aboutBook(id)
    const img = await fetchBookCover(bookData.covers[0])

    if (user?.accessToken) {
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
    fetchAboutBook()
  }, [id])

  return (
    <>
      <Header>
        <Button onClick={() => window.history.back()} variant={'transparent'}>
          <CaretLeft size={32} />
        </Button>
        {user?.name ? (
          <ProfileButton />
        ) : (
          <Button
            onClick={() => navigation('/login')}
            variant={'blue'}
            children={'Login'}
          />
        )}
      </Header>
      <Main>
        <Section>
          <DivImgContainer>
            {book.title && (
              <>
                <img alt={'book'} src={book.img} />
                <div>
                  <h1>{book.title}</h1>
                  <p>{book.description}</p>
                  {book.first_publish_date && (
                    <p>Release Date: {book.first_publish_date}</p>
                  )}

                  <div className={'container_btns'}>
                    <Button variant={'blue'}>
                      Reservar
                      <BookBookmark size={32} />
                    </Button>
                    <Button
                      onClick={() =>
                        handleFavorite(user!.accessToken, id, !book.isFavorite)
                      }
                      disabled={!user?.accessToken || loading}
                      variant={book.isFavorite ? 'blue' : 'white'}
                    >
                      <Heart size={32} />
                    </Button>
                    <Button
                      onClick={() =>
                        handleRead(user!.accessToken, id, !book.isRead)
                      }
                      disabled={!user?.accessToken || loading}
                      variant={book.isRead ? 'blue' : 'white'}
                    >
                      Lido
                      <Check size={32} />
                    </Button>
                  </div>
                </div>
              </>
            )}
            {!book.description && <Loading />}
          </DivImgContainer>
        </Section>
        <SuggestionSection name={'Você Pode Gostar'} />
      </Main>
    </>
  )
}

export default About
