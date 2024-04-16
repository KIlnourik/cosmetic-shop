import { useRef, useState } from 'react';
import { CareTypes, FILTER_HIDDEN_CLASS, SkinTypes } from '../../const';
import CatalogFilterBlock from './catalog-filter-block/catalog-filter-block';

function CatalogFilter(): JSX.Element {

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
          <form className="filter" action="https://echo.htmlacademy.ru" method="GET">
            <div className="filter__inner">
              {CareTypes.map((filterType, index) => (
                <CatalogFilterBlock filterType={filterType} key={index} />
              ))}
              <CatalogFilterBlock filterType={SkinTypes} />
              <div className="filter__buttons">
                <button className="filter__button" id="filter-submit" type="submit">Применить</button>
                <button className="filter__button" id="filter-reset" type="reset">Сбросить</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CatalogFilter;
