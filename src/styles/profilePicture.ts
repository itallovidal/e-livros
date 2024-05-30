import { styled } from './theme.ts'

export const ProfileButtonContainer = styled('div', {
  borderRadius: '4px',
  // padding: '.8rem 1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  button: {
    alignItems: 'flex-start',
    flexDirection: 'column',

    'span:first-child': {
      fontWeight: 'bold',
      fontSize: '1.4rem',
    },
  },
})
