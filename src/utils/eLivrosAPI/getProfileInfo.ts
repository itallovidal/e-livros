import { IProfile } from '../../@types/api'

export async function getProfileInfo(token: string): Promise<IProfile> {
  const response = await fetch('http://localhost:3000/users/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
