
import { useAppSelector } from '../../../../hooks';
import { CartProduct } from '../../../../types/state';
import { getCartProducts } from '../../../../store/cart-process/selector';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const';

const getCartProductsTotalCount = (cartProducts: CartProduct[]): number => {
  const totalCount = cartProducts.reduce((acc, product) => acc + product.count, 0);
  return totalCount;
};

function CartButton(): JSX.Element {
  const cartProducts = useAppSelector(getCartProducts);

  return (
    <Badge
      color='info'
      badgeContent={getCartProductsTotalCount(cartProducts)}
    >
      <Link className="user-actions__link user-actions__cart" to={AppRoute.Cart} aria-label="Корзина">
        <svg height="21" width="18">
          <use xlinkHref="#cart-icon"></use>
        </svg>
      </Link>
    </Badge>
  );
}

export default CartButton;
