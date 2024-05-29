import { styled } from './theme.ts'

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '21rem',
  position: 'relative',
  transition: '500ms',
  boxShadow: '0px 0px 0px #D8D5D5',
  borderRadius: '10px',
  overflow: 'hidden',

  '&:hover': {
    boxShadow: '5px 5px 10px #D8D5D5',
  },

  '> button': {
    position: 'absolute',
    right: '-2px',
    top: '-2px',
  },

  img: {
    maxWidth: '100%',
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
