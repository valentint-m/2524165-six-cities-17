const Path = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;

const RATING_TO_BAR_WIDTH_RATIO = 20;

export { Path, RATING_TO_BAR_WIDTH_RATIO };

