import { Button } from '../button.tsx'
import { useContext } from 'react'
import { AppContext } from '../../contexts/globalContext.tsx'
import { ProfileSummary } from '../profileSummary.tsx'

export function ProfileButton() {
  const { user, navigateTo } = useContext(AppContext)

  if (user?.name) return <ProfileSummary />

  return (
    <Button
      onClick={() => navigateTo('/login')}
      variant={'blue'}
      children={'Login'}
    />
  )
}
