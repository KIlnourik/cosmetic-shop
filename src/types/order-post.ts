export type OrderCartProducts = {
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
  products: OrderCartProducts[],
  coupon: string | null | undefined,
  totalPrice: number,
}

export type Order = {
  userId: number,
  date: string,
  products: OrderCartProducts[],
}
