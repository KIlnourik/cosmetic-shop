import { Product } from '../../types/product';
import Pagination from '../pagination/pagination';
import ProductCardSmall from '../product-card-small/product-card-small';

type Props = {
  products: Product[];
}

function CatalogList({ products }: Props): JSX.Element {
  return (
    <div className="catalog__wrapper wrapper">
      <ul className="catalog__list">
        {products.map((product, index) => (
          <ProductCardSmall product={product} className={'catalog__item'} key={`${index}${product.name}${product.id}`} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}

export default CatalogList;
