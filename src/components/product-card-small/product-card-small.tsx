import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import ProductImage from '../product-image/product-image';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { addToViewedProducts } from '../../store/viewed-products-process/viewed-products-process';

type Props = {
  product: Product;
  className: string;
};

function ProductCardSmall({ product, className }: Props): JSX.Element {

  const dispatch = useAppDispatch();

  const handleProductClick = (product: Product): void => {
    dispatch(addToViewedProducts(product));
  };

  return (
    <li className={`${className} product`} onClick={() => handleProductClick(product)}>
      <Link
        className="product__link"
        to={`${AppRoute.Catalog}/${product.id}`}
        onClick={() => handleProductClick(product)}
      >
        <ProductImage
          path={product.previewImage}
          productName={product.name}
          productType={product.categorieRus}
          className={'product'} />
        <div className="product__wrapper">
          <div className="product__text">
            <h3 className="product__title">{product.name}</h3>
            <span className="product__price">{product.price} ₽</span>
          </div>
          <div className="product__text">
            <div className="product__description">{product.categorieRus}</div>
            <div className="product__description">{product.volume}</div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductCardSmall;
