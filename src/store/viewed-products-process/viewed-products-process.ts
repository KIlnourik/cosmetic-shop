import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ViewedProductsProcess } from '../../types/state';
import { Product } from '../../types/product';

const initialState: ViewedProductsProcess = {
  viewedProducts: []
};

export const viewedProductsProcess = createSlice({
  name: NameSpace.ViewedProducts,
  initialState,
  reducers: {
    addToViewedProducts: (state, action: PayloadAction<Product>) => {
      state.viewedProducts.push(action.payload);
      const arr = Array.from(new Set(state.viewedProducts.map((prod) => JSON.stringify(prod))));
      state.viewedProducts = arr.map((prod) => JSON.parse(prod));
      console.log(state.viewedProducts);
    },
    resetViewedProducts: (state) => {
      state.viewedProducts = [];
    }
  },
});

export const { addToViewedProducts, resetViewedProducts } = viewedProductsProcess.actions;
