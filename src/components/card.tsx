import { Button } from './button.tsx'
import { Heart, Plus } from 'phosphor-react'

import { CardContainer } from '../styles/CardStyle.ts'
import { useNavigate } from 'react-router-dom'
import type { IBook } from '../@types/openLibary.d.ts'
import { useEffect, useState } from 'react'
import { Loading } from './loading.tsx'

interface CardProps {
  book: IBook & {
    category: string
  }
  delay: number
}

export function Card({ book, delay }: CardProps) {
  const navigate = useNavigate()
  const [cover, setCover] = useState<false | string>(false)

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
    <CardContainer css={{ '--delay': `${(delay + 1) * 100}ms` }}>
      {cover && <img alt={'Imagem de livro'} src={cover} />}
      {!cover && <Loading />}
      <Button variant={'gray'}>
        <Heart size={32} />
      </Button>
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
