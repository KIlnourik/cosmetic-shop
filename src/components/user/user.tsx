import { Container, Divider, Typography } from '@mui/material';
import Orders from './orders/orders';
import { useAppSelector } from '../../hooks';
import { getUserData } from '../../store/user-process/selector';

function User(): JSX.Element {
  const userData = useAppSelector(getUserData);

  return (
    <Container sx={{
      mt: 5,
    }}>
      <Typography
        component={'h1'}
        variant='h4'
        className='catalog__title'
        sx={{ fontWeight: 500 }}>
        {`${userData?.firstName} ${userData?.lastName}`}
      </Typography>
      <Divider />
      <Orders />
    </Container>
  );
}

export default User;
