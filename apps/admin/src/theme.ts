import { ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#4685FF',
    },
    background: {
      default: '#F4F5F7',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Inter, serif',
      /*
      fontFamily:
        '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;',
      */
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 'normal',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 'normal',
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 'normal',
    },
    caption: {
      lineHeight: 1.5,
      color: '#898989',
    },
  },
}

export default createTheme(theme)
