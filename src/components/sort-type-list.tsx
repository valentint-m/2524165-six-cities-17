import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import SortType from './sort-type';
import { changeSortType, sortCityOffers } from '../store/actions';

export default function SortTypeList (): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedSortType = useAppSelector((state) => state.sortType);
  const [isOpened, setOpened] = useState(false);

  function handleClick () {
    setOpened(true);
  }

  function handleTypeSelected (sortTypeName: string, isSelected: boolean): void {
    setOpened(false);
    if (!isSelected) {
      dispatch(changeSortType({sortTypeName}));
      dispatch(sortCityOffers());
    }
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleClick}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : null}`}>
        {Object.values(SortTypeName).map((sortType) => <SortType sortTypeName={sortType} isSelected={selectedSortType === sortType} key={sortType} onTypeSelected={handleTypeSelected}/>)}
      </ul>
    </form>
  );
}
