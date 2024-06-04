import { Input, SearchContainer } from '../styles/input.ts'
import { MagnifyingGlass } from 'phosphor-react'
import { Button } from './Button.tsx'

export function SearchInput() {
  return (
    <SearchContainer action={'/search'}>
      <Input
        type={'search'}
        placeholder={'Pesquise aqui o livro'}
        name={'title'}
      />
      <Button variant={'transparent'}>
        <MagnifyingGlass size={32} />
      </Button>
    </SearchContainer>
  )
}
