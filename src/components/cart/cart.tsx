import { Box, Container, Link, Typography } from '@mui/material';
import CartList from './cart-list/cart-list';
import CartSummary from './cart-summary/cart-summary';
import { useAppSelector } from '../../hooks';
import { getCartProducts } from '../../store/cart-process/selector';
import { AppRoute } from '../../const';

function Cart(): JSX.Element {

  const cartProducts = useAppSelector(getCartProducts);

  return (
    <Container sx={{
      mt: 5,
    }}>
      <Typography
        component={'h1'}
        variant="h4"
        className='catalog__title'
        sx={{ fontWeight: 500 }}>
        Корзина
      </Typography>
      {cartProducts.length
        ? <CartList />
        : <Box sx={{
          textAlign: 'center'
        }}>
          <Typography
            component={'h1'}
            variant="h4"
            className='catalog__title'
            sx={{ fontWeight: 500, mt: 10 }}>
            В корзине еще нет товаров
          </Typography>
          <Link href={AppRoute.Catalog}
            sx={{
              textDecoration: 'none',
              color: 'inherit',
            }}>
            <Typography
              component={'h1'}
              variant="h4"
              className='catalog__title'
              sx={{ fontWeight: 500 }}>
              Вернуться в каталог?
            </Typography>
          </Link>
        </Box>
      }

      <CartSummary />
    </Container>
  );
}

export default Cart;
