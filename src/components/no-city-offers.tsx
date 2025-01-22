type NoCityOffersProps = {
  cityName: string;
}

export default function NoCityOffers ({cityName}: NoCityOffersProps): JSX.Element {
  return (
    <>
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">We could not find any property available at the moment in {cityName}</p>
    </>
  );
}
