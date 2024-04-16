import { Helmet } from 'react-helmet-async';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import { Product } from '../../types/product';
import CatalogList from '../../components/catalog-list/catalog-list';
import SideCatalog from '../../components/side-catalog/side-catalog';
import FollowBlock from '../../components/follow-block/follow-block';
import Contacts from '../../components/contacts/contacts';
import { CatalogListType } from '../../const';
import { useEffect } from 'react';
import { fetchAllProductsAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllProducts } from '../../store/product-process/selector';

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
          <CatalogList />
        </section>
        <SideCatalog products={products} type={CatalogListType.History} />
        <FollowBlock />
        <Contacts />
      </main>
    </>
  );
}

export default CatalogPage;
