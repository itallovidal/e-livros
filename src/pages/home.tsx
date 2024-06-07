import { Main, Section } from '../styles/home/homeStyle.ts'
import { Categories } from '../components/home/categories.tsx'
import { Footer } from '../components/footer/footer.tsx'
import { usePageParams } from '../components/usePageParams.tsx'
import { BookListing } from '../components/home/bookListing.tsx'
import { HomeHeader } from '../components/HomeHeader.tsx'
import { SearchResultHeader } from '../components/home/searchResultHeader.tsx'

export function Home() {
  const { path, offset, title } = usePageParams()

  return (
    <>
      <HomeHeader />
      <Main>
        <SearchResultHeader title={title} />
        <Section>
          <Categories />
          <BookListing title={title} offset={offset} category={path} />
        </Section>
        <Footer category={path} />
      </Main>
    </>
  )
}
