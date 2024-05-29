import { Button } from './Button.tsx'
import { ProfileButtonContainer } from '../styles/profilePicture.ts'

interface ProfileButtonProps {
  name: string
  profilePicture: string
}

function ProfileButton({ name }: ProfileButtonProps) {
  return (
    <ProfileButtonContainer>
      <Button variant={'transparent'}>
        <span>{name}</span>
        <span> Ver Perfil </span>
      </Button>
    </ProfileButtonContainer>
  )
}

export default ProfileButton
