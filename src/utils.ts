import { ApiRoute } from './const';

function getPathById (id: string | undefined) {
  return `offer/${id}`;
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

function getFormattedDate(date: string): string {
  const formatter = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' });
  const formattedDate = formatter.format(new Date(date));

  return formattedDate;
}

export { getPathById, getOfferUrlById, getNearbyOffersUrlById, getCommentsUrlById, getFormattedDate };
