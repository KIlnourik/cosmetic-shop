import { SyntheticEvent, memo, useRef, useState } from 'react';
import { AdditionalFilters, CareTypes, FILTER_HIDDEN_CLASS, SkinTypes } from '../../const';
import CatalogFilterList from './catalog-filter-list/catalog-filter-list';
import { FilterType } from '../../types/types';


type Props = {
  searchParams: URLSearchParams,
  isSPF: boolean,
  isBestSeller: boolean,
  skinTypes: string[],
  categories: string[]
  handleInputChange?: (value: string, filters: FilterType) => void,
  handleSubmit: (evt: SyntheticEvent<HTMLFormElement>) => void,
  handleAdditionalInputChange: (name: string) => void
  handleResetFilter: (evt: SyntheticEvent) => void,
};

const CatalogFilter = memo(function CatalogFilter({
  isSPF,
  isBestSeller,
  skinTypes,
  categories,
  handleInputChange,
  handleSubmit,
  handleAdditionalInputChange,
  handleResetFilter
}: Props): JSX.Element {

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const openBtnRef = useRef<HTMLButtonElement | null>(null);
  const catalogHeadRef = useRef<HTMLDivElement | null>(null);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const onFilterOutsideClick = (evt: MouseEvent) => {
    const target = evt.target as HTMLElement;
    if (!catalogHeadRef.current?.contains(target)) {
      setFilterOpen(false);
      document.removeEventListener('keydown', onEscKeydown);
      document.removeEventListener('click', onFilterOutsideClick);
    }
  };

  const onEscKeydown = (evt: KeyboardEvent) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      setFilterOpen(false);
      document.removeEventListener('keydown', onEscKeydown);
      document.removeEventListener('click', onFilterOutsideClick);
    }
  };

  const handleFilterBtnClick = () => {
    setFilterOpen(true);
    document.addEventListener('keydown', onEscKeydown);
    document.addEventListener('click', onFilterOutsideClick);
  }

  const handleCloseBtnClick = () => {
    setFilterOpen(false);
    document.removeEventListener('keydown', onEscKeydown);
    document.removeEventListener('click', onFilterOutsideClick);
  };

  return (
    <div className={`catalog-head catalog-head_filter-inited ${filterOpen ? '' : FILTER_HIDDEN_CLASS}`} ref={catalogHeadRef} >
      <div className="catalog-head__top">
        <div className="catalog-head__wrapper wrapper">
          <h1 className="catalog-head__title">Каталог</h1>
          <button className="catalog-head__button-close" aria-label="Закрыть фильтр" type="button" ref={closeBtnRef} onClick={handleCloseBtnClick}></button>
          <button className="catalog-head__button-open" type="button" ref={openBtnRef} onClick={handleFilterBtnClick}>Фильтр</button>
        </div>
      </div>
      <div className="catalog-head__filter">
        <div className="wrapper">
          <form className="filter" action="#" method="#" onSubmit={handleSubmit}>
            <div className="filter__inner">
              {CareTypes.map((filterType, index) => (
                <CatalogFilterList
                  filterType={filterType}
                  params={categories}
                  handleInputChange={handleInputChange}
                  key={index}
                />
              ))}
              <CatalogFilterList
                filterType={SkinTypes}
                params={skinTypes}
                handleInputChange={handleInputChange}
              />
              <CatalogFilterList
                filterType={AdditionalFilters}
                isSPF={isSPF}
                isBestSeller={isBestSeller}
                handleAdditionalInputChange={handleAdditionalInputChange}
              />
              <div className="filter__buttons">
                <button className="filter__button"
                  id="filter-submit"
                  type="submit"
                >Применить</button>
                <button className="filter__button" id="filter-reset" type="reset" onClick={handleResetFilter}>Сбросить</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
})

export default CatalogFilter;
