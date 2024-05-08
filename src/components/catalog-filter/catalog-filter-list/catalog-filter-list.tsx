import { useEffect, useRef } from 'react';
import { initAccordion, destroyAccordion, onAccorderonTogglerClick } from '../../../utils/utils';
import { MOBILE_MAX_WIDTH } from '../../../const';
import { FilterType } from '../../../types/types';
import CatalogFilterItem from '../catalog-filter-item/catalog-filter-item';

type Props = {
  filterType: FilterType;
  params?: string[],
  isSPF?: boolean,
  isBestSeller?: boolean,
  handleInputChange?: (value: string, filters: FilterType) => void;
  handleAdditionalInputChange?: (name: string) => void
}

function CatalogFilterList({ filterType, params,  isSPF, isBestSeller, handleInputChange, handleAdditionalInputChange }: Props): JSX.Element {
  const filterBlockRef = useRef<HTMLDivElement | null>(null);

  const setMobileFilterAccordions = () => {
    if (filterBlockRef.current) {
      if (window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`).matches) {
        initAccordion(filterBlockRef.current);
      } else {
        destroyAccordion(filterBlockRef.current);
      }
    }
  };

  useEffect(() => {
    window.addEventListener(`resize`, setMobileFilterAccordions);
    setMobileFilterAccordions();
  });

  const filterItems = filterType.items;

  return (
    <div className={`filter__block accordion filter__block_${filterType.name}`} ref={filterBlockRef}>
      <div className="filter__block-head">
        <div className="filter__subtitle">{filterType.title}</div>
        <button className="filter__accordion-btn accordion__toggler" type="button" aria-label="Раскрыть фильтр" onClick={onAccorderonTogglerClick}>
          <span className="accordion__toggler-icon"></span>
        </button>
      </div>
      <div className="accordion__content">
        <ul className="filter__list accordion__inner">
          {filterType.name !== 'additional'
            &&
            Object.entries(filterItems).map(([key, value], index) => (
              <CatalogFilterItem key={`${filterType.name}${index}`}
                id={index}
                params={params}
                filterItemValue={key}
                filterItemTitle={value}
                filters={filterType}
                handleInputChange={handleInputChange}
              />
            ))}
          {filterType.name === 'additional'
            &&
            <CatalogFilterItem
              isSPF={isSPF}
              isBestSeller={isBestSeller}
              filters={filterType}
              handleAdditionalInputChange={handleAdditionalInputChange}
            />
          }
        </ul>
      </div>
    </div>
  );
}

export default CatalogFilterList;
