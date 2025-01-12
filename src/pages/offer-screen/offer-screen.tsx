import { Link, useParams } from 'react-router-dom';
import { AuthorizationStatus, Path, RATING_TO_BAR_WIDTH_RATIO } from '../../const';
import { Offer, OfferById } from '../../types/offer';
import { UserComment } from '../../types/comment';
import { store } from '../../store';
import { fetchCommentsByIdAction, fetchNearbyOffersByIdAction, fetchOfferByIdAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';
import OfferPicture from '../../components/offer-picture';
import FormSubmitComment from '../../components/form-submit-comment';
import ReviewList from '../../components/review-list';
import Map from '../../components/map';
import CityCard from '../../components/city-card';

function OfferScreen (): JSX.Element {
  const params = useParams();

  const offerById: OfferById = useAppSelector((state) => state.offerById);
  const offersNearby: Offer[] = useAppSelector((state) => state.offersNearby);
  const comments: UserComment[] = useAppSelector((state) => state.comments);
  const offers: Offer[] = useAppSelector((state) => state.offers);

  const isAuthorized = useAppSelector((state) => state.authorizationStatus === AuthorizationStatus.AUTH);

  if (params.id !== offerById.id) {
    store.dispatch(fetchOfferByIdAction(params.id));
    store.dispatch(fetchCommentsByIdAction(params.id));
    store.dispatch(fetchNearbyOffersByIdAction(params.id));
  }

  let favoritesCount = 0;
  for (let i = 0; i < offers.length; i++) {
    if (offers[i].isFavorite) {
      favoritesCount++;
    }
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={Path.Main} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={Path.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favoritesCount}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to={Path.Main} className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">

              {offerById.images.map((image) => <OfferPicture pictureURL={image} key={image}/>)}

            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerById.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${offerById.rating * RATING_TO_BAR_WIDTH_RATIO}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offerById.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerById.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offerById.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerById.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                  <li className="offer__inside-item">
                    Towels
                  </li>
                  <li className="offer__inside-item">
                    Heating
                  </li>
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offerById.host.avatarURL} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offerById.host.name}
                  </span>
                  <span className="offer__user-status">
                    {offerById.host.isPro ? 'Pro' : null}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offerById.description}
                  </p>
                  <p className="offer__text">
                    {offerById.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewList userComments={comments} />
                {isAuthorized && <FormSubmitComment offerId={params.id}/>}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={offerById.city} locations={offersNearby.map((offer) => offer.location)} selectedPoint={undefined}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersNearby.map((offer) => <CityCard offer={offer} onHoverOverCard={() => null} isOnMainPage key={offer.id} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
