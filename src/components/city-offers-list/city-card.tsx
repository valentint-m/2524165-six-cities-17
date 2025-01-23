/* eslint-disable react-refresh/only-export-components */
import { AuthorizationStatus, Path, RATING_TO_BAR_WIDTH_RATIO } from '../../const';
import { Offer } from '../../types/offer';
import { Link, useNavigate } from 'react-router-dom';
import { getPathById } from '../../utils/utils';
import { Location } from '../../types/offer';
import { changeOfferFavoriteStatusAction } from '../../store/api-actions/api-actions';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import PremiumMarkCard from '../premium-mark-card/premium-mark-card';
import React from 'react';

type CityCardProps = {
  offer: Offer;
  isOnMainPage: boolean;
  onHoverOverCard: (location: Location) => void;
  onMouseLeaveCard: () => void;
}

function CityCard ({offer, isOnMainPage, onHoverOverCard, onMouseLeaveCard}: CityCardProps): JSX.Element {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;
  const offerId = offer.id;
  const status = offer.isFavorite;

  function handleFavoriteButtonClick () {
    if (isLoggedIn) {
      store.dispatch(changeOfferFavoriteStatusAction({offerId, status}));
    } else {
      navigate(Path.Login);
    }
  }

  return (
    <article className={`${isOnMainPage ? 'cities__card' : 'near-places__card'} place-card`} >

      {offer.isPremium && <PremiumMarkCard />}

      <div className={`${isOnMainPage ? 'cities__image-wrapper' : 'near-places__image-wrapper'} place-card__image-wrapper`}>
        <Link to={getPathById(offer.id)}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" onMouseOver={() => onHoverOverCard(offer.location)} onMouseLeave={() => onMouseLeaveCard()}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${status ? 'place-card__bookmark-button--active' : null} button type="button"`} onClick={() => handleFavoriteButtonClick()}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{status ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * RATING_TO_BAR_WIDTH_RATIO}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getPathById(offer.id)}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default React.memo(CityCard, (prevProps, nextProps) => prevProps.offer.id === nextProps.offer.id && prevProps.offer.isFavorite === nextProps.offer.isFavorite);

