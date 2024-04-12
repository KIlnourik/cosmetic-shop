import { Helmet } from 'react-helmet-async';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import { Product } from '../../types/product';
import { Filter } from '../../types/types';
import CatalogList from '../../components/catalog-list/catalog-list';
import CatalogHistory from '../../components/catalog-history/catalog-history';
import FollowBlock from '../../components/follow-block/follow-block';
import Contacts from '../../components/contacts/contacts';
import { CatalogListType } from '../../const';

type Props = {
  products: Product[];
  filters: Filter[];
}

function CatalogPage({ products, filters }: Props): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Maroon: Каталог</title>
      </Helmet>
      <main className="main main_top-spaced catalog-main">
        <section className="catalog">
          <CatalogFilter filters={filters} />
          <CatalogList products={products} />
        </section>
        <CatalogHistory products={products} type={CatalogListType.History}/>
        <FollowBlock />
        <Contacts />
      </main>
    </>
  );
}

export default CatalogPage;
