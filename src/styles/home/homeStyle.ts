import { styled } from '../theme.ts'

export const Header = styled('header', {
  display: 'flex',
  margin: '2rem auto',
  gap: '1rem',
  justifyContent: 'center',
})

export const Main = styled('main', {
  display: 'flex',
  alignItems: 'center',
  margin: '2rem auto',
  gap: '1rem',
  width: '100%',
  flexDirection: 'column',
  paddingLeft: '10%',
})
export const Section = styled('section', {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  maxWidth: 'calc((21rem * 3) + 2rem)',
  margin: '2rem auto',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'space-between',
})

export const CategoryContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  position: 'absolute',
  left: '0',
  top: '0',
  zIndex: 10,
  transform: 'translateX(-110%)',
  margin: '0 auto',

  'a, h1': {
    textAlign: 'right',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '$colorOne',
  },
})

export const Footer = styled('footer', {
  margin: '2rem auto',
})
