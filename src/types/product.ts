export type Volume = {
  price: number,
  volume: string,
};

export type Product = {
  id: number,
  name: string,
  type: string,
  skinType: string[],
  description: string,
  compound: string,
  howToUse: string,
  volumes: Volume[],
  isBestSeller: boolean,
  previewImage: string,
  image: string,
};
