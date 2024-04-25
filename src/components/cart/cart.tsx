import { Box, Button, Container, Divider, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';

import CartList from '../cart-list/cart-list';

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
        <Container sx={{ alignContent: "start", mt: 5 }}>
          <Typography component={'h1'} variant="h4" className='catalog__title' sx={{ fontWeight: 500 }}>
            Корзина
          </Typography>
          <CartList />
          <Grid container sx={{
            mt: 10,
            padding: 3,
          }}>
            <Grid item xs={12} sm={8} sx={{
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'row',
              padding: '0 2px',
              mt: 2
            }}>
              <Box sx={{
                alignContent: 'center',
                alignItems: 'space-between',
                justifyContent: 'space-between',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography component={'p'} variant='h6' sx={{
                }}>
                  Есть промокод? Используй!
                </Typography>
                <TextField
                  label='Промокод'
                  sx={{
                    minWidth: '100%',
                    backgroundColor: '#fff',
                    mt: 3,
                    fontFamily: 'Mplus',
                    textAlign: 'center',
                  }} />
                <Button sx={{
                  mt: 3
                }}>Применить</Button>
              </Box>
            </Grid>
            <Divider />
            <Grid item xs={12} sm={4} sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 2
            }}>
              <Box
                id='coupon'
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: '100%',
                }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minWidth: 'inherit'
                }}>
                  <Typography component='p' variant='h6' sx={{
                    textAlign: 'start'
                  }}>
                    Скидка:
                  </Typography>
                  <Typography component='p' variant='h6' sx={{
                    fontWeight: 600,
                    ml: '1.2rem'
                  }}>
                    Цена Р
                  </Typography>
                </Box>
                <Box id='total-price' sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'space-beetwen',
                  mt: 5,
                  minWidth: 'inherit'
                }}>
                  <Typography component='p' variant='h6' sx={{
                    textAlign: 'end'
                  }}>
                    Итого:
                  </Typography>
                  <Typography component='p' variant='h6' sx={{
                    fontWeight: 600,
                    ml: '1.2rem'
                  }}>
                    Цена Р
                  </Typography>
                </Box>
              </Box>
              <Link href="#" sx={{
                alignContent: 'center',
                mt: 5,
                minWidth: '100%'
              }}>
                <Button sx={{
                  minWidth: '100%'
                }}>Оформить заказ</Button>
              </Link>
            </Grid>
            <Divider />
          </Grid>
        </Container>
      </ThemeProvider >
    </>

  );
}

export default Cart;
