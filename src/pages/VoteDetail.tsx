import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Card, CardContent, Typography, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material'
import { getVote } from '@/api/votes'
import { Vote } from '@/types/votes'

const VoteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [selectedOption, setSelectedOption] = React.useState('')
  const [vote, setVote] = useState<Vote | null>(null)
  const navigate = useNavigate()

  const fetchVote = async () => {
    const data = await getVote(id || '')

    if (!data) {
      navigate('/')
    }

    setVote(data)
  }

  useEffect(() => {
    fetchVote()
  }, [])

  const handleVote = () => {
    // 투표 제출 로직 추가
    console.log('투표:', selectedOption)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600, width: '100%' }} variant="outlined">
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            {vote?.title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              {vote?.options.map((option, index) => (
                <FormControlLabel key={`${option}-${index}`} value={option} control={<Radio />} label={option} />
              ))}
              {/* 추가 옵션 */}
            </RadioGroup>
          </Box>
          <Button onClick={handleVote} variant="contained" color="primary" sx={{ mt: 2 }}>
            투표하기
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default VoteDetail
