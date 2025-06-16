export type Chore = {
  id: string;
  title: string;
  content: string;
  status: 'OPEN' | 'DONE' | 'WORKING';
};
