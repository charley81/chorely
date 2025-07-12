export type TicketStatus = 'DONE' | 'OPEN' | 'WORKING';

export type Chore = {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
};
