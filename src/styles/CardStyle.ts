import {styled} from './theme.ts'

export const CardContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '21rem',
    position:'relative',
    transition: '500ms',
    boxShadow: '0px 0px 0px #D8D5D5',
    borderRadius: '6px',

    '&:hover': {
        boxShadow: '5px 5px 10px #D8D5D5',
        cursor: 'pointer'
    },

    '> button':{
        position: 'absolute',
        right: 0,
        top: 0
    },

    img:{
        maxWidth: '100%',
    },

    label: {
        padding: '1.5rem',
        width: '100%',
        background: 'white',
        textAlign: 'center'
    },

    div:{
        display: 'flex',
        width: '100%',

        'button:first-child':{
            flex: 1
        },
    }
})