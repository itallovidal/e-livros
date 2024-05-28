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

  body: {
    background: '$colorTwo',
  },
})
