import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import { Product } from '../../types/product';
import CatalogHistory from '../../components/catalog-history/catalog-history';
import ProductCardFull from '../../components/product-card-full/product-card-full';
import NotFoundPage from '../not-found-page/not-found-page';
import { getProductTitle } from '../../utils/utils';
import { useEffect, useState } from 'react';

type Props = {
  products: Product[];
};

function ProductPage({ products }: Props): JSX.Element {

  const { id } = useParams();
  const { search } = useLocation();
  const [volume, setVolume] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (search) {
      setVolume(search.split('=')[1]);
    }
  }, [search])

  const chosenProduct = products.find((product) => Number(id) === product.id);

  if (!chosenProduct) {
    return <NotFoundPage />
  }

  return (
    <>
      <Helmet>
        <title>{getProductTitle(chosenProduct.type, chosenProduct.name)}</title>
      </Helmet>
      <main className="main main_top-spaced">
        <ProductCardFull product={chosenProduct} volume={volume}/>
        <CatalogHistory products={products} />
      </main>
    </>
  );
}

export default ProductPage;
