import { SortTypeName } from './const';
import { City, Offer } from './types/offer';

function getCitiesInfo (offers: Offer[]) {
  const cityNames = new Set<string>();
  const cities: City[] = [];
  offers.forEach((offer) => cityNames.add(offer.city.name));

  cityNames.forEach((cityName) => {
    const offerByCity = offers.find((offer) => offer.city.name === cityName);
    if (offerByCity !== undefined) {
      cities.push(offerByCity.city);
    }
  });

  return cities;
}

function getCityByName (cities: City[], cityName: string): City {
  return cities.find((city) => city.name === cityName) as City;
}

function getOffersByCity (offers: Offer[], cityName: string): Offer[] {
  return offers.filter((offer) => offer.city.name === cityName);
}

function sortCityOffersByType (offers: Offer[], offersDefaultSort: Offer[], sortTypeName: string): Offer[] {
  switch (sortTypeName) {
    case SortTypeName.Popular:
      return offersDefaultSort;
    case SortTypeName.PriceLowToHigh:
      return offers.sort((offerA, offerB) => offerA.price - offerB.price);
    case SortTypeName.PriceHighToLow:
      return offers.sort((offerA, offerB) => offerB.price - offerA.price);
    case SortTypeName.TopRatedFirst:
      return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
}

export { getCityByName, getCitiesInfo, getOffersByCity, sortCityOffersByType };
