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

enum RatingValue {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}

enum RatingClassName {
  OneStar = 'rating_1-star',
  TwoStars = 'rating_2-stars',
  ThreeStars = 'rating_3-stars',
  FourStars = 'rating_4-stars',
  FiveStars = 'rating_5-stars'
}

export { Path, UrlMarker, ReviewLength, SortTypeName, ApiRoute, AuthorizationStatus, NameSpace, CityName, RatingClassName, RatingValue };

