import { Main, Section } from '../styles/profile/profileStyle.ts'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/globalContext.tsx'

import { ProfileBookList } from '../components/profile/profileBookList.tsx'
import { IProfile } from '../@types/api'
import { getProfileInfo } from '../utils/eLivrosAPI/getProfileInfo.ts'
import { Loading } from '../components/loading.tsx'

function Profile() {
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AppContext)
  const [profile, setProfile] = useState<IProfile>()

  useEffect(() => {
    setLoading(true)
    getProfileInfo(user!.accessToken)
      .then((data) => {
        setProfile(data)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading || !profile) return <Loading />

  return (
    <>
      <Main>
        <Section>
          <h1>Lidos</h1>
          <ProfileBookList books={profile.readBooks} />
          <ProfileBookList books={profile.favoriteBooks} />
        </Section>
      </Main>
    </>
  )
}

export default Profile

// <Header>
// <Button onClick={() => window.history.back()} variant={'transparent'}>
//     <CaretLeft size={32} />
// </Button>
// <Button variant={'transparent'} onClick={logOutUser}>
//   <SignOut size={32} />
// </Button>
// </Header>
