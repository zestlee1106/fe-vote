import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

interface DrawerListProps {
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

const DrawerList: React.FC<DrawerListProps> = ({ toggleDrawer }) => {
  return (
    <Box
      sx={{ width: { xs: 200, sm: 250 } }}
      role="presentation"
      onClick={(event) => {
        // 마우스 클릭 이벤트
        toggleDrawer(false)(event)
      }}
      onKeyDown={(event) => {
        // 키보드 이벤트
        if (event.key === 'Escape' || event.key === 'Enter') {
          toggleDrawer(false)(event)
        }
      }}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default DrawerList
