import { CityName, SortTypeName } from './const';
import { City, Location, Offer } from './types/offer';

function getCitiesInfo (offers: Offer[]) {
  const cityNames = new Set<CityName>();
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

function getCityLocationByName (cities: City[], cityName: CityName): Location {
  const defaultLocation = {
    latitude: 0,
    longitude: 0,
    zoom: 10,
  };
  const cityLocation = cities.find((city) => city.name === cityName)?.location;

  return cityLocation ? cityLocation : defaultLocation;
}

function getOffersByCity (offers: Offer[], cityName: CityName): Offer[] {
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

export { getCityLocationByName, getCitiesInfo, getOffersByCity, sortCityOffersByType };
