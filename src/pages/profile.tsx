import { Button } from '../components/button.tsx'
import { CaretLeft, SignOut } from 'phosphor-react'
import { Header, Main, Section } from '../styles/profile/profileStyle.ts'
import ProfileButton from '../components/profileButton.tsx'
import { useContext, useState } from 'react'
import { AppContext } from '../contexts/globalContext.tsx'
// import bookPlaceholderImage from '../assets/bookPlaceholderImage.png'
import { aboutBook } from '../utils/openLibrary/aboutBook.ts'
import { fetchBookCover } from '../utils/openLibrary/fetchBookCover.ts'
import { about } from '../utils/eLivrosAPI/about.ts'
import type { IAboutBook } from '../@types/openLibary'
import { Card } from '../components/card.tsx'
import { Loading } from '../components/loading.tsx'

function Profile() {
  const { logOutUser } = useContext(AppContext)

  const [loading, setLoading] = useState(false)
  const { user } = useContext(AppContext)
  const [book, setBook] = useState<IAboutBook>({} as IAboutBook)

  async function fetchAboutBook() {
    const bookData = await aboutBook('OL1003017W')
    const img = await fetchBookCover(bookData.covers[0])

    if (user?.accessToken) {
      const { isRead, isFavorite } = await about(user?.accessToken, 'OL1003017W')
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

  return (
    <>
      <Header>
        <Button onClick={() => window.history.back()} variant={'transparent'}>
          <CaretLeft size={32} />
        </Button>
        <ProfileButton />
        <Button variant={'transparent'} onClick={logOutUser}>
          <SignOut size={32} />
        </Button>
      </Header>
      <Main>
        <Section>
          <div>
            <h1>Alugados</h1>
          </div>
        </Section>
        <Section>
          <div>
            <h1>Favoritos</h1>
            {!loading &&
              books.map((book, i) => <Card delay={i} key={i} book={book} />)}
            {loading && <Loading />}
          </div>
        </Section>
        <Section>
          <div>
            <h1>Lidos</h1>
          </div>
        </Section>
      </Main>
    </>
  )
}

export default Profile
