import { Button as StyledButton } from '../styles/button.ts'
import { ReactNode } from 'react'
import type * as Stitches from '@stitches/react'

interface IButtonProps extends Stitches.ComponentProps<typeof StyledButton> {
  variant: 'blue' | 'gray' | 'transparent' | 'white'
  children: ReactNode
}

export function Button({ children, variant, ...props }: IButtonProps) {
  return (
    <StyledButton {...props} color={variant}>
      {children}
    </StyledButton>
  )
}
