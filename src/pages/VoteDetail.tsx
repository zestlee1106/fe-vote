import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Card, CardContent, Typography, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material'

const VoteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [selectedOption, setSelectedOption] = React.useState('')

  const handleVote = () => {
    // 투표 제출 로직 추가
    console.log('투표:', selectedOption)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600, width: '100%' }} variant="outlined">
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            투표 {id}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
              <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
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
