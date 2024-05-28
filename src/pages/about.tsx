import {
  DivImgContainer,
  Header,
  Main,
  Section,
} from '../styles/about/aboutStyle.ts'
import ProfileButton from '../components/profileButton.tsx'
import bookPlaceholderImage from '../assets/bookPlaceholderImage.png'
import bookPlaceholder2 from '../assets/bookPlaceholder2.jpg'
import { Button } from '../components/Button.tsx'
import { BookBookmark, CaretLeft, Check, Heart } from 'phosphor-react'
import { CardSection } from '../components/cardSection.tsx'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigation = useNavigate()

  return (
    <>
      <Header>
        <Button onClick={() => navigation('/all')} variant={'transparent'}>
          <CaretLeft size={32} />
        </Button>
        <ProfileButton name={'george'} profilePicture={bookPlaceholder2} />
      </Header>
      <Main>
        <Section>
          <DivImgContainer>
            <img alt={'book'} src={bookPlaceholderImage} />
            <div>
              <h1>Livro 1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci aspernatur corporis dignissimos distinctio doloremque
                earum est et facilis magnam, minima mollitia nam nisi officiis
                perspiciatis quas quibusdam, quos repellendus velit! Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Adipisci aliquam
                amet autem doloremque dolores et incidunt laborum, nulla
                officiis omnis possimus quae quos reiciendis repellat sapiente
                sequi tempora ut veniam?
              </p>

              <div className={'container_btns'}>
                <Button variant={'blue'}>
                  Reservar
                  <BookBookmark size={32} />
                </Button>
                <Button variant={'white'}>
                  <Heart size={32} />
                </Button>
                <Button variant={'white'}>
                  Lido
                  <Check size={32} />
                </Button>
              </div>
            </div>
          </DivImgContainer>
        </Section>
        <CardSection name={'Você Pode Gostar'} />
      </Main>
    </>
  )
}

export default About
