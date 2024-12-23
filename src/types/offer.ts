type OfferType = string;

type Host = {
  avatarURL: string;
  name: string;
  isPro: boolean;
}

type Picture = {
  id: string;
  url: string;
}

export type Point = {
  title: string;
  lat: number;
  lng: number;
}

export type Points = Point[];

export type City = {
  title: string;
  location: {
    lat: number;
    lng: number;
    zoom: number;
  };
}

export type Offer = {
  id: string;
  title: string;
  description: string;
  previewPictureURL: string;
  pictures: Picture[];
  type: OfferType;
  city: City;
  location: Point;
  price: number;
  rating: number;
  bedroomCount: number;
  maxGuestCount: number;
  isPremium: boolean;
  isFavorite: boolean;
  host: Host;
}

export type OffersNearby = {
  id: string;
  offers: Offer[];
}


