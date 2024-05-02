import { Box, Button, Container, Link, ThemeProvider, Typography, createTheme } from '@mui/material';
import CartList from './cart-list/cart-list';
import CartSummary from './cart-summary/cart-summary';
import { useAppSelector } from '../../hooks';
import { getCartProducts } from '../../store/cart-process/selector';
import { AppRoute } from '../../const';

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
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Mplus", "Arial", sans-serif',
          color: '#122947',
          border: 'none',
          borderRadius: 0,
          padding: '5px 20px',
          background: '0 0',
          width: '40px',
          height: '40px',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          alignItems: 'center',

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
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: '"Mplus", "Arial", sans-serif',
          color: '#122947',
          border: 'none',
          borderRadius: 0,
          padding: '5px 20px',
          background: '0 0',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',

          ":hover": {
            opacity: '0.5',
            transition: '0.2s',
          },

          ":focus": {
            opacity: '0.5',
            transition: '0.2s',
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

  const cartProducts = useAppSelector(getCartProducts);

  return (
    <>

      <ThemeProvider theme={theme}>
        <Container sx={{
          mt: 5,
        }}>
          <Typography
            component={'h1'}
            variant="h4"
            className='catalog__title'
            sx={{ fontWeight: 500 }}>
            Корзина
          </Typography>
          {cartProducts.length
            ? <CartList />
            : <Box sx={{
              textAlign: 'center'
            }}>
              <Typography
                component={'h1'}
                variant="h4"
                className='catalog__title'
                sx={{ fontWeight: 500, mt: 10 }}>
                В корзине еще нет товаров
              </Typography>
              <Link href={AppRoute.Root}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}>
                <Typography
                  component={'h1'}
                  variant="h4"
                  className='catalog__title'
                  sx={{ fontWeight: 500 }}>
                  Вернуться в каталог?
                </Typography>
              </Link>
            </Box>
          }

          <CartSummary />
        </Container>
      </ThemeProvider >
    </>

  );
}

export default Cart;
