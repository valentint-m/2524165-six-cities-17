import { City, HousingType } from '../mocks/mock-const';

type OfferCity = City.Amsterdam | City.Brussels | City.Cologne | City.Dusseldorf | City.Hamburg | City.Paris;

type OfferType = HousingType.Apartment | HousingType.Hotel | HousingType.House | HousingType.Room;

type Host = {
  avatarURL: string;
  name: string;
  isPro: boolean;
}

export type Offer = {
  id: string;
  title: string;
  description: string;
  previewPictureURL: string;
  pictures: string[];
  type: OfferType;
  city: OfferCity;
  price: number;
  rating: number;
  bedroomCount: number;
  maxGuestCount: number;
  isPremium: boolean;
  isFavorite: boolean;
  host: Host;
}


