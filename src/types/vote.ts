import { CreateVoteOptionParams } from './vote-option'

export interface Vote {
  _id: string
  title: string
  description: string
  options: string[]
  startDate: string
  endDate: string
  createAt: string
  updatedAt: string
  votedIps: string[]
  creatorIp: string
  creatorUuid: string
  votedCookieIds: string[]
}

export interface CreateVoteParams {
  title: string
  description: string
  options: CreateVoteOptionParams[]
  startDate: string
  endDate: string
}
