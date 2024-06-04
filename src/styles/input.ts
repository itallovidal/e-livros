import { styled } from './theme.ts'

export const Input = styled('input', {
  borderRadius: '4px',
  border: 'none',
  outline: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
})

export const InputContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'white',
  padding: '1rem .8rem',
  gap: '1rem',
  maxWidth: '28.875rem',
  width: '100%',
  boxShadow: '0px 5px 2px #D8D5D5',
  borderRadius: '8px',
})

export const SearchContainer = styled('form', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'white',
  padding: '.4rem .8rem',
  gap: '1rem',
  maxWidth: '28.875rem',
  width: '100%',
  boxShadow: '0px 5px 2px #D8D5D5',
  borderRadius: '8px',
})

export const FieldContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '.1rem .5rem',
  width: '100%',

  maxWidth: '18rem',

  p: {
    width: '100%',
    marginTop: '1rem',
    color: 'red',
  },
})
