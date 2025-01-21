import { SortTypeName } from '../const';

type SortTypeProps = {
  sortTypeName: SortTypeName;
  isSelected: boolean;
  onTypeSelected: (sortTypeName: SortTypeName, isSelected: boolean) => void;
}

export default function SortType ({sortTypeName, isSelected, onTypeSelected}: SortTypeProps): JSX.Element {
  return (
    <li className={`places__option ${isSelected ? 'places__option--active' : null} tabIndex={0}`} onClick={() => onTypeSelected(sortTypeName, isSelected)}>{sortTypeName}</li>
  );
}
