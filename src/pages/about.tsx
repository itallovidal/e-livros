import { Main, Section } from '../styles/about/aboutStyle.ts'
import { SuggestionSection } from '../components/suggestionSection.tsx'

import { HomeHeader } from '../components/HomeHeader.tsx'
import { BookDetails } from '../components/bookDetails.tsx'

export function About() {
  return (
    <>
      <HomeHeader />
      <Main>
        <Section>
          <BookDetails />
        </Section>
        <SuggestionSection name={'Você Pode Gostar'} />
      </Main>
    </>
  )
}

// {show && <Booking img={book.img} title={book.title} mod={Modify} />}
