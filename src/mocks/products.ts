import { faker } from '@faker-js/faker';
import { Product, Price } from '../types/product';
import { NAMES, MEASURES } from '../const';

const FACE_CARE_TYPES = ['крем','сыворотка','маска','пенка','тоник','пудра'];
const BODY_CARE_TYPES = ['крем','масло','скраб','мыло','бомбочка для ванны','соль для ванны'];
const SKIN_TYPES = ['нормальная','сухая','жирная','комбинированная'];
const TYPES = [FACE_CARE_TYPES, BODY_CARE_TYPES];

const getRandomItems = <T>(item: T, length: number): T[] => {
  const items = [];
  for (let i = 0; i < length; i++) {
    items.push(item);
  }
  return items;
};

const createRandomPrice = (): Price => {
  return {
    price: faker.number.int({ min: 100, max: 1000 }),
    value: `${faker.number.int({ min: 1, max: 50 }) * 10}${MEASURES[faker.number.int({ min: 0, max: MEASURES.length - 1 })]}`,
  }
};

const createPrices = (length: number): Price[] => {
  const prices: Price[] = [];
  for (let i = 0; i < length; i++) {
    prices.push(createRandomPrice());
  }
  return prices;
};


const createProduct = (): Product => {
  const skinTypes = getRandomItems(
    SKIN_TYPES[faker.number.int({ min: 0, max: SKIN_TYPES.length - 1 })],
    faker.number.int({ min: 0, max: 4 }));

  const productName = NAMES[faker.number.int({ min: 0, max: NAMES.length - 1 })];

  return {
    id: faker.number.int({min: 1, max: 100000}),
    name: productName,
    type: TYPES[faker.number.int({ min: 0, max: TYPES.length - 1 })][faker.number.int({ min: 0, max: FACE_CARE_TYPES.length - 1 })],
    skinType: skinTypes,
    description: faker.lorem.sentences(),
    compound: faker.lorem.sentences(),
    howToUse: faker.lorem.sentences(),
    prices: createPrices(faker.number.int({ min: 1, max: 2 })),
    isBestSeller: faker.datatype.boolean(),
    previewImage: `/img/catalog/${productName}`,
    image: `/img/catalog/${productName}`,
  }
};

const createProducts = (length: number): Product[] => {
  const products: Product[] = [];
  for (let i = 0; i < length; i++) {
    products.push(createProduct());
  }
  return products;
};

export const products: Product[] = createProducts(faker.number.int({min: 0, max: 10}));
