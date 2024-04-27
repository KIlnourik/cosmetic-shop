import { Container, ThemeProvider, Typography, createTheme } from '@mui/material';

import CartList from '../cart-list/cart-list';
import CartSummary from '../cart-summary/cart-summary';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          alignContent: 'start',
        },
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          alignContent: 'center'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Raleway", "Arial", sans-serif',
        },
        paragraph: {
          fontFamily: '"Mplus", "Arial", sans-serif',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Mplus", "Arial", sans-serif',
          color: '#122947',
          border: '1px solid #b3bac1',
          maxWidth: '100%',
          padding: '5px 20px',

          ":hover": {
            border: '1px solid #122947',
            backgroundColor: 'none'
          },

          ":focus": {
            border: '1px solid #122947',
            backgroundColor: 'none'
          },

          ":active": {
            "main": {
              alignContent: 'start'
            }
          }
        }
      }
    }
  }
});

function Cart(): JSX.Element {

  return (
    <>

      <ThemeProvider theme={theme}>
        <Container sx={{
          mt: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignContent: 'space-between',
          alignItems: 'space-between',
          boxSizing: 'border-box',
          flexWrap: 'wrap'
        }}>
          <Typography
            component={'h1'}
            variant="h4"
            className='catalog__title'
            sx={{ fontWeight: 500 }}>
            Корзина
          </Typography>
          <CartList />
          <CartSummary />
        </Container>
      </ThemeProvider >
    </>

  );
}

export default Cart;
