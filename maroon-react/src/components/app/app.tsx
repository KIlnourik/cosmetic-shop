import './app.scss';
import './fonts.scss';
import './variables.scss';
import './global.scss';
import { AppRoute } from '../../const';
import { Route, Routes } from 'react-router-dom';
import MainScreen from '../pages/mainScreen/mainScreen';
import CatalogScreen from '../pages/catalogScreen/catalogScreen';
import ProductScreen from '../pages/productScreen/productScreen';
import Layout from '../layout/layout/layout';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Layout />} >
        <Route index element={<MainScreen />} />
        <Route path={AppRoute.Catalog} element={<CatalogScreen />} />
        <Route path={AppRoute.Product} element={<ProductScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
