import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getAllProducts, getAllProductsLoadingStatus } from '../../store/product-process/selector';
import Pagination from '../pagination/pagination';
import ProductCardSmall from '../product-card-small/product-card-small';
import Spinner from '../spinner/spinner';
import { CATALOG_PER_PAGE_COUNT } from '../../const';

type Props = {
  catalogType?: string;
}

function CatalogList({ catalogType }: Props): JSX.Element {
  const products = useAppSelector(getAllProducts);
  const isProductsLoading = useAppSelector(getAllProductsLoadingStatus);

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (products) { setPageCount(Math.ceil(products.length / CATALOG_PER_PAGE_COUNT)); }
  }, [])

  return (
    <>
      <ul className={`catalog${catalogType ? '-history' : ''}__list`}>
        {
          products &&
          products.map((product, index) => (
            <ProductCardSmall product={product} className={`catalog${catalogType ? '-history' : ''}__item`} key={`${index}${product.name}${product.id}`} />
          ))}
        {
          isProductsLoading && <Spinner />
        }
      </ul>
      <Pagination />
    </>
  );
}

export default CatalogList;
