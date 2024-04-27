import CartItem from '../cart-item/cart-item';
import { useAppSelector } from '../../hooks';
import { getCartProducts } from '../../store/cart-process/selector';
import { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import { Divider, List } from '@mui/material';

const getUniqueProducts = (products: Product[]) => {
  const uniqueProductsList = Array.from(new Set(products.map((product) => JSON.stringify(product))));
  return uniqueProductsList.map((product) => JSON.parse(product) as Product);
};

function CartList(): JSX.Element {
  const cartProducts = useAppSelector(getCartProducts);
  const [uniqueProducts, setUniqueProducts] = useState<Product[]>([]);

  useEffect(() => {
    setUniqueProducts(getUniqueProducts(cartProducts));
  }, [cartProducts]);

  return (
    <List
      component={'ul'}
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: 1200,
        mt: 5,
        flexGrow: 1,
         display: 'block'
      }}
    >
      <Divider />
      {
        uniqueProducts.map((product, index) => (
          <CartItem product={product} key={`${index}${product.id}`} />
        ))
      }
    </List>
  );
}

export default CartList;
