export interface Score {
  id: string;
  userId: string;
  score: number;
  updated: Date;
}

export interface User {
  id: string;
  username: string;
  title: string;
}
