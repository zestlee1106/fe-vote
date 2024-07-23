import { CreateVoteParams, Vote, VoteResult, VoteResultResponse } from '@/types/vote'
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

export const createVoteResult = (voteId: string, optionId: string) => {
  return postData<VoteResult>(`/votes/${voteId}/options/${optionId}`)
}

export const getVoteResult = (voteId: string) => {
  return getData<VoteResultResponse>(`/votes/${voteId}/results`)
}
