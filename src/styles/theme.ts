// styles/appRoutes.tsx
import { createStitches, globalCss } from '@stitches/react'
import { showing } from './animations.ts'

export const { styled } = createStitches({
  theme: {
    colors: {
      colorOne: '#102C57',
      colorTwo: '#F8F8F8',
    } as const,
  },
})

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: 'Roboto, sans-serif',
  },

  main: {
    opacity: 0,
    animation: `${showing} 1000ms forwards`,
  },

  '.divider': {
    display: 'block',
    width: '5rem',
    height: '.2rem',
    background: '$colorOne',
    margin: '0 auto',
    marginBlock: '1rem',
  },

  body: {
    background: '$colorTwo',
  },

  a: {
    textDecoration: 'none',
    color: '$colorOne',
  },
})
