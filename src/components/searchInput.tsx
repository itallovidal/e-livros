import { Input, InputContainer } from '../styles/input.ts'
import { MagnifyingGlass } from 'phosphor-react'
import { Button } from './Button.tsx'

export function SearchInput() {
  return (
    <InputContainer>
      <Input placeholder={'Pesquise aqui o livro'} />
      <Button variant={'transparent'}>
        <MagnifyingGlass size={32} />
      </Button>
    </InputContainer>
  )
}
