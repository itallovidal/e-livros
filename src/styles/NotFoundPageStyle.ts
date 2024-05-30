import { styled } from './theme.ts'

export const Main = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '$colorTwo',
})

export const BoxComponent = styled('div', {
  backgroundColor: 'white',
  borderRadius: '10px',
  height: '18rem',
  width: '34rem',
  boxShadow: '5px 5px 10px #D8D5D5',
})

export const IconComponent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '.3rem',
  backgroundColor: '$colorOne',
  height: '1.5rem',
  paddingRight: '1rem',
  borderRadius: '10px 10px 0px 0px',
})

export const Elements = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'Center',
  gap: '1.5rem',

  h1: {
    fontSize: '6rem',
    margin: 0,
  },

  h2: {
    fontsize: '2rem',
  },
})
