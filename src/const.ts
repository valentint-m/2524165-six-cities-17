const Path = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;

const UrlMarker = {
  Default: 'img/pin.svg',
  Selected: 'img/pin-active.svg'
} as const;

const RATING_TO_BAR_WIDTH_RATIO = 20;

export { Path, UrlMarker, RATING_TO_BAR_WIDTH_RATIO };

