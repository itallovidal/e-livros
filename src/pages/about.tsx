import {
  DivImgContainer,
  Header,
  Main,
  Section,
} from '../styles/about/aboutStyle.ts'
import ProfileButton from '../components/profileButton.tsx'
import { Button } from '../components/button.tsx'
import { BookBookmark, CaretLeft, Check, Heart } from 'phosphor-react'
import { SuggestionSection } from '../components/suggestionSection.tsx'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { IAboutBook } from '../@types/openLibary.d.ts'
import { Loading } from '../components/loading.tsx'

function About() {
  const { id } = useParams() as { id: string }
  const { state } = useLocation()
  const [book, setBook] = useState<IAboutBook>({} as IAboutBook)

  async function fetchAboutBook() {
    const URL = `https://openlibrary.org/works/${id}.json`

    const dados = await fetch(URL, {
      method: 'GET',
    })
    const dadosConvertidos = await dados.json()

    if (!dadosConvertidos.description) {
      setBook({
        ...dadosConvertidos,
        description: 'No Description Available.',
      })
      return
    }

    if (dadosConvertidos.description.value) {
      setBook({
        ...dadosConvertidos,
        description: dadosConvertidos.description.value,
      })
      return
    }

    setBook(dadosConvertidos)
  }

  useEffect(() => {
    fetchAboutBook()
  }, [id])

  return (
    <>
      <Header>
        <Button onClick={() => window.history.back()} variant={'transparent'}>
          <CaretLeft size={32} />
        </Button>
        <ProfileButton />
      </Header>
      <Main>
        <Section>
          <DivImgContainer>
            {book.title && (
              <>
                <img alt={'book'} src={state.cover} />
                <div>
                  <h1>{book.title}</h1>
                  <p>{book.description}</p>
                  {book.first_publish_date && (
                    <p>Release Date: {book.first_publish_date}</p>
                  )}

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
              </>
            )}
            {!book.description && <Loading />}
          </DivImgContainer>
        </Section>
        <SuggestionSection name={'Você Pode Gostar'} />
      </Main>
    </>
  )
}

export default About
