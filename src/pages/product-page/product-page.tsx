import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ProductCardFull from '../../components/product-card-full/product-card-full';
import NotFoundPage from '../not-found-page/not-found-page';
import { getProductTitle } from '../../utils/utils';
import { SideCatalogType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchAllProductsAction, fetchProductAction } from '../../store/api-actions';
import { getAllProducts, getAllProductsLoadingStatus, getProduct, getProductLoadingStatus } from '../../store/product-process/selector';
import Spinner from '../../components/spinner/spinner';
import CatalogListLayout from '../../components/catalog-list-layout/catalog-list-layout';


function ProductPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(getProduct);
  const isProductLoading = useAppSelector(getProductLoadingStatus);

  const products = useAppSelector(getAllProducts);
  const isAllProductsLoading = useAppSelector(getAllProductsLoadingStatus);

  useEffect(() => {
    id && dispatch(fetchProductAction(id.toString()));

    dispatch(fetchAllProductsAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  if (!id && !isProductLoading || !product && !isProductLoading) {
    return <NotFoundPage />
  }

  return (
    <>
      <>
        {isProductLoading && <Spinner />}
      </>
      <>
        {product &&
          <>
            <Helmet>
              <title>{getProductTitle(product.type, product.name)}</title>
            </Helmet>
            <main className="main main_top-spaced">
              <ProductCardFull product={product} />
              {isAllProductsLoading && <Spinner />}
              {products &&
                <CatalogListLayout catalogType={SideCatalogType.Similar} />
              }
            </main>
          </>
        }
      </>
    </>

  );
}

export default ProductPage;
