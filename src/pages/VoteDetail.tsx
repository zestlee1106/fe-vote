import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  FormGroup,
  Checkbox,
} from '@mui/material'
import { createVoteResult, getVote } from '@/api/votes'
import { Vote } from '@/types/vote'
import { formatDate } from '@/utils/format'
import { ResponseError } from '@/api'
import { VoteOption } from '@/types/vote-option'

const VoteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [vote, setVote] = useState<Vote | null>(null)
  const navigate = useNavigate()

  const fetchVote = async () => {
    try {
      const data = await getVote(id || '')

      if (!data) {
        navigate('/')
      }

      setVote(data)
      setSelectedOption(data.options[0]._id)

      if (data.isDuplicateVotingAllowed) {
        setCheckedOptions(new Array(data.options.length))
      }
    } catch (e) {
      const error = e as ResponseError

      if (error.statusCode === 409) {
        navigate(`/votes/${id}/results`, {
          replace: true,
        })
      }
      if (error.statusCode === 403) {
        alert('이미 마감된 투표입니다')
        navigate(`/votes/${id}/results`, {
          replace: true,
        })
      }
    }
  }

  useEffect(() => {
    fetchVote()
  }, [])

  const handleVote = async () => {
    try {
      await createVoteResult(id || '', checkedOption)
      navigate(`/votes/${id}/results`, {
        replace: true,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const [checkedOptions, setCheckedOptions] = useState<boolean[]>([])
  const checkedOption = useMemo(() => {
    if (!vote?.isDuplicateVotingAllowed) {
      return selectedOption
    }

    const selectedOptions: VoteOption[] = []
    vote.options.map((option, index) => {
      if (checkedOptions[index] === true) {
        selectedOptions.push(option)
      }
    })

    return selectedOptions.map((option) => option._id).join(',')
  }, [checkedOptions, selectedOption])

  const handleCheckboxChanged = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const newCheckedOptions = [...checkedOptions]
    newCheckedOptions[index] = checked

    setCheckedOptions(newCheckedOptions)
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
            {!vote?.isDuplicateVotingAllowed && (
              <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {vote?.options.map((option) => (
                  <FormControlLabel key={option._id} value={option._id} control={<Radio />} label={option.option} />
                ))}
              </RadioGroup>
            )}
            {vote?.isDuplicateVotingAllowed && (
              <FormGroup>
                {vote?.options.map((option, index) => (
                  <FormControlLabel
                    key={option._id}
                    control={<Checkbox onChange={handleCheckboxChanged(index)} />}
                    label={option.option}
                  />
                ))}
              </FormGroup>
            )}
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
