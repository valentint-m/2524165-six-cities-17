import { CityName, HousingType } from '../mocks/mock-const';

type OfferCity = CityName.Amsterdam | CityName.Brussels | CityName.Cologne | CityName.Dusseldorf | CityName.Hamburg | CityName.Paris;

type OfferType = HousingType.Apartment | HousingType.Hotel | HousingType.House | HousingType.Room;

type City = {
  title: OfferCity;
  lat: number;
  lng: number;
  zoom: number;
}

type Host = {
  avatarURL: string;
  name: string;
  isPro: boolean;
}

type Picture = {
  id: string;
  url: string;
}

export type Offer = {
  id: string;
  title: string;
  description: string;
  previewPictureURL: string;
  pictures: Picture[];
  type: OfferType;
  city: City;
  price: number;
  rating: number;
  bedroomCount: number;
  maxGuestCount: number;
  isPremium: boolean;
  isFavorite: boolean;
  host: Host;
}


