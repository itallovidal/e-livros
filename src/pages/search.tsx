import { Card } from '../components/card.tsx'
import { SearchInput } from '../components/searchInput.tsx'
import ProfileButton from '../components/profileButton.tsx'
import { Header, Main, Section } from '../styles/home/homeStyle.ts'
import { Categories } from '../components/home/categoryContainer.tsx'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import type { IBookData } from '../@types/openLibary.d.ts'
import { Loading } from '../components/loading.tsx'
import { usePageParams } from '../components/usePageParams.tsx'
import { searchBooks } from '../utils/openLibrary/searchBook.ts'
import { Button } from '../components/button.tsx'
import { AppContext } from '../contexts/globalContext.tsx'
export function Search() {
  const [booksData, setBooks] = useState<IBookData>({
    books: [],
    category: '',
    books_count: 0,
  })
  const [loading, setLoading] = useState(true)
  const { path, title } = usePageParams()
  const navigation = useNavigate()

  const { user } = useContext(AppContext)
  console.log(booksData.books.length)

  async function fetchBooksData() {
    setLoading(true)

    if (!title) {
      console.log('a')
      return
    }

    const books = await searchBooks(title)

    setBooks({
      books_count: 0,
      books,
      category: path,
    })
  }

  useEffect(() => {
    fetchBooksData().finally(() => setLoading(false))
  }, [path])

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
        <p> Your results for {title}.</p>
        <Button
          onClick={() => navigation('/architecture?offset=1')}
          variant={'transparent'}
        >
          Clear search query.
        </Button>
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

          {!loading && booksData?.books.length === 0 && (
            <h1>Ops, no results found.</h1>
          )}
        </Section>
      </Main>
    </>
  )
}
