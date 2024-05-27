import {styled} from "../theme.ts";

export const Header = styled('header', {
    display: 'inline-flex',
    margin: '2rem auto',
    gap: '1rem',
    justifyContent: 'center'
})

export const Main = styled('main', {
    display: 'flex',
    alignItems: 'flex-start',
    margin: '2rem auto',
    gap: '1rem',
    width: '100%',
    flexDirection: 'column',
    paddingLeft: '10%'
})

export const Section = styled('section', {
    display: 'inline-flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'space-between',
})

export const DivImgContainer = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',

    'img' :{
        marginRight: '1rem',
    },

    'p':{
        marginTop: '1.5rem',
    },

    'button':{
        display: 'inline-flex',
        margin: '0.625rem'
    }
})