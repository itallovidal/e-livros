import { Button } from './Button.tsx'
import { ProfileButtonContainer } from '../styles/profilePicture.ts'

interface ProfileButtonProps {
  name: string
  profilePicture: string
}

function ProfileButton({ name, profilePicture }: ProfileButtonProps) {
  return (
    <ProfileButtonContainer>
      <img src={profilePicture} alt="" />

      <Button variant={'transparent'}>
        <span>{name}</span>
        <span> Ver Perfil </span>
      </Button>
    </ProfileButtonContainer>
  )
}

export default ProfileButton
