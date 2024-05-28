import { Button } from './Button.tsx'
import { Heart, Plus } from 'phosphor-react'

import { CardContainer } from '../styles/CardStyle.ts'
import { useNavigate } from 'react-router-dom'

interface CardProps {
  imageSource: string
  title: string
}

export function Card({ title, imageSource }: CardProps) {
  const navigate = useNavigate()

  return (
    <CardContainer>
      <Button variant={'gray'}>
        <Heart size={32} />
      </Button>
      <img alt={'Imagem de livro'} src={imageSource} />
      <label htmlFor="">{title}</label>
      <div>
        <Button onClick={() => navigate('/about/id/booked')} variant={'blue'}>Book</Button>
        <Button onClick={() => navigate('/about/id')} variant={'gray'}>
          <Plus size={32} />
        </Button>
      </div>
    </CardContainer>
  )
}
