import { Card } from '../components/card.tsx'
import bookPlaceholder2 from '../assets/bookPlaceholder2.jpg'
import { SearchInput } from '../components/searchInput.tsx'
import ProfileButton from '../components/profileButton.tsx'
import { Header, Main, Section, Footer } from '../styles/home/homeStyle.ts'
import { Categories } from '../components/home/categoryContainer.tsx'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IBookData } from '../interfaces.ts'
function Home() {
  const [booksData, setBooks] = useState<IBookData>({} as IBookData)
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const params = useLocation()
  console.log(params)

  async function fetchBooks(category: string, offset: number) {
    if (category.includes('%20')) {
      category = category.replace('%20', '_')
    }

    const URL = `https://openlibrary.org/subjects/${category}.json?offset=${offset}`
    console.log(URL)

    const dados = await fetch(URL, {
      method: 'GET',
    })
    const dadosConvertidos = await dados.json()
    console.log(dadosConvertidos)
    setBooks({
      books_count: dadosConvertidos.work_count,
      books: [...dadosConvertidos.works],
    })
  }

  useEffect(() => {
    const category = params.pathname.slice(1).toLowerCase()
    const offset = params.search.slice(8)

    fetchBooks(category, Number(offset))
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
            booksData?.books.map((book, i) => <Card key={i} book={book} />)}
        </Section>
        <Footer>
          {pages.map((page) => (
            <Link key={page} to={`/categoria?offset=${page}`}>
              {page}
            </Link>
          ))}
        </Footer>
      </Main>
    </>
  )
}

export default Home
