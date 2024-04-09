import { Filter } from './types/types';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Catalog = '/catalog',
  Product = '/product/:id',
  Cart = '/cart',
  NotFound = '*',
}

export enum FilterType {
  FaceCare = 'face-care',
  BodyCare = 'body-care',
  SkinType = 'skin-type',
}

export const FaceCareTypes = {
  cream: 'Крема',
  serum: 'Сыворотки',
  mask: 'Маски',
  foam: 'Пенки',
  tonic: 'Тоники',
  powder: 'Пудры'
};

export const BodyCareTypes = {
  cream: 'Крема',
  oil: 'Масла',
  scrub: 'Скрабы',
  soap: 'Мыло',
  bomb: 'Бомбочка для ванны',
  salt: 'Соль для ванны',
};
export const SkinTypes = {
  normal: 'Нормальная',
  dry: 'Сухая',
  oily: 'Жирная',
  combined: 'Комбинированная'
};

export const NAMES = ['clean', 'coconut', 'earth', 'high', 'lavender', 'lotos', 'milk', 'paradise', 'rest', 'rose', 'sun', 'violet'];
export const MEASURES = ['ml', 'mg'];

export const CatalogFilters: Filter[] = [
  {
    name: 'face-care',
    title: 'Уход для лица',
    items: FaceCareTypes,
  },
  {
    name: 'body-care',
    title: 'Уход для тела',
    items: BodyCareTypes,
  },
  {
    name: 'skin-type',
    title: 'Тип кожи',
    items: SkinTypes,
  },
];

export const MOBILE_MAX_WIDTH = 767;
export const FILTER_HIDDEN_CLASS = 'catalog-head_filter-hidden';
