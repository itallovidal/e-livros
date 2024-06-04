import { FieldContainer, Input, InputContainer } from '../styles/input.ts'
import * as Stitches from '@stitches/react'
import { ReactNode } from 'react'
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'
interface IFormInput<T extends FieldValues>
  extends Stitches.ComponentProps<typeof Input> {
  icon: ReactNode
  register: UseFormRegister<T>
  fieldName: Path<T>
  errorMessage: undefined | FieldError
}

export function FormInput<T extends FieldValues>({
  icon,
  fieldName,
  errorMessage,
  register,
  ...props
}: IFormInput<T>) {
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
