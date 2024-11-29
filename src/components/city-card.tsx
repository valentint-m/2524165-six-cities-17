import { RATING_TO_BAR_WIDTH_RATIO } from '../const';
import { Offer } from '../types/offer';
import { Link } from 'react-router-dom';

type CityCardProps = {
  offer: Offer;
  onMouseOverCard: (offerId: string) => void;
}

function CityCard ({offer, onMouseOverCard}: CityCardProps): JSX.Element {
  const cityCardURL = `/offer/${offer.id}`;
  return (
    <article className="cities__card place-card" onMouseOver={() => onMouseOverCard(offer.id)}>
      <div className="place-card__mark">
        <span>{offer.isPremium ? 'Premium' : ''}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={cityCardURL}>
          <img className="place-card__image" src={offer.previewPictureURL} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * RATING_TO_BAR_WIDTH_RATIO}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={cityCardURL}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default CityCard;

