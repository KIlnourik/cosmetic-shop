import { faker } from '@faker-js/faker';
import { Product, Volume } from '../types/product';
import { NAMES, MEASURES, CareTypes } from '../const';
import { CareType } from '../types/types';

const FACE_CARE_TYPES = ['крем', 'сыворотка', 'маска', 'пенка', 'тоник', 'пудра'];
const BODY_CARE_TYPES = ['крем', 'масло', 'скраб', 'мыло', 'бомбочка для ванны', 'соль для ванны'];
const SKIN_TYPES = ['нормальная', 'сухая', 'жирная', 'комбинированная'];
const TYPES = [FACE_CARE_TYPES, BODY_CARE_TYPES];

const createRandomPrices = (length: number): number[] => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(faker.number.int({ min: 10, max: 100 }) * 10);
  }
  return result.sort((a, b) => a - b);
};

const createRandomVolumes = (length: number): string[] => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(faker.number.int({ min: 1, max: 50 }) * 10);
  }
  const measure = MEASURES[faker.number.int({ min: 0, max: MEASURES.length - 1 })];
  const sortedFormattedResult = result.sort((a, b) => a - b).map((item) => `${item} ${measure}`);

  return sortedFormattedResult;
};

const createVolumes = (length: number): Volume[] => {
  const volumes: Volume[] = [];
  const randomVolumes = createRandomVolumes(length);
  const randomPrices = createRandomPrices(length);
  for (let i = 0; i < length; i++) {
    volumes.push(
      {
        price: randomPrices[i],
        volume: randomVolumes[i],
      }
    );
  }
  return volumes;
};

const skinTypes = (length: number): string[] => {
  const items: string[] = [];
  for (let i = 0; i < length; i++) {
    const index: number = faker.number.int({ min: 1, max: SKIN_TYPES.length - 1 });
    const item: string = SKIN_TYPES[index];

    if (!items.includes(item)) {
      items.push(item);
    }
  }
  return items;
}

const createSPF = (type: CareType) => {
  if (type.name in CareTypes) { return faker.datatype.boolean() }
  return false;
};

const createProduct = (): Product => {
  const name = NAMES[faker.number.int({ min: 0, max: NAMES.length - 1 })];
  const careType = CareTypes[faker.number.int({ min: 0, max: CareTypes.length - 1 })];

  return {
    id: faker.number.int({ min: 1, max: 100000 }),
    name,
    type: TYPES[faker.number.int({ min: 0, max: TYPES.length - 1 })][faker.number.int({ min: 0, max: FACE_CARE_TYPES.length - 1 })],
    careType,
    skinType: skinTypes(faker.number.int({ min: 1, max: SKIN_TYPES.length - 1 })),
    description: faker.lorem.sentences(),
    compound: faker.lorem.sentences(),
    howToUse: faker.lorem.sentences(),
    volumes: createVolumes(faker.number.int({ min: 1, max: 2 })),
    isBestSeller: faker.datatype.boolean(),
    isSPF: createSPF(careType),
    previewImage: `/img/catalog/${name}`,
    image: `/img/catalog/${name}`,
  }
};

const createProducts = (length: number): Product[] => {
  const products: Product[] = [];
  for (let i = 0; i < length; i++) {
    products.push(createProduct());
  }

  return products;
};

export const products: Product[] = createProducts(40);
