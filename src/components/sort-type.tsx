type SortTypeProps = {
  sortTypeName: string;
  isSelected: boolean;
  onTypeSelected: (sortTypeName: string, isSelected: boolean) => void;
}

export default function SortType ({sortTypeName, isSelected, onTypeSelected}: SortTypeProps): JSX.Element {
  return (
    <li className={`places__option ${isSelected ? 'places__option--active' : null} tabIndex={0}`} onClick={() => onTypeSelected(sortTypeName, isSelected)}>{sortTypeName}</li>
  );
}
