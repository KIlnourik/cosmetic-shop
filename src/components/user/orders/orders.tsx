import { Box, Divider,List,  Typography } from '@mui/material';
import Order from '../order/order';

function Orders(): JSX.Element {
  return (
    <>
      <Typography
        component={'h2'}
        variant='h4'
        className='catalog__title'
        sx={{ fontWeight: 500, mt: 4 }}>
        Заказы
      </Typography>
      <Box sx={{
        textAlign: 'center'
      }}>
        <List
          component={'ul'}
          sx={{
            width: '100%',
            height: '100%',
            maxWidth: 1200,
            mt: 2,
            flexGrow: 1,
            display: 'block'
          }}
        >
          <Divider />
          <Order />
        </List>
      </Box>
    </>
  );
}

export default Orders;
