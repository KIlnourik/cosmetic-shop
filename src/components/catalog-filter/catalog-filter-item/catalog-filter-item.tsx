import { FilterType } from '../../../types/types';

type Props = {
  id?: number,
  filterItemValue: string,
  filterItemTitle: string,
  filters: FilterType,
  params: string[],
  handleInputChange: (value: string, filters: FilterType) => void;
};

const getCheckedStatus = (filterValue: string, params: string[]): boolean => {
  return params.includes(filterValue);
};

function CatalogFilterItem({
  id,
  filterItemValue,
  filterItemTitle,
  filters,
  params,
  handleInputChange,
}: Props): JSX.Element {

  return (
    <>
      {filters.name !== 'skinType'
      ?
        <li className='filter__item'>
          <input className='visually-hidden' type='checkbox' id={`filter-${filters.name}-${id}`} name={filters.name} value={`${filters.name}-${filterItemValue}`}
            checked={getCheckedStatus(`${filters.name}-${filterItemValue}`, params)}
            onChange={() => handleInputChange(`${filters.name}-${filterItemValue}`, filters)}
          />
          <label className='filter__checkbox-label' htmlFor={`filter-${filters.name}-${id}`}>{filterItemTitle}</label>
        </li>
        :
        <li className='filter__item'>
        <input className='visually-hidden' type='checkbox' id={`filter-${filters.name}-${id}`} name={filters.name} value={`${filters.name}-${filterItemValue}`}
          checked={getCheckedStatus(filterItemTitle.toLowerCase(), params)}
          onChange={() => handleInputChange(filterItemValue, filters)}
        />
        <label className='filter__checkbox-label' htmlFor={`filter-${filters.name}-${id}`}>{filterItemTitle}</label>
      </li>
      }
    </>
  );
}

export default CatalogFilterItem;
