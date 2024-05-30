import { styled } from './theme.ts'

export const Section = styled('section', {
  display: 'inline-flex',
  position: 'relative',
  maxWidth: 'calc((21rem * 3) + 2rem)',
  width: '100%',
  marginTop: '2.8125rem',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'space-between',
})

export const StyledModelCard = styled('div', {
  display: 'flex',
  gap: '1rem',
})

export const CardAndTitle = styled('div', {
  h1: {
    padding: '.9375rem 0rem',
  },
})
