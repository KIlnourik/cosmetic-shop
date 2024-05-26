import { Typography, ListItem } from '@mui/material';
import { OrderCartProduct } from '../../../types/order-post';
import { getProductTitle } from '../../../utils/utils';

type Props ={
  product: OrderCartProduct;
}


function OrderListItem({product}: Props): JSX.Element {
  return (
    <ListItem sx={{
      minHeight: 50,
      maxHeight: 240,
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Typography
        component={'p'}
        variant='body1'
        className='catalog__title'
        sx={{ fontWeight: 500 }}>
        {getProductTitle(product.categorieRus, product.name)}
      </Typography>
      <Typography
        component={'p'}
        variant='body1'
        className='catalog__title'
        sx={{ fontWeight: 500 }}>
        {product.volume}
      </Typography>
      <Typography
        component={'p'}
        variant='body1'
        className='catalog__title'
        sx={{ fontWeight: 500 }}>
        {product.count} шт.
      </Typography>
    </ListItem>
  );
}

export default OrderListItem;
