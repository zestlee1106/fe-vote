import { CreateVoteOptionParams, VoteOption } from './vote-option'

export interface Vote {
  _id: string
  title: string
  description: string
  options: VoteOption[]
  startDate: string
  endDate: string
  createAt: string
  updatedAt: string
  votedIps: string[]
  creatorIp: string
  creatorUuid: string
  votedCookieIds: string[]
  isDuplicateVotingAllowed: boolean
}

export interface CreateVoteParams {
  title: string
  description: string
  options: CreateVoteOptionParams[]
  startDate: string
  endDate: string
}

export interface VoteResult {
  _id: string
  voteId: string
  optionId: string
  votedUuid: string
  createAt: string
}

interface OptionResponse extends VoteOption {
  voteId: string
  count: number
}

export interface VoteResultResponse {
  _id: string
  title: string
  description: string
  startDate: string
  endDate: string
  createAt: string
  updatedAt: string
  creatorIp: string
  creatorUuid: string
  options: OptionResponse[]
  totalVoteCount: number
  isDuplicateVotingAllowed: boolean
}
