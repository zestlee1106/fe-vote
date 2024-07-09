import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateVote from './components/CreateVote'
import Header from '@/components/Header'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<CreateVote />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
