import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getCartProducts } from '../../../store/cart-process/selector';
import { getCoupons } from '../../../store/coupon-process/selector';
import { CartProduct, Coupon } from '../../../types/state';
import { sendOrderAction } from '../../../store/api-actions';
import { OrderCartProducts } from '../../../types/order-post';
import { resetCart } from '../../../store/cart-process/cart-process';
import { resetCoupon } from '../../../store/coupon-process/coupon-process';

const getSummaryValue = (cartProducts: CartProduct[]) => cartProducts.reduce((accum, product) =>
  accum + (product.product.price * product.count), 0);

const getValidCoupon = (coupon: string, coupons: Coupon[]): Coupon | null => {
  const [validCoupon] = coupons.filter(item => item.coupon === coupon);
  if (validCoupon) return validCoupon;
  return null;
};

const getOrderProducts = (cartProducts: CartProduct[]): OrderCartProducts[] => {
  const result: OrderCartProducts[] = [];
  cartProducts.map((cartProduct) => (
    result.push({
      productId: cartProduct.product.id,
      count: cartProduct.count
    })
  ));
  return result;
}

function CartSummary(): JSX.Element {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(getCartProducts);
  const coupons = useAppSelector(getCoupons);
  const [discount, setDiscount] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);
  const [validCoupon, setValidCoupon] = useState<Coupon | undefined | null>(undefined);
  const [orderCartProducts, setOrderCartProducts] = useState<OrderCartProducts[]>([]);
  const couponRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOrderPrice(getSummaryValue(cartProducts));

    if (validCoupon && validCoupon?.discountValue) {
      setDiscount(validCoupon.discountValue * orderPrice)
    } else {
      setDiscount(0);
    }

    if (cartProducts) {
      setOrderCartProducts(getOrderProducts(cartProducts));
    }

  }, [cartProducts, orderPrice, validCoupon, validCoupon?.discountValue])

  const handleCoupon = () => {
    if (couponRef.current?.value) {
      setValidCoupon(getValidCoupon(couponRef.current.value, coupons));
    } else {
      setValidCoupon(undefined);
    }
  };

  const handleOrder = () => {
    dispatch(sendOrderAction({
      products: orderCartProducts,
      coupon: validCoupon?.coupon,
      totalPrice: orderPrice
    }));
    dispatch(resetCart);
    dispatch(resetCoupon);
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
            error={validCoupon === null}

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
        <Button
          onClick={handleOrder}
          sx={{
            alignContent: 'center',
            minWidth: '100%',
            mt: 5
          }}>
          Оформить заказ
        </Button>
      </Grid>
      <Divider />
    </Grid>
  );
}

export default CartSummary;
