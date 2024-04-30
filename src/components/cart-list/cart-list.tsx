import CartItem from '../cart-item/cart-item';
import { useAppSelector } from '../../hooks';
import { getCartProducts } from '../../store/cart-process/selector';
import { Divider, List } from '@mui/material';

function CartList(): JSX.Element {
  const cartProducts = useAppSelector(getCartProducts);

  return (
    <List
      component={'ul'}
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: 1200,
        mt: 5,
        flexGrow: 1,
         display: 'block'
      }}
    >
      <Divider />
      {
        cartProducts.map((cartProduct, index) => (
          <CartItem cartProduct={cartProduct} key={`${index}${cartProduct.product.id}`} />
        ))
      }
    </List>
  );
}

export default CartList;
