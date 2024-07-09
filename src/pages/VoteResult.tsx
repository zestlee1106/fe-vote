import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography, List, ListItem, ListItemText } from '@mui/material'

const VoteResults: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // 예시 결과 데이터
  const results = [
    { option: 'Option 1', votes: 10 },
    { option: 'Option 2', votes: 5 },
    // 추가 결과 데이터
  ]

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        투표 결과 {id}
      </Typography>
      <List>
        {results.map((result, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${result.option}: ${result.votes} votes`} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default VoteResults
