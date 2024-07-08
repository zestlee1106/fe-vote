import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateVote from './components/CreateVote'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<CreateVote />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
