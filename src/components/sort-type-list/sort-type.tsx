import { SortTypeName } from '../../const';

type SortTypeProps = {
  sortTypeName: SortTypeName;
  isSelected: boolean;
  handleTypeSelected: (sortTypeName: SortTypeName, isSelected: boolean) => void;
}

export default function SortType ({sortTypeName, isSelected, handleTypeSelected}: SortTypeProps): JSX.Element {
  return (
    <li className={`places__option ${isSelected ? 'places__option--active' : null} tabIndex={0}`} onClick={() => handleTypeSelected(sortTypeName, isSelected)}>{sortTypeName}</li>
  );
}
