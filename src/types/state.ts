import { store } from '../store/index';
import { Product } from './product';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ProductProcess = {
  products: Product[];
  allProducts: Product[];
  product: Product| undefined;
  isProductsLoading: boolean;
  isAllProductsLoading: boolean;
  isPromoLoading: boolean;
  isProductLoading: boolean;
  isSimilarProductsLoading: boolean;
}

export type CartProcess = {
  cartProducts: Product[];
}

export type CouponResponse = {
  discount?: number;
  coupon?: string;
};

export type CouponProcess = {
  discountValue?: number;
  isValidCoupon?: boolean;
  validCoupon?: string;
}

export type OrderProcess = {
  orderStatus?: boolean;
}
