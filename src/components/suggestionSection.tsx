import { Card } from './card.tsx'
import {
  CardAndTitle,
  Section,
  StyledModelCard,
} from '../styles/modelCardStyle.ts'
import { useParams } from 'react-router-dom'
import { fetchBooks } from '../utils/openLibrary/fetchBooks.ts'
import { useEffect, useState } from 'react'
import type { IBookData } from '../@types/openLibary.d.ts'

interface ICardSection {
  name: string
}

export function SuggestionSection({ name }: ICardSection) {
  const { category } = useParams() as { category: string }
  const [booksData, setBooks] = useState<IBookData>({} as IBookData)

  async function fetchSuggestionBooks() {
    const books = await fetchBooks(category, 10, 3)

    setBooks({
      books_count: books.work_count,
      books: [...books.works],
      category,
    })
  }

  useEffect(() => {
    fetchSuggestionBooks()
  }, [category])

  if (category === 'search' || category === 'profile') return <></>

  return (
    <Section>
      <CardAndTitle>
        <h1>{name}</h1>
        <StyledModelCard>
          {booksData.books_count &&
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
        </StyledModelCard>
      </CardAndTitle>
    </Section>
  )
}
