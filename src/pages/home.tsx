import { Card } from '../components/card.tsx'
import { SearchInput } from '../components/searchInput.tsx'
import ProfileButton from '../components/profileButton.tsx'
import { Header, Main, Section } from '../styles/home/homeStyle.ts'
import { Categories } from '../components/home/categoryContainer.tsx'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import type { IBookData } from '../@types/openLibary.d.ts'
import { fetchBooks } from '../utils/openLibrary/fetchBooks.ts'
import { Loading } from '../components/loading.tsx'
import { Footer } from '../components/footer/footer.tsx'
import { usePageParams } from '../components/usePageParams.tsx'
import { AppContext } from '../contexts/globalContext.tsx'
import { Button } from '../components/button.tsx'
import { categories } from '../utils/schemas.ts'

export function Home() {
  const [booksData, setBooks] = useState<IBookData>({} as IBookData)
  const [loading, setLoading] = useState(true)
  const { path, offset } = usePageParams()
  const navigation = useNavigate()
  const { user } = useContext(AppContext)

  console.log(user)

  async function fetchBooksData() {
    setLoading(true)

    const books = await fetchBooks(path, Number(offset))

    setBooks({
      books_count: books.work_count,
      books: [...books.works],
      category: path,
    })
  }

  useEffect(() => {

    if (!path) {
      console.log('sem categoria informada.')
      navigation('/architecture?offset=1')
      return
    }

    if (!categories.includes(path)) {
      console.log('categoria informada errada.')
      navigation('/architecture?offset=1')
      return
    }

    fetchBooksData().finally(() => setLoading(false))
  }, [path, offset])

  return (
    <>
      <Header>
        <SearchInput />
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
          <Categories />
          {!loading &&
            booksData?.books.map((book, i) => (
              <Card
                delay={i}
                key={i}
                book={{
                  ...book,
                  category: booksData.category,
                }}
              />
            ))}

          {loading && <Loading />}
        </Section>
        {!loading && <Footer category={booksData.category} />}
      </Main>
    </>
  )
}
