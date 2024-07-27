import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText, LinearProgress } from '@mui/material'
import { getVoteResult } from '@/api/votes'
import { VoteResultResponse } from '@/types/vote'

const VoteResults: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const [result, setResult] = useState<VoteResultResponse | null>(null)

  const fetchResult = async () => {
    try {
      const data = await getVoteResult(id || '')
      if (!data) {
        return
      }
      setResult(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchResult()
  }, [])

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600, width: '100%' }} variant="outlined">
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            &quot;{result?.title}&quot; 결과
          </Typography>
          <Typography variant="h6" gutterBottom>
            {result?.description}
          </Typography>
          <List>
            {result?.options.map((option, index) => (
              <div key={index}>
                <ListItem sx={{ textAlign: 'center' }}>
                  <ListItemText primary={`${option.option}: ${option.count} 표`} />
                </ListItem>
                <LinearProgress variant="determinate" value={(option.count / result.totalVoteCount) * 100} />
              </div>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  )
}

export default VoteResults
