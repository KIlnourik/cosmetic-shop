import { Divider, Grid, IconButton, Input, ListItem, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Add, DeleteOutline, Remove } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getCartProducts } from '../../../store/cart-process/selector';
import { decreaseProducts, increaseProducts, removeProduct, setProductsCount } from '../../../store/cart-process/cart-process';
import { getProductTitle } from '../../../utils/utils';
import { ProductCount } from '../../../const';
import { CartProduct } from '../../../types/state';

type Props = {
  cartProduct: CartProduct;
}

const StyledInputRoot = styled('div')(
  () => `
  font-family: "Mplus", "Arial", sans-serif;
  color: #122947;

  &:before,
  &:after {
    border-bottom: none
  }
`,
);

const StyledInput = styled('input')(
  () => `
  font-size: 0.875rem;
  font-family: "Mplus", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.375;
  color: #122947;
  background: #fff;
  border: 1px solid #b3bac1;
  border-radius: 2px;

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
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`,
);

function CartItem({ cartProduct }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(getCartProducts);
  const [productCount, setProductCount] = useState(cartProduct.count);
  const [totalPrice, setTotalPrice] = useState(cartProduct.product.price);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    if (inputRef.current?.value) {
      if (inputRef.current?.valueAsNumber < ProductCount.MinCount) {
        inputRef.current.value = ProductCount.MinCount.toString();
        setTotalPrice(cartProduct.product.price * inputRef.current.valueAsNumber);
      }
      if (inputRef.current?.valueAsNumber > ProductCount.MaxCount) {
        inputRef.current.value = ProductCount.MaxCount.toString();
        setTotalPrice(cartProduct.product.price * inputRef.current.valueAsNumber);
      }
      dispatch(setProductsCount({ productId: cartProduct.product.id, count: inputRef.current?.valueAsNumber }));
    }
    if (inputRef.current?.value === '') {
      inputRef.current.value = productCount.toString();
      setTotalPrice(cartProduct.product.price * inputRef.current.valueAsNumber);
      dispatch(setProductsCount({ productId: cartProduct.product.id, count: inputRef.current?.valueAsNumber }));
    }
  };

  const handlePlusBtnClick = () => {
    dispatch(increaseProducts(cartProduct));
  };

  const handleMinusBtnClick = () => {
    dispatch(decreaseProducts(cartProduct));
  };

  const handleRemoveBtnClick = () => {
    dispatch(removeProduct(cartProduct));
  };

  useEffect(() => {
    setProductCount(cartProduct.count);

    if (inputRef.current !== null) {
      inputRef.current.value = productCount.toString();
      setTotalPrice(productCount * cartProduct.product.price);
    }

  }, [cartProducts, dispatch, productCount]);

  return (
    <>
      <ListItem sx={{ minHeight: 100, maxHeight: 240 }}>
        <Grid container spacing={6} sx={{
          alignContent: 'center'
        }} >
          <Grid item xs={12} sm={5} md={5}>
            <Typography component='p' variant='h5'>
              {getProductTitle(cartProduct.product.categorieRus, cartProduct.product.name)}, {cartProduct.product.volume}
            </Typography>
          </Grid>
          <Grid item xs={8} sm={4} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <IconButton onClick={handleMinusBtnClick} disabled={productCount === ProductCount.MinCount}>
              <Remove fontSize="small" />
            </IconButton>
            <Input
              type='number'
              aria-label='Количество товара'
              slots={{
                root: StyledInputRoot,
                input: StyledInput
              }}
              inputRef={inputRef}
              onInput={handleInputChange} />
            <IconButton onClick={handlePlusBtnClick} disabled={productCount === ProductCount.MaxCount}>
              <Add fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Typography component={'p'} variant='h5'>
              {totalPrice} &#x20bd;
            </Typography>
          </Grid>
          <Grid item xs={12} sm={1} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
          }}>
            <IconButton onClick={handleRemoveBtnClick}>
              <DeleteOutline />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  );
}

export default CartItem;
