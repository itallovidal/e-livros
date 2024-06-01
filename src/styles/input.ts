import { styled } from './theme.ts'

export const Input = styled('input', {
  borderRadius: '4px',
  padding: '0rem 1rem',
  border: 'none',
  outline: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
  flex: 1,
})

export const InputContainer = styled('form', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'white',
  padding: '.1rem .5rem',
  maxWidth: '28.875rem',
  width: '100%',
  boxShadow: '0px 5px 2px #D8D5D5',
  borderRadius: '8px',
})
