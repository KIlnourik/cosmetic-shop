import { List } from '@mui/material';
import OrderListItem from '../order-list-item/order-list-item';

function OrderList(): JSX.Element {
  return (
    <List
      component={'ul'}
      sx={{
        width: '100%',
        height: '100%',
        flexGrow: 1,
        display: 'block'
      }}
    >
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
    </List>
  );
}

export default OrderList;
