import { styled } from '../theme.ts'

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
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
  width: 'calc((21rem * 3) + 2rem)',
  margin: '2rem auto',
  flexWrap: 'wrap',
  gap: '1rem',
  // justifyContent: 'space-between',
  h1: {
    margin: '0 auto',
  },
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

  a: {
    textAlign: 'right',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '$colorOne',
  },

  'a:hover': {
    color: 'black',
    transform: 'scale(1.03)',
  },

  h1: {
    textAlign: 'right',
  },
})

export const FooterContainer = styled('footer', {
  margin: '2rem auto',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',

  a: {
    textDecoration: 'none',
    color: '$colorOne',
  },

  'a:hover': {
    color: 'black',
    textDecoration: 'underline',
  },
})
