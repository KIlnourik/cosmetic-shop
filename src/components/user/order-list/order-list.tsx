import { List } from '@mui/material';
import OrderListItem from '../order-list-item/order-list-item';
import { OrderCartProduct } from '../../../types/order-post';

type Props = {
  products: OrderCartProduct[];
}

function OrderList({products}: Props): JSX.Element {
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
      {
        products.map(product => (
          <OrderListItem product={product} key={`${product.productId}${product.name}`}/>
        ))
      }
    </List>
  );
}

export default OrderList;
