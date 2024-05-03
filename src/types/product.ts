import { ProductCareType, ProductType } from './types';

export type Product = {
  id: number,
  name: string,
  type: ProductType,
  careType: ProductCareType,
  skinType: string[],
  description: string,
  compound: string,
  howToUse: string,
  price: number,
  volume: string,
  isBestSeller: boolean,
  isSPF: boolean,
  previewImage: string,
  image: string,
};
