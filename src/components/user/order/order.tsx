import { Divider, Grid, List, ListItem, Typography } from '@mui/material';
import OrderList from '../order-list/order-list';

function Order(): JSX.Element {
  return (
    <>
      <ListItem >
        <Grid container sx={{
          alignContent: 'center'
        }} >
          <Grid item xs={12} sm={4} sx={{ textAlign: 'start', alignContent: 'start', mt: 2 }}>
            <Typography
              component={'h3'}
              variant='h5'
              className='catalog__title'
              sx={{ fontWeight: 400 }}>
              Заказ №1
            </Typography>
            <Typography
              component={'p'}
              variant='body1'
              className='catalog__title'
              sx={{ fontWeight: 400 }}>
              от 25.05.2024
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <OrderList />
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  );
}

export default Order;
