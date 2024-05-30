import { Box, Divider, List, Typography } from '@mui/material';
import Order from '../order/order';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useEffect } from 'react';
import { fetchOrdersAction } from '../../../store/api-actions';
import { getOrders } from '../../../store/order-process/selector';
import { getUserData } from '../../../store/user-process/selector';

function Orders(): JSX.Element {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(getOrders);
  const userData = useAppSelector(getUserData);

  useEffect(() => {
    userData && dispatch(fetchOrdersAction(userData.id));
  }, [dispatch, userData]);

  return (
    <>
      <Typography
        component={'h2'}
        variant='h4'
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
          {orders.length
            ?
            orders.map(order => (
              <Order order={order} key={`${order.id}${order.userId}`}/>
            ))
            :
            <Typography
              component={'h2'}
              variant='h4'
              sx={{ fontWeight: 500, mt: 4 }}>
              {`${userData?.firstName} ${userData?.lastName}`}, Вы пока что ничего не заказывали
            </Typography>
          }

        </List>
      </Box>
    </>
  );
}

export default Orders;
