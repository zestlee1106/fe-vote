import React from 'react'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const votes = [
    { id: 1, title: 'Vote 1' },
    { id: 2, title: 'Vote 2' },
    // 추가 투표 데이터
  ]

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        투표 목록
      </Typography>
      <List>
        {votes.map((vote) => (
          <ListItem button component={Link} to={`/vote/${vote.id}`} key={vote.id}>
            <ListItemText primary={vote.title} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Home
