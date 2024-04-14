import { Box, Button, Container, Divider, Grid, IconButton, Link, List, ListItem, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import { Add, DeleteOutline, Remove } from '@mui/icons-material';
import { Unstable_NumberInput as BaseNumberInput, NumberInputProps } from '@mui/base';
import { Helmet } from 'react-helmet-async';
import { ForwardedRef, forwardRef } from 'react';
import { styled } from '@mui/system';

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

const StyledInputRoot = styled('div')(
  () => `
  font-family: "Mplus", "Arial", sans-serif;
  font-weight: 500;
  color: #122947;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
  () => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.375;
  color: #122947;
  background: #fff;
  border: 1px solid #b3bac1;
  border-radius: 2px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover,
  &:focus {
    border: 1px solid #122947;
  }

  &:focus-visible {
    outline: 1;
  }
`,
);

const StyledButton = styled('button')(
  () => `
  font-family: "Mplus", "Arial", sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: none;
  background: 0 0;
  color: #122947;
  width: 40px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    border: 1px solid #122947;
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);

const NumberInput = forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <Add fontSize="small" />,
          className: 'increment',
        },
        decrementButton: {
          children: <Remove fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

function Cart(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Корзина</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Container sx={{ alignContent: "start", mt: 5 }}>
          <Typography component={'h1'} variant="h4" className='catalog__title' sx={{ fontWeight: 500 }}>
            Корзина
          </Typography>
          <List sx={{ width: '100%', maxWidth: 1200, mt: 5 }} component={'ul'} >
            <Divider />
            <ListItem sx={{ minHeight: 100, maxHeight: 240 }}>
              <Grid container spacing={6} sx={{
                alignContent: 'start'
              }} >
                <Grid item xs={12} sm={5} md={5}>
                  <Typography component='p' variant='h5'>
                    Название товара
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={4}>
                  <NumberInput
                    min={1}
                    max={99}
                    aria-label='Количество товара'
                  />
                </Grid>
                <Grid item xs={4} sm={2}>
                  <Typography component={'p'} variant='h5'>
                    Цена
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={1}>
                  <IconButton >
                    <DeleteOutline />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
            
          </List>
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
