import { City, Offer } from './types/offer';

function getCityByName (cities: City[], cityName: string): City {
  return cities.find((city) => city.title === cityName) as City;
}

function getOffersByCity (offers: Offer[], cityName: string): Offer[] {
  return offers.filter((offer) => offer.city.title === cityName);
}

export { getCityByName, getOffersByCity };
