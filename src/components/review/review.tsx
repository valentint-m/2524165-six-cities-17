import { UserComment } from '../../types/comment';
import { getFormattedDate, getRatingClassName } from '../../utils/utils';
import './review.css';

type ReviewProps = {
  userComment: UserComment;
}

function Review({userComment}: ReviewProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={userComment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userComment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span className={getRatingClassName(userComment.rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {userComment.comment}
        </p>
        <time className="reviews__time" dateTime={userComment.date}>{getFormattedDate(userComment.date)}</time>
      </div>
    </li>
  );
}

export default Review;
