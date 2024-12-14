import { useAppDispatch } from '../hooks';
import { changeSortType, sortCityOffers } from '../store/actions';

type SortTypeProps = {
  sortTypeName: string;
  isSelected: boolean;
}

export default function SortType ({sortTypeName, isSelected}: SortTypeProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleClick () {
    if (!isSelected) {
      dispatch(changeSortType({sortTypeName}));
      dispatch(sortCityOffers());
    }
  }

  return (
    <li className={`places__option ${isSelected ? 'places__option--active' : null} tabIndex={0}`} onClick={handleClick}>{sortTypeName}</li>
  );
}
