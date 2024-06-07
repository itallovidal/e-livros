import { SearchInput } from '../components/searchInput.tsx'
import ProfileButton from '../components/profileButton.tsx'
import { Header, Main, Section } from '../styles/home/homeStyle.ts'
import { Categories } from '../components/home/categoryContainer.tsx'
import { Footer } from '../components/footer/footer.tsx'
import { usePageParams } from '../components/usePageParams.tsx'
import { BookListing } from '../components/home/bookListing.tsx'

export function Home() {
  const { path, offset } = usePageParams()

  return (
    <>
      <Header>
        <SearchInput />
        <ProfileButton />
      </Header>
      <Main>
        <Section>
          <Categories />
          <BookListing offset={offset} category={path} />
        </Section>
        <Footer category={path} />
      </Main>
    </>
  )
}
