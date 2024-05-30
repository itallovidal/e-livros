import {
  Main,
  BoxComponent,
  IconComponent,
  Elements,
} from '../styles/NotFoundPageStyle.ts'
import { Circle } from 'phosphor-react'
import { Button } from '../components/Button.tsx'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const navigate = useNavigate()

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
          <h2>Page Not Found</h2>
          <Button
            onClick={() => navigate('/architecture?offset=1')}
            variant={'transparent'}
          >
            Back
          </Button>
        </Elements>
      </BoxComponent>
    </Main>
  )
}

export default NotFoundPage
