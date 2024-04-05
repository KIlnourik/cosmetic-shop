export type Product = {
  name: string,
  type: string,
  skin_type: string[],
  description: string,
  compound: string,
  prices: [
    {
      price: number,
      value: string,
    }
  ],
  isBestSeller: boolean,
};

