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

export type UserCommentPost = {
  offerId: string | undefined;
  comment: string;
  rating: number;
}
