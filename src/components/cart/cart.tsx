import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';
import { useRef } from 'react';

import './cart.css';


function Cart(): JSX.Element {
  const productCountRef = useRef(null);
  const couponRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>Корзина</title>
      </Helmet>
      <main className="main main_no-top-spaced">
        <section className="main__block cart">
          <h1 className="catalog-head__title">Корзина</h1>
          <ul className="cart__list">
            <li className="cart__item cart-item">
              <div className="cart-item__description">
                <p className="cart-item__title">HUY</p>
              </div>
              <p className="cart-item__price">
                <span className="visually-hidden">Цена:</span>
                ALotMTHFKR ₽
              </p>
              <div className="quantity">
                <button className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара" >
                  <svg width="7" height="12" aria-hidden="true">
                    <use xlinkHref="#icon-arrow"></use>
                  </svg>
                </button>
                {/* TODO номер указателя сделать динамическим */}
                <label className="visually-hidden" htmlFor="counter1"></label>
                <input type="number" id="counter1"
                  ref={productCountRef} min="1" max="99"
                  aria-label="количество товара"
                />
                <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара">
                </button>
              </div>
              <div className="cart-item__total-price">
                <span className="visually-hidden">Общая цена:</span>
                ALotMTHFKR ₽
              </div>
              <button className="cross-btn" type="button" aria-label="Удалить товар">
                <svg width="10" height="10" aria-hidden="true">
                  <use xlinkHref="#rubbish"></use>
                </svg>
              </button>
            </li>
            <li className="cart__item cart-item">
              <div className="cart-item__description">
                <p className="cart-item__title">HUY</p>
              </div>
              <p className="cart-item__price">
                <span className="visually-hidden">Цена:</span>
                ALotMTHFKR ₽
              </p>
              <div className="quantity">
                <button className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара" >
                  <svg width="7" height="12" aria-hidden="true">
                    <use xlinkHref="#icon-arrow"></use>
                  </svg>
                </button>
                {/* TODO номер указателя сделать динамическим */}
                <label className="visually-hidden" htmlFor="counter1"></label>
                <input type="number" id="counter1"
                  ref={productCountRef} min="1" max="99"
                  aria-label="количество товара"
                />
                <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара">
                  <svg width="7" height="12" aria-hidden="true">
                    <use xlinkHref="#icon-arrow"></use>
                  </svg>
                </button>
              </div>
              <div className="cart-item__total-price">
                <span className="visually-hidden">Общая цена:</span>
                ALotMTHFKR ₽
              </div>
              <button className="cross-btn" type="button" aria-label="Удалить товар">
                <svg width="10" height="10" aria-hidden="true">
                  <use xlinkHref="#icon-close"></use>
                </svg>
              </button>
            </li>
          </ul>
          <div className="cart__summary">
            <div className="cart__promo">
              <p className="cart__title">Если у вас есть промокод на скидку, примените его в этом поле</p>
              <div className="cart-form">
                <form action="#" >
                  <div className={`custom-input`}>
                    <label>
                      <span className="custom-input__label">Промокод</span>
                      <input type="text" name="promo" ref={couponRef} placeholder="Введите промокод" />
                    </label>
                    <p className="custom-input__error">Промокод неверный</p>
                    <p className="custom-input__success">Промокод принят!</p>
                  </div>
                  <button className="btn" type="submit">Применить
                  </button>
                </form>
              </div>
            </div>
            <div className="cart__summary-order">
              <p className="cart__summary-item">
                <span className="cart__summary-text">Всего:</span>
                <span className="cart__summary-value">ALotMTHFKR ₽</span>
              </p>
              <p className="cart__summary-item">
                <span className="cart__summary-text">Скидка:</span>
                <span className={`cart__summary-value 'cart__summary-value_bonus' `}>ALotMTHFKR ₽</span>
              </p>
              <p className="cart__summary-item">
                <span className="cart__summary-text cart__summary-text--total">К оплате:</span>
                <span className="cart__summary-value cart__summary-value_total">ALotMTHFKR ₽</span>
              </p>
              <button className="btn" type="submit">Оформить заказ
              </button>
            </div>
          </div>
        </section>
      </main >
    </>

  );
}

export default Cart;
