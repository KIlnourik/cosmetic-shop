import { faker } from '@faker-js/faker';
import { Product } from '../types/product';
import { NAMES, MEASURES, CareTypes } from '../const';
import { CareType } from '../types/types';

const FaceCareType = [
  {
    title: 'крем',
    value: 'cream',
  },
  {
    title: 'сыворотка',
    value: 'serum',
  },
  {
    title: 'маска',
    value: 'mask',
  },
  {
    title: 'пенка',
    value: 'foam',
  },
  {
    title: 'тоник',
    value: 'tonik',
  },
  {
    title: 'пудра',
    value: 'powder',
  },
];

const BodyCareType = [
  {
    title: 'крем',
    value: 'cream',
  },
  {
    title: 'масло',
    value: 'oil',
  },
  {
    title: 'скраб',
    value: 'scrub',
  },
  {
    title: 'мыло',
    value: 'soap',
  },
  {
    title: 'бомбочка для ванны',
    value: 'bomb',
  },
  {
    title: 'соль для ванны',
    value: 'salt',
  },
];
const SKIN_TYPES = ['нормальная', 'сухая', 'жирная', 'комбинированная'];
const CATEGORIES  = [FaceCareType, BodyCareType];

const skinTypes = (length: number): string[] => {
  const items: string[] = [];
  for (let i = 0; i < length; i++) {
    const index: number = faker.number.int({ min: 0, max: SKIN_TYPES.length - 1 });
    const item: string = SKIN_TYPES[index];

    if (!items.includes(item)) { items.push(item); }
  }
  return items;
}

const createSPF = (productType: string) => {
  if (productType === 'cream') { return faker.datatype.boolean() }
  return false;
};

const createCategorie = (): string => {
  const careType: CareType = CareTypes[faker.number.int({ min: 0, max: CareTypes.length - 1 })];
  return careType.name.split('-')[0];
};

const createProduct = (): Product => {
  const name = NAMES[faker.number.int({ min: 0, max: NAMES.length - 1 })];
  const randomType = CATEGORIES[faker.number.int({ min: 0, max: CATEGORIES.length - 1 })][faker.number.int({ min: 0, max: FaceCareType.length - 1 })]
  const subCategorie = createCategorie();

  return {
    id: faker.number.int({ min: 1, max: 100000 }),
    name,
    categorieRus: randomType.title,
    categorie: `${subCategorie}-${randomType.value}`,
    skinType: skinTypes(faker.number.int({ min: 1, max: SKIN_TYPES.length - 1 })),
    description: faker.lorem.sentences(),
    compound: faker.lorem.sentences(),
    howToUse: faker.lorem.sentences(),
    price: faker.number.int({ min: 10, max: 100 }) * 10,
    volume: `${faker.number.int({ min: 1, max: 50 }) * 10} ${MEASURES[faker.number.int({ min: 0, max: MEASURES.length - 1 })]}`,
    isBestSeller: faker.datatype.boolean(),
    isSPF: createSPF(randomType.value),
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
