import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Tabs, Tab } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    switch (newValue) {
      case 0:
        navigate('/')
        break
      case 1:
        navigate('/create-vote')
        break
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
            <Tab label="투표 목록" />
            <Tab label="투표 생성" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
