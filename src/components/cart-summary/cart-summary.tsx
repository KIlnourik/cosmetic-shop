import { Box, Button, Divider, Grid, Link, TextField, Typography } from '@mui/material';
import { Product } from '../../types/product';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCartProducts } from '../../store/cart-process/selector';
import { getCoupons } from '../../store/coupon-process/selector';
import { Coupon } from '../../types/state';

const getSummaryValue = (products: Product[]) => products.reduce((accum, product) =>
  accum + product.price, 0);

const getValidCoupon = (coupon: string, coupons: Coupon[]) => {
  const [validCoupon] = coupons.filter(item => item.coupon === coupon);
  return validCoupon;
}

function CartSummary(): JSX.Element {
  const cartProducts = useAppSelector(getCartProducts);
  const coupons = useAppSelector(getCoupons);
  const [discount, setDiscount] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);
  const [validCoupon, setValidCoupon] = useState<Coupon | null>(null);
  const couponRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOrderPrice(getSummaryValue(cartProducts));

    if (validCoupon && validCoupon?.discountValue) {
      setDiscount(validCoupon.discountValue * orderPrice)
    } else {
      setDiscount(0);
    }
  }, [cartProducts, orderPrice, validCoupon, validCoupon?.discountValue])

  const handleCoupon = () => {
    if (couponRef.current?.value) {
      setValidCoupon(getValidCoupon(couponRef.current.value, coupons));
    } else {
      setValidCoupon(null);
    }
  };

  const handleOrder = () => {

  };

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
            inputRef={couponRef}
            error={!validCoupon}
            sx={{
              minWidth: '100%',
              backgroundColor: '#fff',
              mt: 3,
              fontFamily: 'Mplus',
              textAlign: 'center',
            }} />
          <Button sx={{
            mt: 3
          }}
            onClick={handleCoupon}>
            Применить
          </Button>
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
              {discount} &#x20bd;
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
              {orderPrice - discount} &#x20bd;
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
