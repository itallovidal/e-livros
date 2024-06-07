import { Header } from '../styles/home/homeStyle.ts'
import { SearchInput } from './searchInput.tsx'
import { ProfileButton } from './global/profileButton.tsx'

export function HomeHeader() {
  return (
    <Header>
      <SearchInput />
      <ProfileButton />
    </Header>
  )
}
