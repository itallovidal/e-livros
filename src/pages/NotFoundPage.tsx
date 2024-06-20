import {
  Main,
  BoxComponent,
  IconComponent,
  Elements,
} from '../styles/NotFoundPage/NotFoundPageStyle.ts'
import { Circle } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function NotFoundPage() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/architecture?offset=1')
  })

  return (
    <Main>
      <BoxComponent>
        <IconComponent>
          <Circle size={15} color="#FFFFFF" weight="fill" />
          <Circle size={15} color="#FFFFFF" weight="fill" />
          <Circle size={15} color="#FFFFFF" weight="fill" />
        </IconComponent>
        <Elements>
          <h1>404</h1>
          <h2>Page Not Found.</h2>
          <p>Redirecting in 3 seconds.</p>
        </Elements>
      </BoxComponent>
    </Main>
  )
}

export default NotFoundPage
