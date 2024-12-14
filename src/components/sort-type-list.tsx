import { useAppSelector } from '../hooks';
import { SortTypeName } from '../mocks/mock-const';
import SortType from './sort-type';

export default function SortTypeList (): JSX.Element {
  const selectedSortType = useAppSelector((state) => state.sortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(SortTypeName).map((sortType) => <SortType sortTypeName={sortType} isSelected={selectedSortType === sortType} key={sortType} />)}
      </ul>
    </form>
  );
}
