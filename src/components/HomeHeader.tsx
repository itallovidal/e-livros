import { Header } from '../styles/home/homeStyle.ts'
import { SearchInput } from './searchInput.tsx'
import { ProfileButton } from './global/profileButton.tsx'
import { Button } from './button.tsx'
import { CaretLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function HomeHeader() {
  const navigate = useNavigate()
  return (
    <Header>
      <Button
        variant={'transparent'}
        onClick={() => navigate('/architecture?offset=1')}
      >
        <CaretLeft size={32} />
      </Button>
      <SearchInput />
      <ProfileButton />
    </Header>
  )
}
