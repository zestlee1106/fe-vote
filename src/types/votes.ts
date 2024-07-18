export interface Vote {
  _id: string
  /**
   * The title of the vote
   * @example "Vote title"
   */
  title: string
  /**
   * The description of the vote
   * @example "Vote description"
   */
  description: string
  /**
   * The options for the vote
   * @example ["Option 1","Option 2"]
   */
  options: string[]
  /**
   * The start date of the vote
   * @format date-time
   * @example "2024-07-01T00:00:00.000Z"
   */
  startDate: string
  /**
   * The end date of the vote
   * @format date-time
   * @example "2024-07-15T00:00:00.000Z"
   */
  endDate: string
  /**
   * The creation date of the vote
   * @format date-time
   * @example "2024-07-01T00:00:00.000Z"
   */
  createAt: string
  /**
   * The last update date of the vote
   * @format date-time
   * @example "2024-07-01T00:00:00.000Z"
   */
  updatedAt: string
  /**
   * The IP addresses of voters
   * @example ["192.168.0.1"]
   */
  votedIps: string[]
  /**
   * The IP address of the vote creator
   * @example "192.168.0.1"
   */
  creatorIp: string
  /**
   * The UUID of the vote creator
   * @example "5cc8a093-85fa-4da0-9111-313b53e4b924"
   */
  creatorUuid: string
  /**
   * The UUIDs of voters
   * @example ["uuid1","uuid2"]
   */
  votedCookieIds: string[]
  /**
   * The results of the vote
   * @example {"Option 1":10,"Option 2":5}
   */
  results: Record<string, number>
}
