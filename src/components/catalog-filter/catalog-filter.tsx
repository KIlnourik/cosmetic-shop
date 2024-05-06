import {  SyntheticEvent, memo, useEffect, useRef, useState } from 'react';
import { AdditionalFilters, CareTypes, FILTER_HIDDEN_CLASS, SkinTypes } from '../../const';
import CatalogFilterBlock from './catalog-filter-block/catalog-filter-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchProductsAction } from '../../store/api-actions';
import { getProducts } from '../../store/product-process/selector';
import { useSearchParams } from 'react-router-dom';

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
  const filteredProducts = useAppSelector(getProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  const [skinType, setSkinType] = useState(searchParams.getAll('skinType[]') || []);
  const [isSPF, setSPF] = useState(searchParams.get('isSPF') || '');
  const [isBestseller, setBestseller] = useState(searchParams.get('isBestseller') || '');
  const [careTypes, setCareTypes] = useState(searchParams.getAll('careType') || []);
  const [productTypes, setProductTypes] = useState(searchParams.getAll('productType') || []);

  useEffect(() => {
    // const queryParams = new URLSearchParams({ isBestSeller: 'true'});
    const queryParams = new URLSearchParams({});

    // queryParams.append('careType', 'face');
    // queryParams.append('isSPF', 'true');
    // queryParams.append('skinType[]', 'жирная');

    console.log(queryParams.toString())

    dispatch(fetchProductsAction(queryParams));
  }, [dispatch])

  const handleSubmit = (evt: SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const filterForm = evt.target as HTMLFormElement;
    const formData = new FormData(filterForm);
    console.log(formData);
  }

  // console.log(filteredProducts);
  // filteredProducts.forEach((el) => console.log(el.type));

  // const handleInputChange = (filterType, value) => {

  // }

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
                <CatalogFilterBlock filterType={filterType} key={index} />
              ))}
              <CatalogFilterBlock filterType={SkinTypes} />
              <CatalogFilterBlock filterType={AdditionalFilters} />
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
