import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ProductProcess } from '../../types/state';
import {
  fetchAllProductsAction,
  fetchProductAction,
  fetchProductsAction,
} from '../api-actions';

const initialState: ProductProcess = {
  products: [],
  allProducts: [],
  product: undefined,
  isProductsLoading: false,
  isAllProductsLoading: false,
  isPromoLoading: false,
  isProductLoading: false,
  isSimilarProductsLoading: false,
};

export const productProcess = createSlice({
  name: NameSpace.Product,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.isProductsLoading = true;
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isProductsLoading = false;
      })
      .addCase(fetchProductAction.pending, (state) => {
        state.isProductLoading = true;
      })
      .addCase(fetchProductAction.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isProductLoading = false;
      })
      .addCase(fetchAllProductsAction.pending, (state) => {
        state.isAllProductsLoading = true;
      })
      .addCase(fetchAllProductsAction.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.isAllProductsLoading = false;
      });
  }
});
