import { memo, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAllProducts, getProducts, getProductsLoadingStatus } from '../../../store/product-process/selector';
import Pagination from '../../pagination/pagination';
import ProductCardSmall from '../../product-card-small/product-card-small';
import Spinner from '../../spinner/spinner';
import { CATALOG_PER_PAGE_COUNT, SIDE_CATALOG_PER_PAGE_COUNT, SideCatalogType } from '../../../const';
import { Product } from '../../../types/product';
import { getViewedProducts } from '../../../store/viewed-products-process/selector';

type Props = {
  catalogType?: string;
  currentProduct?: Product;
}

const CatalogList = memo(function CatalogList({ catalogType, currentProduct }: Props): JSX.Element {
  const products = useAppSelector(getAllProducts);
  const filteredProducts = useAppSelector(getProducts);
  const isProductsLoading = useAppSelector(getProductsLoadingStatus);
  const dispatch = useAppDispatch();

  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(
    (!catalogType ? CATALOG_PER_PAGE_COUNT : SIDE_CATALOG_PER_PAGE_COUNT)
  );
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  const getSimilarProducts = useCallback((currentProduct: Product, products: Product[]) => products.filter(
    (item) => currentProduct.categorie === item.categorie), []);

  const viewedProducts = useAppSelector(getViewedProducts);

  useEffect(() => {
    (!catalogType)
      ? setItemsPerPage(CATALOG_PER_PAGE_COUNT)
      : setItemsPerPage(SIDE_CATALOG_PER_PAGE_COUNT);

    if (currentProduct) {
      setSimilarProducts(getSimilarProducts(currentProduct, products));
    }



    if (products.length && !filteredProducts.length) {
      (!currentProduct)
        ? (setPageCount(Math.ceil(products.length / itemsPerPage)),
          setCurrentProducts(products.slice(offset, offset + itemsPerPage)))
        : (setPageCount(Math.ceil(similarProducts.length / itemsPerPage)),
          setCurrentProducts(similarProducts.slice(offset, offset + itemsPerPage)));
    }
    if (filteredProducts.length) {
      (!currentProduct)
        ? (setPageCount(Math.ceil(filteredProducts.length / itemsPerPage)),
          setCurrentProducts(filteredProducts.slice(offset, offset + itemsPerPage)))
        : (setPageCount(Math.ceil(similarProducts.length / itemsPerPage)),
          setCurrentProducts(similarProducts.slice(offset, offset + itemsPerPage)));
    }

    (catalogType === SideCatalogType.History && viewedProducts.length)
      && (setPageCount(Math.ceil(viewedProducts.length / itemsPerPage)),
        setCurrentProducts(viewedProducts.slice(offset, offset + itemsPerPage)))

  }, [dispatch, products.length, offset, itemsPerPage, currentProduct, similarProducts.length, filteredProducts.length])

  const handlePrevBtnClick = (currentPage: number): void => {
    if (currentPage >= 1 && currentPage <= pageCount) {
      setPage(currentPage - 1);
      setOffset((currentPage - 2) * itemsPerPage);
    }
  };

  const handleNextBtnClick = (currentPage: number): void => {
    if (currentPage >= 1 && currentPage < pageCount) {
      setPage(currentPage + 1);
      setOffset(currentPage * itemsPerPage);
    }
  }

  return (
    <>
      <ul className={`catalog${catalogType ? '-history' : ''}__list`}>
        {
          (currentProducts && !isProductsLoading) &&
          currentProducts.map((product, index) => (
            <ProductCardSmall product={product} className={`catalog${catalogType ? '-history' : ''}__item`} key={`${index}${product.name}${product.id}`} />
          ))
        }
        {(!currentProducts.length && isProductsLoading) && <Spinner />}
      </ul>
      <Pagination
        page={page}
        pageCount={pageCount}
        handleNextBtnClick={handleNextBtnClick}
        handlePrevBtnClick={handlePrevBtnClick}
      />
    </>
  );
})

export default CatalogList;
