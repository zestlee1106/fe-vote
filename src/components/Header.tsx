import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Tabs, Tab } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState(0)
  const location = useLocation()
  const pathname = location.pathname

  const tabs = [
    {
      name: '투표 목록',
      path: '/',
    },
    {
      name: '투표 생성',
      path: '/create-vote',
    },
  ]

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    navigate(tabs[newValue].path)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.name} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
