import { ApiRoute } from './const';
import { UserComment } from './types/comment';

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

function getOfferFavoriteStatusUrl (id: string, status: number) {
  return `${ApiRoute.Favorite}/${id}/${status}`;
}

function getFormattedDate(date: string): string {
  const formatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
  const formattedDate = formatter.format(new Date(date));

  return formattedDate;
}

function sortCommentsByNew(comments: UserComment[]) {
  const sortedComments = comments.sort((commentA, commentB) => {
    const newDateA = new Date(commentA.date);
    const newDateB = new Date(commentB.date);
    return newDateB > newDateA ? 1 : 0;
  });
  return sortedComments;
}

export { getPathById, getOfferUrlById, getNearbyOffersUrlById, getCommentsUrlById, getOfferFavoriteStatusUrl, getFormattedDate, sortCommentsByNew };
