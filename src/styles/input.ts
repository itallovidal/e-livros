import {styled} from "./theme.ts";

export const Input = styled('input', {
    borderRadius: '4px',
    padding: '.8rem 1rem',
    border: 'none',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    flex: 1

})

export const InputContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'white',
    padding: '.7rem',
    maxWidth: '28.875rem',
    boxShadow: '0px 5px 2px #D8D5D5',
    borderRadius: '8px'
})