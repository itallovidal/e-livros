import { Card } from './card.tsx'
import bookPlaceholderImage from '../assets/bookPlaceholderImage.png'
import {
  CardAndTitle,
  Section,
  StyledModelCard,
} from '../styles/modelCardStyle.ts'

interface ICardSection {
  name: string
  // books: any[]
}

export function CardSection({ name }: ICardSection) {
  return (
    <Section>
      <CardAndTitle>
        <h1>{name}</h1>
        <StyledModelCard>
          <Card imageSource={bookPlaceholderImage} title={'Livro1'} />
          <Card imageSource={bookPlaceholderImage} title={'Livro1'} />
          <Card imageSource={bookPlaceholderImage} title={'Livro1'} />
          <Card imageSource={bookPlaceholderImage} title={'Livro1'} />
        </StyledModelCard>
      </CardAndTitle>
    </Section>
  )
}
