import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import ProductImage from '../product-image/product-image';
import { AppRoute } from '../../const';

type Props = {
  product: Product;
  className: string;
};

function ProductCardSmall({ product, className }: Props): JSX.Element {
  return (

    <li className={`${className} product`}>
      <Link className="product__link" to={`${AppRoute.Catalog}/${product.id}`}>
        <ProductImage path={product.previewImage} productName={product.name} productType={product.type} className={'product'} />
        <div className="product__wrapper">
          <div className="product__text">
            <h3 className="product__title">{product.name}</h3>
            <span className="product__price">{product.price} ₽</span>
          </div>
          <div className="product__text">
            <div className="product__description">{product.type}</div>
            <div className="product__description">{product.volume}</div>
          </div>
        </div>
      </Link>
    </li>


  );
}

export default ProductCardSmall;
