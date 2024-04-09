import { useRef } from 'react';
import { initAccordion, destroyAccordion, onAccorderonTogglerClick } from '../../../utils/utils';
import { MOBILE_MAX_WIDTH } from '../../../const';
import CatalogFilterList from '../catalog-filter-list/catalog-filter-list';
import { Filter } from '../../../types/types';

type Props = {
  filter: Filter;
}

function CatalogFilterBlock({ filter }: Props): JSX.Element {
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

  window.addEventListener(`resize`, setMobileFilterAccordions);

  setMobileFilterAccordions();

  return (
    <div className={`filter__block accordion filter__block_${filter.name}`} ref={filterBlockRef}>
      <div className="filter__block-head">
        <div className="filter__subtitle">{filter.title}</div>
        <button className="filter__accordion-btn accordion__toggler" type="button" aria-label="Раскрыть фильтр" onClick={onAccorderonTogglerClick}>
          <span className="accordion__toggler-icon"></span>
        </button>
      </div>
      <div className="accordion__content">
        <CatalogFilterList filter={filter} />
      </div>
    </div>
  );
}

export default CatalogFilterBlock;
