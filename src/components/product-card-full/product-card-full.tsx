import { ChangeEvent, MouseEvent, SyntheticEvent, useState } from 'react';
import { Price, Product } from '../../types/product';
import { getProductTitle } from '../../utils/utils';
import ProductImage from '../product-image/product-image';

type Props = {
  product: Product
};

function ProductCardFull({ product }: Props): JSX.Element {
  const [price, setPrice] = useState<string | undefined>(undefined);

  const handleVolumeChange = (evt: ChangeEvent, items: Price[]): void => {
    const chosenVolume = items.find((item) => item.value === evt.target.ariaValueNow);
    setPrice(chosenVolume?.price.toString());
  };

  return (
    <section className="card">
      <div className="card__wrapper">
        <div className="card__image-wrapper">
          <ProductImage path={product.image} productName={product.name} productType={product.type} className={'card'} />
        </div>
        <div className="card__content">
          <h1 className="card__content-title">{getProductTitle(product.name)}<small>{product.type}</small></h1>
          <div className="card__text">
            <p>{product.description}</p>
          </div>
          <ul className="card__info">
            <li className="card__accordion accordion">
              <div className="card__accordion-head">
                <h2 className="card__accordion-title">Состав</h2>
                <button className="card__accordion-toggler accordion__toggler" type="button" aria-label="Открыть"><span className="accordion__toggler-icon"></span></button>
              </div>
              <div className="card__accordion-content accordion__content">
                <p className="card__accordion-text accordion__inner">{product.compound}</p>
              </div>
            </li>
            <li className="card__accordion accordion">
              <div className="card__accordion-head">
                <h2 className="card__accordion-title">Способ применения</h2>
                <button className="card__accordion-toggler accordion__toggler" type="button" aria-label="Открыть">
                  <span className="accordion__toggler-icon"></span>
                </button>
              </div>
              <div className="card__accordion-content accordion__content">
                <div className="card__accordion-text accordion__inner">{product.howToUse}</div>
              </div>
            </li>
          </ul>
          <form className="card__options" action="https://echo.htmlacademy.ru" method="POST">
            <div className="card__option">
              <p className="card__option-title">Объем:</p>
              <ul className="card__option-list">
                {
                  product.prices.map((item, index) => (
                    <li className="card__option-item" key={index}>
                      <input className="card__input-radio visually-hidden" id={item.value} type="radio" name="volume" value={item.value} onChange={(evt) => handleVolumeChange(evt, product.prices)}
                        defaultChecked />
                      <label className="card__radio" htmlFor={item.value}>{item.value}</label>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="card__price"><span>{price} ₽</span>
              <button className="card__button" id="card-submit" type="submit">Добавить в корзину</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProductCardFull;
