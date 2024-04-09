import { Link } from 'react-router-dom';
import { Product } from '../../types/product';

type Props = {
  product: Product;
  className: string;
};

function ProductCardSmall({ product, className }: Props): JSX.Element {
  return (
    <>
      {product.prices.map((item, index) => (
        <li className={`${className} product`} key={`${index}${item.price}${item.value}`}>
          <Link className="product__link" to={`/product/${product.id}`}>
            <picture>
              <source type="image/webp" media="(min-width: 1200px)"
                srcSet={`${product.previewImage}@1x.webp 1x, ${product.previewImage}@2x.webp 2x"`} />
              <source type="image/jpeg" media="(min-width: 1200px)"
                srcSet={`"img/catalog/high@1x.jpg 1x, img/catalog/high@2x.jpg 2x"`} />
              <source type="image/webp" media="(min-width: 768px)"
                srcSet={`${product.previewImage}-lap@1x.webp 1x, ${product.previewImage}-lap@2x.webp 2x"`} />
              <source type="image/jpeg" media="(min-width: 768px)"
                srcSet={`${product.previewImage}-lap@1x.jpg 1x, ${product.previewImage}-lap@2x.jpg 2x"`} />
              <source type="image/webp"
                srcSet={`${product.previewImage}-mob@1x.webp 1x, ${product.previewImage}-mob@2x.webp 2x"`} />
              <source type="image/jpeg"
                srcSet={`${product.previewImage}-mob@1x.jpg 1x, ${product.previewImage}-mob@2x.jpg 2x"`} />
              <img
                className="product__image" src={`${product.previewImage}@1x.jpg"`} width="270" height="350" alt={`${product.name} - ${product.type}`} />
            </picture>
            <div className="product__wrapper">
              <div className="product__text">
                <h3 className="product__title">{product.name}</h3>
                <span className="product__price">{item.price} ₽</span>
              </div>
              <div className="product__text">
                <div className="product__description">{product.type}</div>
                <div className="product__description">{item.value}</div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </>

  );
}

export default ProductCardSmall;
