import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    main: {
      primary: '#41414C',
      secondary: '#F1972C'
    },
    text: {
      h1: '#5A5A66',
      h2: '#787880',
      complement: '#BFBFCC'
    },
    red: {
      '400': '#EB3B35'
    },
    green: {
      '400': '#36B336'
    },
    shapes: {
      greenlow: '#E8F8E8',
      redlow: '#FAECEB',
      corner: '#E1E3E6',
      lines: '#E1E3E5',
      box: '#FCFDFF'
    }
  },
  fonts: {
    heading: 'sans-serif',
    body: 'sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: '#F0F2F5',
        color: '#787880'
      }
    }
  }
})
