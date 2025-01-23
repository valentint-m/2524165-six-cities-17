type OfferGoodItemProps = {
  good: string;
}

export default function OfferGoodItem ({good}: OfferGoodItemProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {good}
    </li>
  );
}
