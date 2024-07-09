import React, { useState } from 'react'
import { TextField, Button, Typography, Box } from '@mui/material'

const CreateVote: React.FC = () => {
  const [title, setTitle] = useState('')
  const [options, setOptions] = useState(['', ''])

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOptions(newOptions)
  }

  const addOption = () => {
    setOptions([...options, ''])
  }

  const handleSubmit = () => {
    // 투표 생성 로직 추가
    console.log('투표 생성:', { title, options })
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        새 투표 생성
      </Typography>
      <TextField label="투표 제목" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal" />
      {options.map((option, index) => (
        <TextField
          key={index}
          label={`옵션 ${index + 1}`}
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
          fullWidth
          margin="normal"
        />
      ))}
      <Button onClick={addOption} variant="outlined">
        옵션 추가
      </Button>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        생성
      </Button>
    </Box>
  )
}

export default CreateVote
