import { CityName, HousingType } from '../mocks/mock-const';

export type OfferCity = CityName.Amsterdam | CityName.Brussels | CityName.Cologne | CityName.Dusseldorf | CityName.Hamburg | CityName.Paris;

type OfferType = HousingType.Apartment | HousingType.Hotel | HousingType.House | HousingType.Room;


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
  title: OfferCity;
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


