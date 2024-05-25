import { Typography, ListItem } from '@mui/material';

function OrderListItem(): JSX.Element {
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
        Продукт, объем
      </Typography>
      <Typography
        component={'p'}
        variant='body1'
        className='catalog__title'
        sx={{ fontWeight: 500 }}>
        Количество шт.
      </Typography>
    </ListItem>
  );
}

export default OrderListItem;
