import { styled } from '../theme.ts'

export const Header = styled('header', {
  display: 'flex',
  margin: '2rem auto',
  gap: '1rem',
  justifyContent: 'space-between',
  maxWidth: 'calc((21rem * 3) + 2rem)',
  height: '10vh',
})

export const InfoUser = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Main = styled('main', {
  display: 'flex',
  alignItems: 'center',
  margin: '2rem auto',
  gap: '1rem',
  width: '100%',
  flexDirection: 'column',

  '.notFound': {
    width: '100%',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const Section = styled('section', {
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  width: 'calc((21rem * 3) + 2rem)',
  margin: '2rem auto',

  '.carouselBooks': {
    position: 'static',

    '.react-multiple-carousel__arrow--left ,.react-multiple-carousel__arrow--right':
      {
        backgroundColor: '$colorOne',

        '&:hover': {
          opacity: 0.4,
        },
      },
  },
})
