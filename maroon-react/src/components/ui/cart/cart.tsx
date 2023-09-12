
function Cart(): JSX.Element {
  return (
    <a href="#" className="cart">
      <span className="visually-hidden">Корзина</span>
      <svg className="cart__icon">
        <use xlinkHref="./img/sprite.svg#cart-icon"></use>
      </svg>
      <span className="cart__count">3</span>
    </a>
  );
}

export default Cart;
