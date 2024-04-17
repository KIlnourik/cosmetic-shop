import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import SideCatalog from '../../components/side-catalog/side-catalog';
import ProductCardFull from '../../components/product-card-full/product-card-full';
import NotFoundPage from '../not-found-page/not-found-page';
import { getProductTitle } from '../../utils/utils';
import { CatalogListType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchAllProductsAction, fetchProductAction } from '../../store/api-actions';
import { getAllProducts, getAllProductsLoadingStatus, getProduct, getProductLoadingStatus } from '../../store/product-process/selector';
import Spinner from '../../components/spinner/spinner';


function ProductPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(getProduct);
  const isProductLoading = useAppSelector(getProductLoadingStatus)

  const products = useAppSelector(getAllProducts);
  const isProductsLoading = useAppSelector(getAllProductsLoadingStatus);

  useEffect(() => {
    id && dispatch(fetchProductAction(id?.toString()));

    dispatch(fetchAllProductsAction);
  }, [dispatch, id]);

  if (!id && !isProductLoading) {return <NotFoundPage />}

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

              {products &&
                <SideCatalog products={products} type={CatalogListType.Similar} />
              }

              {isProductsLoading && <Spinner />}
            </main>
          </>
        }
      </>
    </>

  );
}

export default ProductPage;
