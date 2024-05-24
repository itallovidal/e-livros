import {styled} from '../theme.ts'

export const Header = styled('header', {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '21rem',
    position:'relative',
    margin: '2rem auto',
    gap: '1rem'
})

export const Main = styled('main', {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '68.75rem',
    position:'relative',
    margin: '2rem auto',
    gap: '1rem',
    flexWrap: 'wrap',
    marginLeft: '11.25rem',
})

export const Section = styled('section', {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '68.75rem',
    position:'relative',
    margin: '2rem auto',
    gap: '1rem',
    flexWrap: 'wrap',
})

export const CategoryContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex: 10,
    transform: 'translateX(-110%)',
    margin: '5rem auto',
})

export const Link = styled('a', {
    textAlign: 'right'
})

export const Footer = styled('footer', {
    margin: '2rem auto',
})