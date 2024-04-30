import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { AppDispatch, Coupon, State } from '../types/state';
import { Product } from '../types/product';
import { URLSearchParams } from 'url';
import { OrderPost } from '../types/order-post';

export const fetchProductsAction = createAsyncThunk<Product[], URLSearchParams, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchProducts',
  async (params, { extra: api }) => {
    const { data } = await api.get<Product[]>(`${APIRoute.Products}?`, { params: params });
    return data;
  });

export const fetchAllProductsAction = createAsyncThunk<Product[], void, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAllProducts',
  async (_args, { extra: api }) => {
    const { data } = await api.get<Product[]>(APIRoute.Products);
    return data;
  },
);

export const fetchProductAction = createAsyncThunk<Product, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchProduct',
  async (productId, { extra: api }) => {
    const { data } = await api.get<Product>(`${APIRoute.Products}/${productId}`);
    return data;
  }
);

export const fetchCouponsAction = createAsyncThunk<Coupon[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/couponPost',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Coupon[]>(APIRoute.Coupons);
    return data;
  }
);

export const sendOrderAction = createAsyncThunk<void, OrderPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/orderPost',
  async ({ products, coupon, totalPrice }, { extra: api }) => {
    await api.post<number>(APIRoute.Orders, { products, coupon, totalPrice });
  }
);
