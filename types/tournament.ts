export type Tournament = {
  id: number;
  title: string;
  gameName: string;
  date: string;
  prizePool: number;
  status: 'Upcoming' | 'Completed';
  description: string;
  rules: string[];
  prizeBreakdown: {
    position: string;
    amount: number;
  }[];
};