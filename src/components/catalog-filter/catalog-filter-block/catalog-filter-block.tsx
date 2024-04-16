import { useRef } from 'react';
import { initAccordion, destroyAccordion, onAccorderonTogglerClick } from '../../../utils/utils';
import { MOBILE_MAX_WIDTH } from '../../../const';
import CatalogFilterList from '../catalog-filter-list/catalog-filter-list';
import { CareType, SkinType } from '../../../types/types';

type Props = {
  filterType: CareType | SkinType;
}

function CatalogFilterBlock({ filterType }: Props): JSX.Element {
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
    <div className={`filter__block accordion filter__block_${filterType.name}`} ref={filterBlockRef}>
      <div className="filter__block-head">
        <div className="filter__subtitle">{filterType.title}</div>
        <button className="filter__accordion-btn accordion__toggler" type="button" aria-label="Раскрыть фильтр" onClick={onAccorderonTogglerClick}>
          <span className="accordion__toggler-icon"></span>
        </button>
      </div>
      <div className="accordion__content">
        <CatalogFilterList filter={filterType} />
      </div>
    </div>
  );
}

export default CatalogFilterBlock;
