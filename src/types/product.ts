export type Price = {
  price: number,
  value: string,
};

export type Product = {
  id: number,
  name: string,
  type: string,
  skinType: string[],
  description: string,
  compound: string,
  howToUse: string,
  prices: Price[],
  isBestSeller: boolean,
  previewImage: string,
  image: string,
};
