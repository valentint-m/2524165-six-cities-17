type OfferPictureProps = {
  pictureURL: string;
}

function OfferPicture ({pictureURL}: OfferPictureProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={pictureURL} alt="Photo studio" />
    </div>
  );
}

export default OfferPicture;

