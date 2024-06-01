import { Card } from '../components/card.tsx'
import { SearchInput } from '../components/searchInput.tsx'
import ProfileButton from '../components/profileButton.tsx'
import { Header, Main, Section } from '../styles/home/homeStyle.ts'
import { Categories } from '../components/home/categoryContainer.tsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { categories, IBookData } from '../interfaces.ts'
import { fetchBooks } from '../utils/fetchBooks.ts'
import Loading from '../components/loading.tsx'
import { Footer } from '../components/Footer.tsx'
function Home() {
  const [booksData, setBooks] = useState<IBookData>({} as IBookData)
  const [loading, setLoading] = useState(true)
  const params = useLocation()
  const navigation = useNavigate()

  async function fetchBooksData() {
    setLoading(true)
    const category = params.pathname.slice(1).toLowerCase()
    const offset = params.search.slice(8)

    const books = await fetchBooks(category, Number(offset))

    setBooks({
      books_count: books.work_count,
      books: [...books.works],
      category,
    })
    setLoading(false)
  }

  useEffect(() => {
    let category = params.pathname.slice(1)
    if (category.includes('%20')) {
      category = category.replace('%20', ' ')
    }

    if (!category) {
      console.log('sem categoria informada.')
      navigation('/architecture?offset=1')
      return
    }

    if (!categories.includes(category)) {
      console.log('categoria informada errada.')
      navigation('/architecture?offset=1')
      return
    }

    fetchBooksData()
  }, [params])

  return (
    <>
      <Header>
        <SearchInput />
        <ProfileButton name={'george'} />
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

export default Home
