import { CareType } from "./types";

export type Volume = {
  price: number,
  volume: string,
};

export type Product = {
  id: number,
  name: string,
  type: string,
  careType: CareType,
  skinType: string[],
  description: string,
  compound: string,
  howToUse: string,
  volumes: Volume[],
  isBestSeller: boolean,
  isSPF: boolean,
  previewImage: string,
  image: string,
};
