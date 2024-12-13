import { Offer, OfferCity } from './types/offer';

function getOffersByCity (offers: Offer[], cityName: OfferCity): Offer[] {
  return offers.filter((offer) => offer.city.title === cityName);
}

export { getOffersByCity };
