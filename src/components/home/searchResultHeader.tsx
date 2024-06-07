import { useContext } from 'react'
import { Button } from '../button.tsx'
import { AppContext } from '../../contexts/globalContext.tsx'

export function SearchResultHeader({ title }: { title: string | null }) {
  const { navigateTo } = useContext(AppContext)

  if (!title) return <></>
  return (
    <>
      <p> Your results for {title}.</p>
      <Button
        onClick={() => navigateTo('/architecture?offset=1')}
        variant={'transparent'}
      >
        Clear search query.
      </Button>
    </>
  )
}
