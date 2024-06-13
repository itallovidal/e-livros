import {
  Header,
  InfoUser,
  Main,
  Section,
} from '../styles/profile/profileStyle.ts'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/globalContext.tsx'

import { ProfileBookList } from '../components/profile/profileBookList.tsx'
import { IProfile } from '../@types/api'
import { getProfileInfo } from '../utils/eLivrosAPI/getProfileInfo.ts'
import { Loading } from '../components/loading.tsx'
import { CaretLeft, SignOut } from 'phosphor-react'
import { Button } from '../components/button.tsx'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AppContext)
  const [profile, setProfile] = useState<IProfile>()
  const { logOutUser } = useContext(AppContext)

  useEffect(() => {
    if (user && user.accessToken) {
      setLoading(true)
      getProfileInfo(user.accessToken)
        .then((data) => {
          setProfile(data)
        })
        .finally(() => setLoading(false))
    }
  }, [user])

  if (loading || !profile) return <Loading />

  return (
    <>
      <Header>
        <Button onClick={() => window.history.back()} variant={'transparent'}>
          <CaretLeft size={32} />
        </Button>
        <InfoUser>
          <h1>{profile.user.name}</h1>
          <p>{profile.user.email}</p>
        </InfoUser>
        <Button
          variant={'transparent'}
          onClick={() => {
            logOutUser()
            navigate('/login')
          }}
        >
          <SignOut size={32} />
        </Button>
      </Header>
      <Main>
        {profile.readBooks.length !== 0 && (
          <Section>
            <h1>Lidos</h1>
            <ProfileBookList books={profile.readBooks} />
          </Section>
        )}
        {profile.favoriteBooks.length !== 0 && (
          <Section>
            <h1>Favoritos</h1>
            <ProfileBookList books={profile.favoriteBooks} />
          </Section>
        )}
        {profile.readBooks.length === 0 &&
          profile.favoriteBooks.length === 0 && (
            <div className={'notFound'}>
              <h1>Ops, no results found.</h1>
            </div>
          )}
      </Main>
    </>
  )
}

export default Profile
