
import { FilterType } from '../../../types/types';

type Props = {
  id?: number,
  filters: FilterType,
  isSPF?: boolean,
  isBestSeller?: boolean,
  handleAdditionalInputChange?: (name: string) => void
};

function AdditionalCatalogFilterItem({
  filters,
  isSPF,
  isBestSeller,
  handleAdditionalInputChange
}: Props): JSX.Element {

  return (
    <>
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

export default AdditionalCatalogFilterItem;

