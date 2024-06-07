import { styled } from '../theme.ts'

export const Header = styled('header', {
  display: 'flex',
  margin: '2rem auto',
  gap: '1rem',
  justifyContent: 'space-between',
  maxWidth: 'calc((21rem * 3) + 2rem)',
})

export const Main = styled('main', {
  display: 'flex',
  alignItems: 'center',
  margin: '2rem auto',
  gap: '1rem',
  width: '100%',
  flexDirection: 'column',
})

export const Section = styled('section', {
  display: 'flex',
})
