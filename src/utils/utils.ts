import { ApiRoute } from '../const';

function getPathById (id: string | undefined) {
  return `/offer/${id}`;
}

function getOfferUrlById (id: string | undefined) {
  return `${ApiRoute.Offers}/${id}`;
}

function getNearbyOffersUrlById (id: string | undefined) {
  return `${ApiRoute.Offers}/${id}${ApiRoute.NearbyOffers}`;
}

function getCommentsUrlById (id: string | undefined) {
  return `${ApiRoute.Comments}/${id}`;
}

function getOfferFavoriteStatusUrl (id: string, status: number) {
  return `${ApiRoute.Favorite}/${id}/${status}`;
}

function getFormattedDate(date: string): string {
  const formatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
  const formattedDate = formatter.format(new Date(date));

  return formattedDate;
}

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export { getPathById, getOfferUrlById, getNearbyOffersUrlById, getCommentsUrlById, getOfferFavoriteStatusUrl, getFormattedDate, getRandomInt };
