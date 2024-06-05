import { styled } from './theme.ts'

export const Button = styled('button', {
  borderRadius: '6px',
  padding: '.8rem 1rem',
  color: 'white',
  border: 'none',
  outline: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',

  '&:disabled': {
    opacity: 0.4,
  },

  '&:disabled:hover': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },

  '&:hover': {
    opacity: .4,
    cursor: 'pointer',
  },

  variants: {
    color: {
      blue: {
        background: '$colorOne',
        color: 'white',
      },
      white: {
        background: 'white',
        color: '$colorOne',
      },
      gray: {
        background: '$colorTwo',
        color: '$colorOne',
      },
      transparent: {
        background: 'transparent',
        color: '$colorOne',
      },
    },
  },
})
