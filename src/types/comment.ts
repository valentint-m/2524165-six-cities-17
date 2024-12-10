type User = {
  name: string;
  avatarUrl: string;
}

export type UserComment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}
