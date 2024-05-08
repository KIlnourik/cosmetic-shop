import { Helmet } from 'react-helmet-async';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import FollowBlock from '../../components/follow-block/follow-block';
import Contacts from '../../components/contacts/contacts';
import { SideCatalogType, SkinTypes } from '../../const';
import CatalogListLayout from '../../components/catalog-list-layout/catalog-list-layout';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useSearchParams } from 'react-router-dom';
import { fetchProductsAction } from '../../store/api-actions';
import { FilterType } from '../../types/types';
import { getFilterItems } from '../../utils/utils';
import { getProductsLoadingStatus, getProducts } from '../../store/product-process/selector';

function CatalogPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const filteredProducts = useAppSelector(getProducts);
  const isFilteredProductsLoading = useAppSelector(getProductsLoadingStatus);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSPF, setSPF] = useState<boolean>(searchParams.has('isSPF'));
  const [isBestSeller, setBestSeller] = useState<boolean>(searchParams.has('isBestSeller'));
  const [skinTypes, setSkinTypes] = useState(searchParams.getAll('skinType[]') || []);
  const [categories, setCategories] = useState(searchParams.getAll('categorie') || []);

  const queryParams = new URLSearchParams({});

  useEffect(() => {
    dispatch(fetchProductsAction(searchParams));
  }, [dispatch, searchParams])

  const handleSubmit = (evt: SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isSPF) queryParams.append('isSPF', 'true');
    if (isBestSeller) queryParams.append('isBestSeller', 'true');
    if (skinTypes.length) skinTypes.map(skinType => queryParams.append('skinType[]', skinType));
    if (categories.length) categories.map(categorie => queryParams.append('categorie[]', categorie));
    setSearchParams(queryParams);

    dispatch(fetchProductsAction(searchParams));
  };

  const handleResetFilter = (evt: SyntheticEvent) => {
    evt.preventDefault();
    setSearchParams({});
    dispatch(fetchProductsAction(searchParams))
  }

  const handleInputChange = (value: string, filterType: FilterType) => {
    switch (filterType.name) {
      case 'face':
        setCategories(getFilterItems(value as string, categories));
        break;
      case 'body':
        setCategories(getFilterItems(value as string, categories));
        break;
      case 'skinType':
        Object.entries(SkinTypes.items).map(([key, objValue]) => {
          if (value.includes(key)) setSkinTypes(getFilterItems(objValue.toLowerCase(), skinTypes));
        });
        break;
    }
  };

  const handleAdditionalInputChange = (name: string) => {
    switch (name) {
      case 'isSPF':
        setSPF(!isSPF);
        break;
      case 'isBestSeller':
        setBestSeller(!isBestSeller);
        break;
    }
  };

  console.log(skinTypes)

  return (
    <>
      <Helmet>
        <title>Maroon: Каталог</title>
      </Helmet>
      <main className="main main_top-spaced catalog-main">
        <section className="catalog">
          <CatalogFilter
            searchParams={searchParams}
            isSPF={isSPF}
            isBestSeller={isBestSeller}
            skinTypes={skinTypes}
            categories={categories}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleAdditionalInputChange={handleAdditionalInputChange}
            handleResetFilter={handleResetFilter}
          />
          {
            (filteredProducts && !isFilteredProductsLoading)
            &&
            <CatalogListLayout filteredProducts={filteredProducts} />
          }
        </section>
        <CatalogListLayout catalogType={SideCatalogType.History} />
        <FollowBlock />
        <Contacts />
      </main>
    </>
  );
}

export default CatalogPage;
