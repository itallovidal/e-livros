import { Button } from './Button.tsx'
import { Heart, Plus } from 'phosphor-react'

import { CardContainer } from '../styles/CardStyle.ts'
import { useNavigate } from 'react-router-dom'
import bookPlaceholderImage from '../assets/404.png'
import { IBook } from '../interfaces.ts'
import { useEffect, useState } from 'react'
interface CardProps {
  book: IBook & {
    category: string
  }
}

export function Card({ book }: CardProps) {
  const navigate = useNavigate()
  const [cover, setCover] = useState(bookPlaceholderImage)

  async function fetchCover() {
    if (book.cover_id != null) {
      const dados = await fetch(
        `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
        {
          method: 'GET',
        },
      )
      const img = await dados.blob()
      setCover(URL.createObjectURL(img))
    }
  }

  useEffect(() => {
    fetchCover()
  }, [book])

  return (
    <CardContainer>
      <Button variant={'gray'}>
        <Heart size={32} />
      </Button>
      <img alt={'Imagem de livro'} src={cover} />
      <label htmlFor="">{book.title}</label>
      <div>
        <Button onClick={() => navigate('/about/id/booked')} variant={'blue'}>
          Book
        </Button>
        <Button
          onClick={() =>
            navigate(`/${book.category}/about/${book.key.substring(7)}`, {
              state: {
                cover,
              },
            })
          }
          variant={'gray'}
        >
          <Plus size={32} />
        </Button>
      </div>
    </CardContainer>
  )
}
