import { City, HousingType } from './mock-const';
import { Offer } from '../types/offer';

const Offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful &amp; luxurious apartment at great location',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    previewPictureURL: 'img/apartment-01.jpg',
    pictures: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    type: HousingType.Apartment,
    city: City.Amsterdam,
    price: 120,
    rating: 80,
    bedroomCount: 2,
    maxGuestCount: 5,
    isPremium: true,
    isFavorite: false,
    host: {
      avatarURL: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    }
  },
  {
    id: '2',
    title: 'Wood and stone place',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    previewPictureURL: 'img/room.jpg',
    pictures: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    type: HousingType.Room,
    city: City.Amsterdam,
    price: 50,
    rating: 80,
    bedroomCount: 1,
    maxGuestCount: 3,
    isPremium: false,
    isFavorite: false,
    host: {
      avatarURL: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    }
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    previewPictureURL: 'img/apartment-02.jpg',
    pictures: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    type: HousingType.Apartment,
    city: City.Amsterdam,
    price: 80,
    rating: 80,
    bedroomCount: 1,
    maxGuestCount: 4,
    isPremium: false,
    isFavorite: false,
    host: {
      avatarURL: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    }
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    previewPictureURL: 'img/apartment-03.jpg',
    pictures: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    type: HousingType.Apartment,
    city: City.Amsterdam,
    price: 100,
    rating: 100,
    bedroomCount: 2,
    maxGuestCount: 6,
    isPremium: true,
    isFavorite: false,
    host: {
      avatarURL: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    }
  }
];

export { Offers };
