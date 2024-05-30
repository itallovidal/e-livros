import { Link } from 'react-router-dom'
import { FooterContainer } from '../styles/home/homeStyle.ts'

export function Footer({ category }: { category: string }) {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <FooterContainer>
      {pages.map((page) => (
        <Link key={page} to={`/${category}?offset=${page * 12 - 12}`}>
          {page}
        </Link>
      ))}
    </FooterContainer>
  )
}
