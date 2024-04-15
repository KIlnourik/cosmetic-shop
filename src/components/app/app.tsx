import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductPage from '../../pages/product-page/product-page';
import { products } from '../../mocks/products';
import { CatalogFilters } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
import CartPage from '../../pages/cart-page/cart-page';

function App(): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route
              path={AppRoute.Catalog}
              element={
                <CatalogPage
                  products={products}
                  filters={CatalogFilters}
                />} />
            <Route path={AppRoute.Product} element={<ProductPage products={products} />} />
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path={AppRoute.Register} element={<RegisterPage />} />
            <Route path={AppRoute.Cart} element={<CartPage />} />
            <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
