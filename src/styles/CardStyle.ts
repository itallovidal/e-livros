import { styled } from './theme.ts'
import { imageShowing, showing } from './animations.ts'

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '20rem',
  position: 'relative',
  transition: '500ms',
  boxShadow: '0px 0px 0px #D8D5D5',
  borderRadius: '10px',
  overflow: 'hidden',
  transform: 'translateY(10px)',
  opacity: 0,
  animation: `${showing} 200ms var(--delay) forwards`,

  '&:hover': {
    boxShadow: '5px 5px 10px #D8D5D5',
  },

  '> button': {
    position: 'absolute',
    right: '-2px',
    top: '-2px',
  },

  img: {
    height: '30rem',
    width: '100%',
    objectFit: 'cover',
    opacity: 0,
    transform: 'scale(0)',
    animation: `${imageShowing} 500ms forwards`,
  },

  label: {
    padding: '1.5rem',
    width: '100%',
    background: 'white',
    textAlign: 'center',
  },

  div: {
    display: 'flex',
    width: '100%',

    'button:first-child': {
      flex: 1,
    },
  },
})
