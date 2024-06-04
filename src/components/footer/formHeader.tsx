import { Button } from '../button.tsx'
import { CaretLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { FormHeaderContainer } from '../../styles/formStyles.ts'

interface IFormHeader {
  title: string
  subtitle: string
}

function FormHeader({ title, subtitle }: IFormHeader) {
  const navigation = useNavigate()

  return (
    <FormHeaderContainer>
      <Button
        onClick={() => navigation('/architecture?offset=1')}
        variant={'transparent'}
      >
        <CaretLeft size={32} />
      </Button>
      <h1>{title}</h1>
      <div className={'divider'}></div>
      <h2>{subtitle}</h2>
    </FormHeaderContainer>
  )
}

export default FormHeader
