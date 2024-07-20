import { CreateVoteParams, Vote } from '@/types/vote'
import { getData, postData } from '.'

export const getAllVotes = () => {
  return getData<Vote[]>('/votes')
}

export const getVote = (id: string) => {
  return getData<Vote>(`/votes/${id}`)
}

export const createVote = (params: CreateVoteParams) => {
  return postData<Vote>('/votes', params)
}
