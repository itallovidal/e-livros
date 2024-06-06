import { styled } from '@stitches/react'
import { imageShowing } from '../../styles/animations.ts'

export const Bookingcontainer = styled('div', {
  backgroundColor: 'rgb(255,255,255)',
  width: '45rem',
  position: 'absolute',
  borderRadius: '10px',
  // visibility: 'hidden',
  transform: 'scale(0)',
  animation: `${imageShowing} 500ms forwards`,
  boxShadow: '5px 5px 10px #D8D5D5',

  '.title': {
    textAlign: 'center',
    padding: '25px 0px',
  },
})

export const BookingSection = styled('section', {
  height: '32rem',

  '.header': {
    display: 'flex',
    justifyContent: 'center',
  },
  '.header > button': {
    color: 'black',
  },
})

export const ElementsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',

  button: {
    width: '100%',
  },

  '.containers_btns': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },

  '.calendar': {
    backgroundColor: '$colorTwo',
    borderRadius: '10px',
    height: '18rem',
    width: '20rem',

    '.react-calendar__year-view__months > Button': {
      padding: '1.2rem 0.5rem',
    },

    button: {
      borderRadius: '10px',
    },
  },
})

export const BookingImage = styled('div', {
  backgroundColor: '$colorTwo',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '25.89rem',
  overflow: 'hidden',
  gap: '0.5rem',
  maxWidth: '18.7rem',
  boxShadow: '5px 5px 10px #D8D5D5',

  img: {
    maxHeight: '90%',
    width: '100%',
    objectFit: 'cover',
  },

  h1: {
    textAlign: 'center',
    padding: '5px 0px',
  },

  label: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
