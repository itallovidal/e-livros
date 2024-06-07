import { Button } from './button.tsx'
import { Plus } from 'phosphor-react'

import { CardContainer } from '../styles/CardStyle.ts'
import { useNavigate } from 'react-router-dom'
import type { IBook } from '../@types/openLibary.d.ts'
import { useEffect, useState } from 'react'
import { Loading } from './loading.tsx'
import { fetchBookCover } from '../utils/openLibrary/fetchBookCover.ts'

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
      const img = await fetchBookCover(book.cover_id)
      setCover(img)
    }
  }

  useEffect(() => {
    fetchCover()
  }, [book])

  return (
    <CardContainer css={{ '--delay': `${(delay + 1) * 100}ms` }}>
      {cover && <img alt={'Imagem de livro'} src={cover} />}
      {!cover && <Loading />}

      <div>
        <label htmlFor="">{book.title}</label>

        <Button
          onClick={() =>
            navigate(`/${book.category}/about/${book.key.substring(7)}`)
          }
          variant={'gray'}
        >
          <Plus size={32} />
        </Button>
      </div>
    </CardContainer>
  )
}
