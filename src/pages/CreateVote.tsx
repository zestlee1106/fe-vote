import React, { useState } from 'react'
import { Box, Card, CardContent, TextField, Button, Typography, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

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

  const deleteOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index)
    setOptions(newOptions)
  }

  const handleSubmit = () => {
    // 투표 생성 로직 추가
    console.log('투표 생성:', { title, options })
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600, width: '100%' }} variant="outlined">
        <CardContent>
          <Typography variant="h4" gutterBottom>
            새 투표 생성
          </Typography>
          <TextField
            label="투표 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          {options.map((option, index) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }} key={index}>
              <TextField
                label={`옵션 ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                fullWidth
                margin="normal"
              />
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => deleteOption(index)}
                sx={{
                  ml: 1,
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          ))}
          <Button onClick={addOption} variant="outlined" sx={{ mt: 2, mr: 2 }}>
            옵션 추가
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
            생성
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default CreateVote
