import Cart from '../../components/cart/cart';
import { Helmet } from 'react-helmet-async';

function CartPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Maroon: Корзина</title>
      </Helmet>
      <main className="main main_top-spaced catalog-main" >
        <Cart />
      </main>
    </>
  );
}

export default CartPage;
