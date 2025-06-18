export type TicketStatus = 'OPEN' | 'DONE' | 'WORKING';

export type Chore = {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
};
