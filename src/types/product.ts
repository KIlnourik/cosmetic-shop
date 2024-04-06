export type Price = {
  price: number,
  value: string,
};

export type Product = {
  name: string,
  type: string,
  skin_type: string[],
  description: string,
  compound: string,
  prices: Price[],
  isBestSeller: boolean,
  previewImage: string,
  image: string,
};
