import React from 'react'
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const votes = [
    { id: 1, title: 'Vote 1' },
    { id: 2, title: 'Vote 2' },
    { id: 2, title: 'Vote 3' },
    // 추가 투표 데이터
  ]

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600, width: '100%' }} variant="outlined">
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            투표 목록
          </Typography>
          <List>
            {votes.map((vote, index) => (
              <ListItem
                button
                component={Link}
                to={`/vote/${vote.id}`}
                key={vote.id}
                sx={{
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  marginBottom: index !== votes.length - 1 ? 1 : 0,
                }}
              >
                <ListItemText primary={vote.title} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Home
