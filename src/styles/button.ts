import {styled} from './theme.ts'

export const Button = styled('button', {
    borderRadius: '6px',
    padding: '.8rem 1rem',
    color: 'white',
    border: 'none',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',

    '&:hover':{
        opacity: '.8',
        cursor: 'pointer'
    },

    variants: {
      color: {
          blue: {
              background: '$colorOne',
              color: 'white'
          },
          gray: {
              background: '$colorTwo',
              color: '$colorOne'
          },
          transparent: {
              background: 'transparent',
              color: '$colorOne'
          }
      }
    }
})