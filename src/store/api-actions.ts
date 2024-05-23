import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AUTH_TOKEN_KEY_NAME, AppRoute } from '../const';
import { AppDispatch, Coupon, State } from '../types/state';
import { Product } from '../types/product';
import { AuthData } from '../types/auth-data';
import { RegisterData } from '../types/register-data';
import { UserData, UserResponse } from '../types/user-data';
import { URLSearchParams } from 'url';
import { OrderPost } from '../types/order-post';
import { saveToken, dropToken, getToken } from '../services/token';
import { redirectToRoute } from './action';

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

export const registerUserAction = createAsyncThunk<UserData, RegisterData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/register',
  async (registerData, { dispatch, extra: api }) => {
    const { data } = await api.post<UserResponse>(APIRoute.Register, { ...registerData });
    saveToken(data?.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data?.data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_args, { extra: api }) => {
    const token = getToken();
    await api.get(APIRoute.CheckAuth, {
      headers: {
        Authorization: `${AUTH_TOKEN_KEY_NAME} ${token}`
      }
    });
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (loginData, { dispatch, extra: api }) => {
    const { data } = await api.post<UserResponse>(APIRoute.Auth, { ...loginData });
    saveToken(data?.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data?.data;
  },
);

// export const logoutAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'user/logout',
//   async (_arg, { extra: api }) => {
//     await api.delete(APIRoute.Logout);
//     dropToken();
//   },
// );
