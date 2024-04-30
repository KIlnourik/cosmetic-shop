import { store } from '../store/index';
import { Product } from './product';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ProductProcess = {
  products: Product[];
  allProducts: Product[];
  product?: Product;
  isProductsLoading: boolean;
  isAllProductsLoading: boolean;
  isProductLoading: boolean;
  isError: boolean
}

export type CartProcess = {
  cartProducts: Product[];
}

export type Coupon = {
  coupon?: string;
  discountValue?: number;
}

export type CouponProcess = {
  coupons: Coupon[];
  coupon?: Coupon;
  isCouponsLoading: boolean;
  isValidCoupon?: boolean;
}

export type OrderProcess = {
  orderStatus?: boolean;
}

export type ViewedProductsProcess = {
  viewedProducts: Product[]
}
