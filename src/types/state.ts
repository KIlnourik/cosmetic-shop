import { AuthStatus } from '../const';
import { store } from '../store/index';
import { Product } from './product';
import { UserData } from './user-data';

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

export type CartProduct = {
  product: Product,
  count: number,
}

export type CartProcess = {
  cartProducts: CartProduct[];
}

export type Coupon = {
  coupon?: string;
  discountValue?: number;
}

export type CouponProcess = {
  coupons: Coupon[];
  coupon?: Coupon;
  isCouponsLoading: boolean;
}

export type OrderProcess = {
  orderStatus?: boolean;
}

export type ViewedProductsProcess = {
  viewedProducts: Product[]
}

export type UserProcess = {
  authStatus: AuthStatus;
  userData?: UserData;
}
