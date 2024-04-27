import { Box, Button, Divider, Grid, Link, TextField, Typography } from '@mui/material';
import { Product } from '../../types/product';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCartProducts } from '../../store/cart-process/selector';

const getSummaryValue = (products: Product[]) => products.reduce((accum, product) =>
  accum + product.price, 0);

const getProductsIds = (products: Product[]) => {
  const items: number[] = [];
  products.forEach((product) => items.push(product.id));
  return Array.from(new Set(items));
};

function CartSummary(): JSX.Element {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(getCartProducts);
  const [orderPrice, setOrderPrice] = useState(0);

  useEffect(() => {
    setOrderPrice(getSummaryValue(cartProducts));
  }, [cartProducts])

  return (
    <Grid container sx={{
      mt: 10,
      padding: 3,
    }}>
      <Grid item xs={12} sm={8} sx={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        padding: '0 2px',
        mt: 2
      }}>
        <Box sx={{
          alignContent: 'center',
          alignItems: 'space-between',
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Typography component={'p'} variant='h6' sx={{
          }}>
            Есть промокод? Используй!
          </Typography>
          <TextField
            label='Промокод'
            sx={{
              minWidth: '100%',
              backgroundColor: '#fff',
              mt: 3,
              fontFamily: 'Mplus',
              textAlign: 'center',
            }} />
          <Button sx={{
            mt: 3
          }}>Применить</Button>
        </Box>
      </Grid>
      <Divider />
      <Grid item xs={12} sm={4} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2
      }}>
        <Box
          id='coupon'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '100%',
          }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            minWidth: 'inherit'
          }}>
            <Typography component='p' variant='h6' sx={{
              textAlign: 'start'
            }}>
              Скидка:
            </Typography>
            <Typography component='p' variant='h6' sx={{
              fontWeight: 600,
              ml: '1.2rem'
            }}>
              Цена Р
            </Typography>
          </Box>
          <Box id='total-price' sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-beetwen',
            mt: 5,
            minWidth: 'inherit'
          }}>
            <Typography component='p' variant='h6' sx={{
              textAlign: 'end'
            }}>
              Итого:
            </Typography>
            <Typography component='p' variant='h6' sx={{
              fontWeight: 600,
              ml: '1.2rem'
            }}>
              {orderPrice} &#x20bd;
            </Typography>
          </Box>
        </Box>
        <Link href="#" sx={{
          alignContent: 'center',
          mt: 5,
          minWidth: '100%'
        }}>
          <Button sx={{
            minWidth: '100%'
          }}>Оформить заказ</Button>
        </Link>
      </Grid>
      <Divider />
    </Grid>
  );
}

export default CartSummary;
