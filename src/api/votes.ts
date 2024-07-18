import { Vote } from '@/types/votes'
import { getData } from '.'

export const getAllVotes = () => {
  return getData<Vote[]>('/votes')
}
