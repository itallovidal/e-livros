import { Input, InputContainer } from '../styles/input.ts'
import * as Stitches from '@stitches/react'
import { ReactNode } from 'react'

interface IFormInput extends Stitches.ComponentProps<typeof Input> {
  icon: ReactNode
}

export function FormInput({ icon, ...props }: IFormInput) {
  return (
    <InputContainer>
      {icon && icon}
      <Input {...props} />
    </InputContainer>
  )
}
