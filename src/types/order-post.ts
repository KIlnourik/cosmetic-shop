import { CartProduct, Coupon } from './state';

export type OrderCartProducts = {
  productId: number,
  count: number
}

export type OrderPost = {
  products: OrderCartProducts[],
  coupon: string | null | undefined,
  totalPrice: number,
}
