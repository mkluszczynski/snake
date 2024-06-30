export type Score = {
  id: number;
  user: {
    id: number;
    username: string;
  };
  value: number;
  date: string;
};
