import CatalogList from "../catalog-list/catalog-list";

type Props = {
  catalogType?: string;
}

function CatalogListLayout({ catalogType }: Props): JSX.Element {

  if (catalogType) {
    return (
      <section className="catalog-history">
        <div className="catalog-history__wrapper">
          <h2>{catalogType}</h2>
          <CatalogList catalogType={catalogType}/>
        </div>
      </section>)
  }

  return (
    <div className="catalog__wrapper wrapper">
      <CatalogList />
    </div>
  );
}

export default CatalogListLayout;
