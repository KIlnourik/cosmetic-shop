import { Helmet } from 'react-helmet-async';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import FollowBlock from '../../components/follow-block/follow-block';
import Contacts from '../../components/contacts/contacts';
import { SideCatalogType } from '../../const';
import CatalogListLayout from '../../components/catalog-list-layout/catalog-list-layout';

function CatalogPage(): JSX.Element {

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
