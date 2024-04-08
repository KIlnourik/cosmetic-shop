import { useRef, useState } from 'react';
import { FILTER_HIDDEN_CLASS, FilterType } from '../../const';
import CatalogFilterBlock from '../catalog-filter-block/catalog-filter-block';
import { Filter } from '../../types/types';

type Props = {
  filters: Filter[];
}

function CatalogFilter({ filters }: Props): JSX.Element {

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
              <CatalogFilterBlock type={FilterType.FaceCare} />
              <div className="filter__block accordion filter__block_body-care">
                <div className="filter__block-head">
                  <div className="filter__subtitle">Уход для тела</div>
                  <button className="filter__accordion-btn accordion__toggler" type="button" aria-label="Раскрыть фильтр">
                    <span className="accordion__toggler-icon"></span>
                  </button>
                </div>
                <div className="accordion__content">
                  <ul className="filter__list accordion__inner">
                    <li className="filter__item">
                      <input className="visually-hidden" type="checkbox" id="filter-body-care-0" name="body-care" value="cream" />
                      <label className="filter__checkbox-label" htmlFor="filter-body-care-0">Крема</label>
                    </li>
                    <li className="filter__item">
                      <input className="visually-hidden" type="checkbox" id="filter-body-care-1" name="body-care" value="oil" defaultChecked />
                      <label className="filter__checkbox-label" htmlFor="filter-body-care-1">Масла</label>
                    </li>
                    <li className="filter__item">
                      <input className="visually-hidden" type="checkbox" id="filter-body-care-2" name="body-care" value="scrub" />
                      <label className="filter__checkbox-label" htmlFor="filter-body-care-2">Скрабы</label>
                    </li>
                    <li className="filter__item">
                      <input className="visually-hidden" type="checkbox" id="filter-body-care-3" name="body-care" value="soap" defaultChecked />
                      <label className="filter__checkbox-label" htmlFor="filter-body-care-3">Мыло</label>
                    </li>
                    <li className="filter__item">
                      <input className="visually-hidden" type="checkbox" id="filter-body-care-4" name="body-care" value="bomb" defaultChecked />
                      <label className="filter__checkbox-label" htmlFor="filter-body-care-4">Бомбочки для ванны</label>
                    </li>
                    <li className="filter__item">
                      <input className="visually-hidden" type="checkbox" id="filter-body-care-5" name="body-care" value="salt" />
                      <label className="filter__checkbox-label" htmlFor="filter-body-care-5">Соль для ванны</label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter__block accordion filter__block_skin-type">
                <div className="filter__block-head">
                  <div className="filter__subtitle">Тип кожи</div>
                  <button className="filter__accordion-btn accordion__toggler" type="button" aria-label="Раскрыть фильтр"><span className="accordion__toggler-icon"></span></button>
                </div>
                <div className="accordion__content">
                  <ul className="filter__list accordion__inner">
                    <li className="filter__item">
                      <input className="visually-hidden" type="checkbox" id="filter-skin-type-0" name="skin-type" value="normal" />
                      <label className="filter__checkbox-label" htmlFor="filter-skin-type-0">Нормальная</label>
                    </li>
                    <li className="filter__item">
                      <input className="visually-hidden" type="checkbox" id="filter-skin-type-1" name="skin-type" value="dry" defaultChecked />
                      <label className="filter__checkbox-label" htmlFor="filter-skin-type-1">Сухая</label>
                    </li>
                    <li className="filter__item">
                      <input className="visually-hidden" type="checkbox" id="filter-skin-type-2" name="skin-type" value="oily" />
                      <label className="filter__checkbox-label" htmlFor="filter-skin-type-2">Жирная</label>
                    </li>
                    <li className="filter__item">
                      <input className="visually-hidden" type="checkbox" id="filter-skin-type-3" name="skin-type" value="combined" defaultChecked />
                      <label className="filter__checkbox-label" htmlFor="filter-skin-type-3">Комбинированная</label>
                    </li>
                  </ul>
                </div>
              </div>
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
