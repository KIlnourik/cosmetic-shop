import { SideCatalogType } from "../../const";
import { useAppSelector } from "../../hooks";
import { getViewedProducts } from "../../store/viewed-products-process/selector";
import { Product } from "../../types/product";
import CatalogList from "./catalog-list/catalog-list";

type Props = {
  catalogType?: string;
  currentProduct?: Product,
}

function CatalogListLayout({ catalogType, currentProduct }: Props): JSX.Element {

  const viewedProducts = useAppSelector(getViewedProducts);

  if (catalogType === SideCatalogType.History && !viewedProducts.length) {
    return <></>
  }

  if (catalogType || (catalogType === SideCatalogType.History && viewedProducts.length)) {
    return (
      <section className="catalog-history">
        <div className="catalog-history__wrapper">
          <h2>{catalogType}</h2>
          <CatalogList catalogType={catalogType} currentProduct={currentProduct} />
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
