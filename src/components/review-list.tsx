import { UserComment } from '../types/comment';
import Review from './review';

type ReviewListProps = {
  userComments: UserComment[];
}

function ReviewList({userComments}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {userComments.map((userComment) => <Review userComment={userComment} key={userComment.id} />)}
    </ul>
  );
}

export default ReviewList;

