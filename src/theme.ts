// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { color } from 'framer-motion'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ 
  config,
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111111'

    }
  }
 })

export default theme