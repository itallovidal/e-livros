import { Button } from '../components/button.tsx'
import { CaretLeft, SignOut } from 'phosphor-react'
import { Header, Main } from '../styles/profile/profileStyle.ts'
import ProfileButton from '../components/profileButton.tsx'
import { useContext } from 'react'
import { AppContext } from '../contexts/globalContext.tsx'

function Profile() {
  const { logOutUser } = useContext(AppContext)
  return (
    <>
      <Header>
        <Button onClick={() => window.history.back()} variant={'transparent'}>
          <CaretLeft size={32} />
        </Button>
        <ProfileButton />
        <Button variant={'transparent'} onClick={logOutUser}>
          <SignOut size={32} />
        </Button>
      </Header>
      <Main></Main>
    </>
  )
}

export default Profile
