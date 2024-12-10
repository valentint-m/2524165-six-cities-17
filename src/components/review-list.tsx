import { UserComment } from '../types/comment';
import Review from './review';

type ReviewListProps = {
  userComments: UserComment[];
}

const userCommentCountLimit = 10;

function ReviewList({userComments}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {userComments.slice(0, userCommentCountLimit).map((userComment) => <Review userComment={userComment} key={userComment.id} />)}
    </ul>
  );
}

export default ReviewList;

