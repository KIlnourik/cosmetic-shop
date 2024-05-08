import { FilterType } from '../../../types/types';

type Props = {
  id?: number,
  filterItemValue?: string,
  filterItemTitle?: string,
  filters: FilterType,
  params?: string[],
  isSPF?: boolean,
  isBestSeller?: boolean,
  handleInputChange?: (value: string, filters: FilterType) => void;
  handleAdditionalInputChange?: (name: string) => void
};

function CatalogFilterItem({
  id,
  filterItemValue,
  filterItemTitle,
  filters,
  params,
  isSPF,
  isBestSeller,
  handleInputChange,
  handleAdditionalInputChange
}: Props): JSX.Element {

  const getCheckedStatus = (filterValue: string): boolean | undefined => {
    if (params) filterValue in params;
    return undefined;
  };

  return (
    <>
      {
        (filters.name !== 'additional' && filterItemValue && handleInputChange)
        &&
        <li className='filter__item'>
          <input className='visually-hidden' type='checkbox' id={`filter-${filters.name}-${id}`} name={filters.name} value={`${filters.name}-${filterItemValue}`}
            checked={getCheckedStatus(filterItemValue)}
            onChange={() => handleInputChange(`${filters.name}-${filterItemValue}`, filters)}
          />
          <label className='filter__checkbox-label' htmlFor={`filter-${filters.name}-${id}`}>{filterItemTitle}</label>
        </li>
      }
      {(filters.name === 'additional' && handleAdditionalInputChange)
        &&
        <>
          <li className='filter__item'>
            <input className='visually-hidden' type='checkbox' id={`filter-${filters.name}-0`} name={filters.name}
              checked={isSPF}
              onChange={() => handleAdditionalInputChange(Object.keys(filters.items)[0])}
            />
            <label className='filter__checkbox-label' htmlFor={`filter-${filters.name}-0`}>{Object.values(filters.items)[0]}</label>
          </li>
          <li className='filter__item'>
            <input className='visually-hidden' type='checkbox' id={`filter-${filters.name}-1`} name={filters.name}
              checked={isBestSeller}
              onChange={() => handleAdditionalInputChange(Object.keys(filters.items)[1])}
            />
            <label className='filter__checkbox-label' htmlFor={`filter-${filters.name}-1`}>{Object.values(filters.items)[1]}</label>
          </li>
        </>
      }
    </>
  );
}

export default CatalogFilterItem;
