import { Helmet } from 'react-helmet-async';
import { Product } from '../../types/product';
import { useEffect } from 'react';
import { fetchAllProductsAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllProducts } from '../../store/product-process/selector';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import FollowBlock from '../../components/follow-block/follow-block';
import Contacts from '../../components/contacts/contacts';
import { SideCatalogType } from '../../const';
import CatalogListLayout from '../../components/catalog-list-layout/catalog-list-layout';

type Props = {
  products: Product[];
}

function CatalogPage({ products }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(getAllProducts);

  useEffect(() => {
    dispatch(fetchAllProductsAction());
  }, [dispatch])

  return (
    <>
      <Helmet>
        <title>Maroon: Каталог</title>
      </Helmet>
      <main className="main main_top-spaced catalog-main">
        <section className="catalog">
          <CatalogFilter />
          <CatalogListLayout />
        </section>
        <CatalogListLayout catalogType={SideCatalogType.History} />
        <FollowBlock />
        <Contacts />
      </main>
    </>
  );
}

export default CatalogPage;
