import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material'

const VoteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [selectedOption, setSelectedOption] = React.useState('')

  const handleVote = () => {
    // 투표 제출 로직 추가
    console.log('투표:', selectedOption)
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        투표 {id}
      </Typography>
      <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        {/* 추가 옵션 */}
      </RadioGroup>
      <Button onClick={handleVote} variant="contained" color="primary">
        투표하기
      </Button>
    </div>
  )
}

export default VoteDetail
