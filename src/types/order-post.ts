export type OrderPost = {
  products: [
    productId: number,
    count: number,
  ],
  coupon: string | null;
  totalPrice: number,
}
