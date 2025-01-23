enum Path {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

enum UrlMarker {
  Default = 'img/pin.svg',
  Selected = 'img/pin-active.svg'
}

enum SortTypeName {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

enum ApiRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  NearbyOffers = '/nearby',
  Comments = '/comments',
}

enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

enum ReviewLength {
  Min = 50,
  Max = 300,
}

const RATING_TO_BAR_WIDTH_RATIO = 20;

export { Path, UrlMarker, RATING_TO_BAR_WIDTH_RATIO, ReviewLength, SortTypeName, ApiRoute, AuthorizationStatus, NameSpace, CityName };

