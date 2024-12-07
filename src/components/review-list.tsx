import { UserComment } from '../types/comment';
import Review from './review';

type ReviewListProps = {
  userComments: UserComment[];
}

const userCommentCountLimit = 10;

function ReviewList({userComments}: ReviewListProps): JSX.Element {
  let count = 0;

  return (
    <ul className="reviews__list">
      {userComments.map((userComment) => count++ < userCommentCountLimit ? <Review userComment={userComment} key={userComment.id} /> : null)}
    </ul>
  );
}

export default ReviewList;

