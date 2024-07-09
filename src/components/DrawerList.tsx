import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'

interface DrawerListProps {
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent | React.TouchEvent) => void
}

const DrawerList: React.FC<DrawerListProps> = ({ toggleDrawer }) => (
  <Box
    sx={{ width: { xs: 200, sm: 250 } }}
    role="presentation"
    onClick={(event) => toggleDrawer(false)(event)}
    onKeyDown={(event) => {
      if (event.key === 'Escape' || event.key === 'Enter') {
        toggleDrawer(false)(event)
      }
    }}
  >
    <List>
      <ListItem button component={Link} to="/" onClick={(event) => toggleDrawer(false)(event)}>
        <ListItemText primary="투표 목록" />
      </ListItem>
      <ListItem button component={Link} to="/create-vote" onClick={(event) => toggleDrawer(false)(event)}>
        <ListItemText primary="투표 생성하기" />
      </ListItem>
      <ListItem button component={Link} to="/results/1" onClick={(event) => toggleDrawer(false)(event)}>
        <ListItemText primary="투표 결과" />
      </ListItem>
    </List>
    <Divider />
  </Box>
)

export default DrawerList
