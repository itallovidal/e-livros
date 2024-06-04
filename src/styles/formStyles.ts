import { styled } from './theme.ts'

export const Form = styled('form', {
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 'calc((21rem * 3) + 2rem)',
  margin: '0 auto',
})

export const FormHeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '4rem auto',
  position: 'relative',
  maxWidth: 'calc((21rem * 3) + 2rem)',

  h1: {
    fontSize: '3rem',
  },

  h2: {
    fontSize: '1.2rem',
    fontWeight: 'normal',
  },

  button: {
    position: 'absolute',
    top: '50%',
    left: '0',
  },
})

export const FormFooterContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '1rem auto',
  gap: '.5rem',
})
