import { faker } from '@faker-js/faker';
import { Product } from '../types/product';
import { NAMES, MEASURES, CareTypes } from '../const';
import { CareType } from '../types/types';

const FACE_CARE_TYPES = ['крем', 'сыворотка', 'маска', 'пенка', 'тоник', 'пудра'];
const BODY_CARE_TYPES = ['крем', 'масло', 'скраб', 'мыло', 'бомбочка для ванны', 'соль для ванны'];
const SKIN_TYPES = ['нормальная', 'сухая', 'жирная', 'комбинированная'];
const TYPES = [FACE_CARE_TYPES, BODY_CARE_TYPES];

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
    price: faker.number.int({ min: 10, max: 100 }) * 10,
    volume: `${faker.number.int({ min: 1, max: 50 }) * 10} ${MEASURES[faker.number.int({ min: 0, max: MEASURES.length - 1 })]}`,
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

export const products: Product[] = createProducts(100);
