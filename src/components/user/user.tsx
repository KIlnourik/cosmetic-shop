import { Container, Divider, Typography } from '@mui/material';
import Orders from './orders/orders';

function User(): JSX.Element {
  return (
    <Container sx={{
      mt: 5,
    }}>
      <Typography
        component={'h1'}
        variant='h4'
        className='catalog__title'
        sx={{ fontWeight: 500 }}>
        Пользователь
      </Typography>
      <Divider />
      <Orders />
    </Container>
  );
}

export default User;
