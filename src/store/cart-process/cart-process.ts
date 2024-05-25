import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CartProcess, CartProduct } from '../../types/state';
import { sortProducts } from '../../utils/utils';

const initialState: CartProcess = {
  cartProducts: [],
};

export const cartProcess = createSlice({
  name: NameSpace.Cart,
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      state.cartProducts.push(action.payload);
      state.cartProducts.sort(sortProducts);
    },
    removeProduct: (state, action: PayloadAction<CartProduct>) => {
      state.cartProducts = [...state.cartProducts].filter(product => product.product.id !== action.payload.product.id);
    },
    increaseProducts: (state, action: PayloadAction<CartProduct>) => {
      state.cartProducts.forEach((product) => {
        if (product.product.id === action.payload.product.id && product.count < 90) {
          product.count += 1;
        }
      })
    },
    decreaseProducts: (state, action: PayloadAction<CartProduct>) => {
      state.cartProducts.forEach((product) => {
        if (product.product.id === action.payload.product.id && product.count > 1) {
          product.count -= 1;
        }
      })
    },
    setProductsCount: (state, action) => {
      const { productId, count } = action.payload;
      state.cartProducts.forEach((product) => {
        if (product.product.id === productId) {
          product.count = count;
        }
      })
    },
    resetCart: (state) => {
      state.cartProducts = [];
      console.log('HUY');
    }
  },
});

export const {
  addToCart,
  removeProduct,
  increaseProducts,
  decreaseProducts,
  setProductsCount,
  resetCart
} = cartProcess.actions;
