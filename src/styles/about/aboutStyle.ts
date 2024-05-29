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
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'space-between',
  maxWidth: 'calc((21rem * 3) + 2rem)',

  '.container_btns': {
    alignItems: 'center',
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
  },
})

export const DivImgContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',

  img: {
    marginRight: '1rem',
    borderRadius: '10px',
  },

  p: {
    lineHeight: '1.6rem',
    width: '70%',
    marginTop: '1.5rem',
  },
})
