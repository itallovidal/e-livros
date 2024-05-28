// styles/index.ts
import { createStitches, globalCss } from '@stitches/react'

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
})
