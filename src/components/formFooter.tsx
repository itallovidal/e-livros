import { Button } from './Button.tsx'
import { useNavigate } from 'react-router-dom'
import { FormFooterContainer } from '../styles/formStyles.ts'

interface IFormFooter {
  title: string
  buttonText: string
  goTo: string
}

function FormFooter({ title, buttonText, goTo }: IFormFooter) {
  const navigation = useNavigate()

  return (
    <FormFooterContainer>
      <p>{title}</p>
      <Button onClick={() => navigation(goTo)} variant={'white'}>
        {buttonText}
      </Button>
    </FormFooterContainer>
  )
}

export default FormFooter
