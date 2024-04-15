import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CartProcess } from '../../types/state';
import { Product } from '../../types/product';

const initialState: CartProcess = {
  cartProducts: []
};

const sortProducts = (a:Product, b:Product) => {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
};

export const cartProcess = createSlice({
  name: NameSpace.Cart,
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cartProducts.push(action.payload);
      state.cartProducts.sort(sortProducts);
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.cartProducts = [...state.cartProducts].filter((product) => product.id !== action.payload.id);
    },
    decreaseProducts: (state, action: PayloadAction<Product>) => {
      const index = state.cartProducts.findIndex((product) => product.id === action.payload.id);
      state.cartProducts.splice(index, 1);
    },
    setProductsCount: (state, action: PayloadAction<Product[]>) => {
      state.cartProducts = [...state.cartProducts].filter((product) => product.id !== action.payload[0].id);
      state.cartProducts.push(...action.payload);
      state.cartProducts.sort(sortProducts);
    },
    resetCart: (state) => {
      state.cartProducts = [];
    }
  },
});

export const { addToCart, removeProduct, decreaseProducts, setProductsCount, resetCart } = cartProcess.actions;
