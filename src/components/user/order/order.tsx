import { Divider, Grid, ListItem, Typography } from '@mui/material';
import OrderList from '../order-list/order-list';
import { Order as OrderType } from '../../../types/order-post';

type Props = {
  order: OrderType;
}

function Order({ order }: Props): JSX.Element {

  return (
    <>
      <ListItem sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Grid container sx={{
          alignContent: 'center'
        }} >
          <Grid item xs={12} sm={4} sx={{ textAlign: 'start', alignContent: 'start', mt: 2 }}>
            <Typography
              component={'h3'}
              variant='h5'
              className='catalog__title'
              sx={{ fontWeight: 400 }}>
              Заказ
            </Typography>
            <Typography
              component={'p'}
              variant='body1'
              className='catalog__title'
              sx={{ fontWeight: 400 }}>
              от {order.date}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <OrderList products={order.products} />
          </Grid>
        </Grid>
        <Divider />
        <Typography
          component={'h3'}
          variant='h5'
          className='catalog__title'
          sx={{
            fontWeight: 400,
            mb: 2,
            alignSelf: 'end'
          }}>
          Итоговая сумма заказа: {order.totalPrice} &#x20bd;
        </Typography>
      </ListItem>
      <Divider />
    </>
  );
}

export default Order;
