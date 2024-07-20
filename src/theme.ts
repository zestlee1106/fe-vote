import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      backgroundGradient: string
    }
  }

  interface ThemeOptions {
    custom?: {
      backgroundGradient?: string
    }
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark', // 다크 테마로 설정
    primary: {
      main: '#ECCEAE',
      light: '#131842',
    },
    secondary: {
      main: '#E68369',
    },
    background: {
      default: '#FBF6E2',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  custom: {
    backgroundGradient: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
  },
})

export default theme
