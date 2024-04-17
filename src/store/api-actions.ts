import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { AppDispatch, CouponResponse, State } from '../types/state';
import { Product } from '../types/product';
import { URLSearchParams } from 'url';
import { CouponPost } from '../types/coupon-post';
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
    console.log(data);
    return data;
  }
);

export const validateCouponAction = createAsyncThunk<CouponResponse, CouponPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/couponPost',
  async (coupon, { extra: api }) => {
    const response = await api.post<CouponResponse>(APIRoute.Coupons, { ...coupon });
    const discount = response.data;
    return { discount, ...coupon } as CouponResponse;

  }
);

export const sendOrderAction = createAsyncThunk<void, OrderPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/orderPost',
  async ({ camerasIds, coupon }, { extra: api }) => {
    await api.post<number>(APIRoute.Orders, { camerasIds, coupon });
  }
);
