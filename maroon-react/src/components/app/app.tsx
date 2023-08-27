import "./App.scss";
import { AppRoute } from "../../const";
import { Route, Routes } from "react-router-dom";
import MainScreen from "../../pages/mainScreen/mainScreen";
import CatalogScreen from "../../pages/catalogScreen/catalogScreen";
import ProductScreen from "../../pages/productScreen/productScreen";
import Layout from "../layout/layout";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route path={AppRoute.Catalog} element={<CatalogScreen />} />
        <Route path={AppRoute.Product} element={<ProductScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
