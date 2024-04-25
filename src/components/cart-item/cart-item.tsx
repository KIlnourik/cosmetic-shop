import { Divider, Grid, IconButton, Input, ListItem, Typography } from '@mui/material';
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import { Unstable_NumberInput as BaseNumberInput, NumberInputProps } from '@mui/base';
import { Add, DeleteOutline, Remove } from '@mui/icons-material';
import { styled } from '@mui/system';
import { Product } from '../../types/product';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCartProducts } from '../../store/cart-process/selector';
import { addToCart, decreaseProducts, removeProduct, setProductsCount } from '../../store/cart-process/cart-process';
import { getProductTitle } from '../../utils/utils';
import { ProductCount } from '../../const';

type Props = {
  product: Product;
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

const NumberInput = forwardRef((
  props: NumberInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        input: {
          ref: ref,
        },
        incrementButton: {
          children: <Add fontSize="small" />,
          className: 'increment',
        },
        decrementButton: {
          children: <Remove fontSize="small" />,
        },
      }}
      {...props}
    />
  );
});

const getProductCount = (cartProducts: Product[], product: Product) =>
  cartProducts.filter(prod => prod.id === product.id).length;

function CartItem({ product }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(getCartProducts);
  const [productCount, setProductCount] = useState(getProductCount(cartProducts, product));
  const [totalPrice, setTotalPrice] = useState(product.price);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    if (inputRef.current?.value) {
      if (inputRef.current?.valueAsNumber < ProductCount.MinCount) {
        inputRef.current.value = ProductCount.MinCount.toString();
        setTotalPrice(product.price * inputRef.current.valueAsNumber);
      }
      if (inputRef.current?.valueAsNumber > ProductCount.MaxCount) {
        inputRef.current.value = ProductCount.MaxCount.toString();
        setTotalPrice(product.price * inputRef.current.valueAsNumber);
      }
      dispatch(setProductsCount(product));
    }
    if (inputRef.current?.value === '') {
      inputRef.current.value = productCount.toString();
      setTotalPrice(product.price * inputRef.current.valueAsNumber);
      dispatch(setProductsCount(product));
    }
  };

  const handlePlusBtnClick = () => {
    dispatch(addToCart(product));
  };

  const handleMinusBtnClick = () => {
    dispatch(decreaseProducts(product));
  };

  const handleRemoveBtnClick = () => {
    dispatch(removeProduct(product));
  };

  useEffect(() => {
    setProductCount(getProductCount(cartProducts, product));

    if (inputRef.current !== null) {
      inputRef.current.value = productCount.toString();
      setTotalPrice(productCount * product.price);
    }

  }, [cartProducts, dispatch, product, productCount]);

  return (
    <>
      <ListItem sx={{ minHeight: 100, maxHeight: 240 }}>
        <Grid container spacing={6} sx={{
          alignContent: 'center'
        }} >
          <Grid item xs={12} sm={5} md={5}>
            <Typography component='p' variant='h5'>
              {getProductTitle(product.type, product.name)}
            </Typography>
          </Grid>
          <Grid item xs={8} sm={4} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <IconButton onClick={handleMinusBtnClick}>
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
              onChange={handleInputChange} />
            <IconButton onClick={handlePlusBtnClick}>
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
