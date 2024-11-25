const Option = {
  OffersCount: 4
} as const;

const Path = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;

export { Option, Path };

