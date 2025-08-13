export type ChoreStatus = 'DONE' | 'OPEN' | 'IN_PROGRESS'

export type Chore = {
  id: string
  title: string
  content: string
  status: ChoreStatus
}
