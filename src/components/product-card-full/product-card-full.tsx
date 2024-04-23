import { ChangeEvent, useEffect, useState } from 'react';
import { Product } from '../../types/product';
import { getProductTitle } from '../../utils/utils';
import ProductImage from '../product-image/product-image';
import { AccordeonToggleClass } from '../../const';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchAllProductsAction } from '../../store/api-actions';
import { getAllProducts, getAllProductsLoadingStatus } from '../../store/product-process/selector';
import Spinner from '../spinner/spinner';
import { addToViewedProducts } from '../../store/viewed-products-process/viewed-products-process';
import { addToCart } from '../../store/cart-process/cart-process';
import { getCartProducts } from '../../store/cart-process/selector';
import { Badge, ThemeProvider, createTheme } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

type Props = {
  product: Product,
};

function ProductCardFull({ product }: Props): JSX.Element {
  const [isCompoundOpen, setCompoundOpen] = useState<boolean>(false);
  const [isHowToUseOpen, setHowToUseOpen] = useState<boolean>(false);
  const [isInCart, setInCart] = useState<boolean>(false);

  const handleCompounOpenBtnClick = (): void => {
    setCompoundOpen(!isCompoundOpen);
  };

  const handleHowToUseBtnClick = (): void => {
    setHowToUseOpen(!isHowToUseOpen);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getSimilarProds = (prods: Product[]): Product[] =>
    prods.filter(
      (item) => product.name === item.name
        && product.type === item.type
        && product.volume.split(' ')[1] === item.volume.split(' ')[1]);

  const allProducts = useAppSelector(getAllProducts);
  const isAllProductsLoading = useAppSelector(getAllProductsLoadingStatus);
  const similarProducts = getSimilarProds(allProducts);

  const handleVolumeChange = (evt: ChangeEvent): void => {
    const { value } = evt.target as HTMLInputElement;
    const checkedProd = similarProducts?.find(item => item.volume === value);
    navigate(`/products/${checkedProd?.id}`);
    dispatch(addToViewedProducts(product));
  };

  const productSortingByVolume = (prodA: Product, prodB: Product) => (
    Number(prodA.volume.split(' ')[0]) - Number(prodB.volume.split(' ')[0])
  );

  const handleCartBtnClick = (product: Product): void => {
    dispatch(addToCart(product));
  };

  const cartProducts = useAppSelector(getCartProducts);

  useEffect(() => {
    dispatch(fetchAllProductsAction());

    cartProducts.forEach((prod) => {
      (prod.id === product.id) && setInCart(true);
    })
  }, [dispatch, cartProducts]);

  const cardTheme = createTheme({
    palette: {
      info: {
        main: '#f4f1ed',
      }
    }
  })

  return (
    <ThemeProvider theme={cardTheme}>
      <section className="card">
        <div className="card__wrapper">
          <div className="card__image-wrapper">
            <ProductImage
              path={product.image}
              productName={product.name}
              productType={product.type}
              className={'card'}
            />
          </div>
          <div className="card__content">
            <h1 className="card__content-title">{getProductTitle(product.name)}<small>{product.type}</small></h1>
            <div className="card__text">
              <p>{product.description}</p>
            </div>
            <ul className="card__info">
              <li className={`card__accordion accordion accordion_inited ${isCompoundOpen ? AccordeonToggleClass.Open : AccordeonToggleClass.Close}`}>
                <div className="card__accordion-head">
                  <h2 className="card__accordion-title">Состав</h2>
                  <button className="card__accordion-toggler accordion__toggler" type="button" aria-label="Открыть" onClick={handleCompounOpenBtnClick}>
                    <span className="accordion__toggler-icon"></span>
                  </button>
                </div>
                <div className="card__accordion-content accordion__content">
                  <p className="card__accordion-text accordion__inner">{product.compound}</p>
                </div>
              </li>
              <li className={`card__accordion accordion accordion_inited ${isHowToUseOpen ? AccordeonToggleClass.Open : AccordeonToggleClass.Close}`} >
                <div className="card__accordion-head">
                  <h2 className="card__accordion-title">Способ применения</h2>
                  <button className="card__accordion-toggler accordion__toggler" type="button" aria-label="Открыть" onClick={handleHowToUseBtnClick}>
                    <span className="accordion__toggler-icon"></span>
                  </button>
                </div>
                <div className="card__accordion-content accordion__content">
                  <div className="card__accordion-text accordion__inner">{product.howToUse}</div>
                </div>
              </li>
            </ul>
            <form className="card__options" action="" method="">
              <div className="card__option">
                <p className="card__option-title">Объем:</p>
                <ul className="card__option-list">
                  {similarProducts &&
                    similarProducts.sort(productSortingByVolume).map((item, index) => (
                      <li className="card__option-item" key={index}>
                        <input className="card__input-radio visually-hidden" id={item.volume} type="radio" name="volume" value={item.volume} checked={product.volume === item.volume} onChange={handleVolumeChange}
                        />
                        <label className="card__radio" htmlFor={item.volume}>{item.volume}</label>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="card__price"><span>{product.price} ₽</span>
                {
                  isInCart
                    ?
                    <Badge >
                      < button className="card__button" id="card-submit" type="button" onClick={() => handleCartBtnClick(product)}>
                        В корзине
                        <ShoppingCart />
                      </button>
                    </Badge>
                    : <button className="card__button" id="card-submit" type="button" onClick={() => handleCartBtnClick(product)}>Добавить в корзину</button>
                }
              </div>
            </form>
          </div>
        </div >
      </section >
    </ThemeProvider>
  );
}

export default ProductCardFull;
