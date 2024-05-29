import { Card } from '../components/card.tsx'
import bookPlaceholder2 from '../assets/bookPlaceholder2.jpg'
import { SearchInput } from '../components/searchInput.tsx'
import ProfileButton from '../components/profileButton.tsx'
import { Header, Main, Section, Footer } from '../styles/home/homeStyle.ts'
import { Categories } from '../components/home/categoryContainer.tsx'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IBookData } from '../interfaces.ts'
import { fetchBooks } from '../utils/fetchBooks.ts'
function Home() {
  const [booksData, setBooks] = useState<IBookData>({} as IBookData)
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const params = useLocation()

  async function fetchBooksData() {
    const category = params.pathname.slice(1).toLowerCase()
    const offset = params.search.slice(8)

    const books = await fetchBooks(category, Number(offset))

    setBooks({
      books_count: books.work_count,
      books: [...books.works],
      category,
    })
  }

  useEffect(() => {
    fetchBooksData()
  }, [params])

  return (
    <>
      <Header>
        <SearchInput />
        <ProfileButton name={'george'} profilePicture={bookPlaceholder2} />
      </Header>
      <Main>
        <Section>
          <Categories />
          {booksData.books_count &&
            booksData?.books.map((book, i) => (
              <Card
                key={i}
                book={{
                  ...book,
                  category: booksData.category,
                }}
              />
            ))}
        </Section>
        <Footer>
          {pages.map((page) => (
            <Link
              key={page}
              to={`/${booksData.category}?offset=${page * 12 - 12}`}
            >
              {page}
            </Link>
          ))}
        </Footer>
      </Main>
    </>
  )
}

export default Home
