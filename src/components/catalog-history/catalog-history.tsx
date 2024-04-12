import { Product } from "../../types/product";
import Pagination from "../pagination/pagination";
import ProductCardSmall from "../product-card-small/product-card-small";

type Props = {
  products: Product[];
  type: string;
}

function CatalogHistory({ products, type }: Props): JSX.Element {
  return (
    <section className="catalog-history">
      <div className="catalog-history__wrapper">
        <h2>{type}</h2>
        <ul className="catalog-history__list">
          {products.map((product, index) => (
            <ProductCardSmall
              className={'catalog-history__item'}
              product={product}
              key={`${index}${product.name}${product.id}`
              } />
          ))}
        </ul>
        <Pagination />
      </div>
    </section>
  )
}

export default CatalogHistory;
