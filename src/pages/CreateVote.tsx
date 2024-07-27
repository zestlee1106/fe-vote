import React, { useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  IconButton,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import CustomDatePicker from '@/components/CustomDatePicker'
import theme from '@/theme'
import { createVote } from '@/api/votes'
import { useNavigate } from 'react-router-dom'

const CreateVote: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [options, setOptions] = useState(['', ''])
  const [isDuplicateVotingAllowed, setIsDuplicateVotingAllowed] = useState(false)

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

  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const handleEndDateChange = (date: Date) => {
    setEndDate(date)
  }
  const handleStartDateChange = (date: Date) => {
    setStartDate(date)
  }

  const navigate = useNavigate()

  const handleChangeAllowed = () => {
    setIsDuplicateVotingAllowed((prev) => !prev)
  }

  const handleSubmit = async () => {
    if (!title || !options || !startDate || !endDate || !description) {
      alert('필수값을 넣지 않았습니다.')
      return
    }

    const params = {
      title,
      options: options.map((option) => ({ option })),
      description,
      startDate: startDate?.toISOString() || new Date().toISOString(),
      endDate: endDate?.toISOString() || new Date().toISOString(),
      isDuplicateVotingAllowed,
    }

    const data = await createVote(params)

    navigate(`/votes/${data._id}`)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600, width: '100%' }} variant="outlined">
        <CardContent sx={{ textAlign: 'center' }}>
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
          <TextField
            label="투표 설명"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
                  border: '1px solid',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    color: 'primary.dark',
                  },
                }}
                disabled={options.length === 1}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          ))}
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <RadioGroup row value={isDuplicateVotingAllowed} onChange={handleChangeAllowed}>
              <FormControlLabel value={true} control={<Radio />} label="중복 투표 가능" />
              <FormControlLabel value={false} control={<Radio />} label="중복 투표 불가" />
            </RadioGroup>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              width: '100%',
              justifyContent: 'space-between',
              paddingTop: '16px',
              color: theme.palette.primary.main,
            }}
          >
            <CustomDatePicker placeholder="투표 시작 날짜" onChange={handleStartDateChange} />
            ~
            <CustomDatePicker
              placeholder="투표 끝나는 날짜"
              onChange={handleEndDateChange}
              startDate={startDate}
              disabled={!startDate}
            />
          </Box>
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
