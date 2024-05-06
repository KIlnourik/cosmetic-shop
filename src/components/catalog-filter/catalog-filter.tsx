import { SyntheticEvent, memo, useRef, useState } from 'react';
import { AdditionalFilters, CareTypes, FILTER_HIDDEN_CLASS, SkinTypes } from '../../const';
import CatalogFilterList from './catalog-filter-list/catalog-filter-list';
import { useAppDispatch } from '../../hooks';
import { fetchProductsAction } from '../../store/api-actions';
import { useSearchParams } from 'react-router-dom';
import { FilterType } from '../../types/types';
import { getFilterItems } from '../../utils/utils';

const CatalogFilter = memo(function CatalogFilter(): JSX.Element {

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

  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [isSPF, setSPF] = useState(searchParams.has('isSPF'));
  const [isBestseller, setBestseller] = useState(searchParams.has('isBestseller'));
  const [skinTypes, setSkinTypes] = useState(searchParams.getAll('skinType[]') || []);
  const [categories, setCategories] = useState(searchParams.getAll('categorie') || []);

  const handleSubmit = (evt: SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const queryParams = new URLSearchParams({});
    if (isSPF) queryParams.append('isSPF', 'true');
    if (isBestseller) queryParams.append('isBestseller', 'true');
    if (skinTypes.length) skinTypes.map(skinType => queryParams.append('skinType[]', skinType));
    if (categories.length) categories.map(categorie => queryParams.append('categorie[]', categorie));
    setSearchParams(queryParams);
    dispatch(fetchProductsAction(queryParams));
  };

  const handleInputChange = (value: string, filterType: FilterType) => {
    switch (filterType.name) {
      case 'face':
        setCategories(getFilterItems(value, categories));
        break;
      case 'body':
        setCategories(getFilterItems(value, categories));
        break;
      case 'additional':
        if (value === 'additional-isSPF') {
          setSPF(true);
        }
        if (value === 'additional-isBestseller') {
          setBestseller(true);
        }
        break;
      case 'skinType':
        setSkinTypes(getFilterItems(value, skinTypes));
    }
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
                <CatalogFilterList filterType={filterType} params={categories} handleInputChange={handleInputChange} key={index} />
              ))}
              <CatalogFilterList filterType={SkinTypes} params={skinTypes} handleInputChange={handleInputChange} />
              <CatalogFilterList filterType={AdditionalFilters} params={[isSPF, isBestseller]} handleInputChange={handleInputChange} />
              <div className="filter__buttons">
                <button className="filter__button"
                  id="filter-submit"
                  type="submit"
                >Применить</button>
                <button className="filter__button" id="filter-reset" type="reset">Сбросить</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
})

export default CatalogFilter;
