import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductPage from '../../pages/product-page/product-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
import CartPage from '../../pages/cart-page/cart-page';
import PrivateRoute from '../private-route/private-route';
import UserPage from '../../pages/user-page/user-page';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    info: {
      main: '#f4f1ed',
    }
  },
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

function App(): JSX.Element {

  return (
    <ThemeProvider theme={theme} >
      <HelmetProvider>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route
              path={AppRoute.Catalog}
              element={<CatalogPage />}
            />
            <Route path={AppRoute.Product} element={<ProductPage />} />
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path={AppRoute.Register} element={<RegisterPage />} />
            <Route path={AppRoute.Cart} element={<CartPage />} />
            <Route
            path={AppRoute.User}
            element={
              <PrivateRoute >
                <UserPage />
              </PrivateRoute>
            }
          />
            <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
