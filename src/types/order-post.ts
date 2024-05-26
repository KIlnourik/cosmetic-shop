export type OrderCartProduct = {
  productId: number,
  name: string,
  categorie: string,
  categorieRus: string,
  volume: string,
  count: number
}

export type OrderPost = {
  userId: number,
  date: string,
  products: OrderCartProduct[],
  coupon: string | null | undefined,
  totalPrice: number,
}

export type Order = {
  id: number,
  userId: number,
  date: string,
  products: OrderCartProduct[],
  totalPrice: number,
}
