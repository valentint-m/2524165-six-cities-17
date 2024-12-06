const Path = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;

const UrlMarker = {
  Default: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  Selected: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg'
} as const;

const RATING_TO_BAR_WIDTH_RATIO = 20;

export { Path, UrlMarker, RATING_TO_BAR_WIDTH_RATIO };

