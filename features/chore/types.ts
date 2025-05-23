export type TicketStatus = 'OPEN' | 'DONE' | 'IN_PROGRESS';

export type Chore = {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
};
