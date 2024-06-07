import { Button } from './button.tsx'
import { ProfileButtonContainer } from '../styles/profilePicture.ts'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../contexts/globalContext.tsx'

export function ProfileSummary() {
  const navigate = useNavigate()
  const { user } = useContext(AppContext)

  return (
    <ProfileButtonContainer>
      <Button variant={'transparent'} onClick={() => navigate('/profile')}>
        <span>{user?.name}</span>
        <span> Ver Perfil </span>
      </Button>
    </ProfileButtonContainer>
  )
}
