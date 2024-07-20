import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateVote from './pages/CreateVote'
import Header from '@/components/Header'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import Home from './pages/Home'
import VoteDetail from './pages/VoteDetail'
import VoteResults from './pages/VoteResult'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-vote" element={<CreateVote />} />
            <Route path="/votes/:id" element={<VoteDetail />} />
            <Route path="/results/:id" element={<VoteResults />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
