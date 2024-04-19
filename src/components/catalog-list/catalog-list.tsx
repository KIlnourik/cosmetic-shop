import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getAllProducts, getAllProductsLoadingStatus } from '../../store/product-process/selector';
import Pagination from '../pagination/pagination';
import ProductCardSmall from '../product-card-small/product-card-small';
import Spinner from '../spinner/spinner';
import { CATALOG_PER_PAGE_COUNT, SIDE_CATALOG_PER_PAGE_COUNT } from '../../const';
import { Product } from '../../types/product';

type Props = {
  catalogType?: string;
}

function CatalogList({ catalogType }: Props): JSX.Element {
  const products = useAppSelector(getAllProducts);
  const isProductsLoading = useAppSelector(getAllProductsLoadingStatus);

  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(
    (!catalogType ? CATALOG_PER_PAGE_COUNT : SIDE_CATALOG_PER_PAGE_COUNT)
  );

  useEffect(() => {
    (!catalogType)
      ? setItemsPerPage(CATALOG_PER_PAGE_COUNT)
      : setItemsPerPage(SIDE_CATALOG_PER_PAGE_COUNT);

    if (products) {
      setPageCount(Math.ceil(products.length / itemsPerPage));
      setCurrentProducts(products.slice(offset, offset + itemsPerPage));
    }

    console.log(currentProducts);
  }, [products, offset, itemsPerPage, catalogType])

  const handlePrevBtnClick = (currentPage: number): void => {
    setPage(currentPage - 1);
    setOffset((currentPage - 1) * itemsPerPage);
  };

  const handleNextBtnClick = (currentPage: number): void => {
    setPage(currentPage + 1);
    setOffset(currentPage * itemsPerPage);
  }

  return (
    <>
      <ul className={`catalog${catalogType ? '-history' : ''}__list`}>
        {
          currentProducts &&
          currentProducts.map((product, index) => (
            <ProductCardSmall product={product} className={`catalog${catalogType ? '-history' : ''}__item`} key={`${index}${product.name}${product.id}`} />
          ))}
        {
          isProductsLoading && <Spinner />
        }
      </ul>
      <Pagination
        page={page}
        pageCount={pageCount}
        handleNextBtnClick={handleNextBtnClick}
        handlePrevBtnClick={handlePrevBtnClick}
      />
    </>
  );
}

export default CatalogList;
