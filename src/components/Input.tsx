import { FieldContainer, Input, InputContainer } from '../styles/input.ts'
import * as Stitches from '@stitches/react'
import { ReactNode } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { ISignupSchema } from '../utils/schemas.ts'
interface IFormInput extends Stitches.ComponentProps<typeof Input> {
  icon: ReactNode
  register: UseFormRegister<ISignupSchema>
  fieldName: keyof ISignupSchema
  errorMessage: undefined | FieldError
}

export function FormInput({
  icon,
  fieldName,
  errorMessage,
  register,
  ...props
}: IFormInput) {
  return (
    <FieldContainer>
      <InputContainer>
        {icon && icon}
        <Input {...props} {...register(fieldName)} />
      </InputContainer>
      {errorMessage && <p>{errorMessage.message}</p>}
    </FieldContainer>
  )
}
