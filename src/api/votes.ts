import { Vote } from '@/types/votes'
import { getData } from '.'

export const getAllVotes = () => {
  return getData<Vote[]>('/votes')
}

export const getVote = (id: string) => {
  return getData<Vote>(`/votes/${id}`)
}
