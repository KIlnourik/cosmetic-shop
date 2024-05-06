
import { FilterType } from '../../../types/types';

type Props = {
  id: number,
  filterItemValue: string,
  filterItemTitle: string,
  filters: FilterType,
  params: string | string[] | boolean[],
  handleInputChange: (value: string, filters: FilterType) => void;
};

function CatalogFilterItem({
  id,
  filterItemValue,
  filterItemTitle,
  filters,
  params,
  handleInputChange
}: Props): JSX.Element {

  const getCheckedStatus = (filterValue: string, filters: FilterType): boolean | undefined => {
    Object.entries(filters.items).map(([, value]) => {
      if (filterValue === value) {
        return true;
      }
    });
    return undefined;
  }

  return (
    <li className='filter__item'>
      <input className='visually-hidden' type='checkbox' id={`filter-${filters.name}-${id}`} name={filters.name} value={`${filters.name}-${filterItemValue}`}
        checked={getCheckedStatus(filterItemValue, filters)}
        onChange={() => handleInputChange(`${filters.name}-${filterItemValue}`, filters)}
      />
      <label className='filter__checkbox-label' htmlFor={`filter-${filters.name}-${id}`}>{filterItemTitle}</label>
    </li>
  );
}

export default CatalogFilterItem;
