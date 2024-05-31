import { Button } from './Button.tsx'
import { ProfileButtonContainer } from '../styles/profilePicture.ts'
import { useNavigate } from 'react-router-dom'

interface ProfileButtonProps {
  name: string
}

function ProfileButton({ name }: ProfileButtonProps) {
  const navigate = useNavigate()
  return (
    <ProfileButtonContainer>
      <Button variant={'transparent'} onClick={() => navigate('/profile')}>
        <span>{name}</span>
        <span> Ver Perfil </span>
      </Button>
    </ProfileButtonContainer>
  )
}

export default ProfileButton
