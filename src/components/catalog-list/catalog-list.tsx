import { useAppSelector } from '../../hooks';
import { getAllProducts, getAllProductsLoadingStatus } from '../../store/product-process/selector';
import Pagination from '../pagination/pagination';
import ProductCardSmall from '../product-card-small/product-card-small';
import Spinner from '../spinner/spinner';

function CatalogList(): JSX.Element {

  const products = useAppSelector(getAllProducts);
  const isProductsLoading = useAppSelector(getAllProductsLoadingStatus);

  return (
    <div className="catalog__wrapper wrapper">
      <ul className="catalog__list">
        {
          products &&
          products.map((product, index) => (
            <ProductCardSmall product={product} className={'catalog__item'} key={`${index}${product.name}${product.id}`} />
          ))}
        {
          isProductsLoading && <Spinner />
        }
      </ul>
      <Pagination />
    </div>
  );
}

export default CatalogList;
