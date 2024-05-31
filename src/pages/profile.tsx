import { Button } from '../components/Button.tsx'
import { CaretLeft, SignOut } from 'phosphor-react'
import { Header, Main } from '../styles/profile/profileStyle.ts'
import ProfileButton from '../components/profileButton.tsx'

function Profile() {
  return (
    <>
      <Header>
        <Button onClick={() => window.history.back()} variant={'transparent'}>
          <CaretLeft size={32} />
        </Button>
        <ProfileButton name={'george'} />
        <Button variant={'transparent'}>
          <SignOut size={32} />
        </Button>
      </Header>
      <Main></Main>
    </>
  )
}

export default Profile
