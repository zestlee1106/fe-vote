import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Card, CardContent, Typography, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material'
import { getVote } from '@/api/votes'
import { Vote } from '@/types/vote'
import { formatDate } from '@/utils/format'

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
          <Typography variant="h6" gutterBottom>
            {vote?.description}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              {vote?.options.map((option) => (
                <FormControlLabel key={option._id} value={option} control={<Radio />} label={option.option} />
              ))}
            </RadioGroup>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="body1">투표 시작 시간</Typography>
              <Typography variant="body1">{formatDate(vote?.startDate)}</Typography>
            </Box>
            <Box>~</Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="body1">투표 마감 시간</Typography>
              <Typography variant="body1">{formatDate(vote?.endDate)}</Typography>
            </Box>
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
