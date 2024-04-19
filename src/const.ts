import { CareType } from './types/types';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Register = '/register',
  Catalog = '/products',
  Product = '/products/:id',
  Cart = '/cart',
  NotFound = '*',
}

export enum NameSpace {
  Product = 'Product',
  Cart = 'Cart',
  Coupon = 'Coupon',
  Order = 'Order'
}

export enum APIRoute {
  Products = '/products',
  Users = '/users',
  Auth = '/auth',
  Register = '/register',
  Orders = '/orders',
  Coupons = '/coupons',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FilterType {
  FaceCare = 'face-care',
  BodyCare = 'body-care',
  SkinType = 'skin-type',
}

export enum AccordeonToggleClass {
  Open = 'accordion_opened',
  Close = 'accordion_closed',
}

export enum SideCatalogType {
  History = 'Вы недавно смотрели',
  Similar = 'Вам также может понравиться',
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
export const SkinTypes =
{
  name: 'skin-type',
  title: 'Тип кожи',
  items: {
    normal: 'Нормальная',
    dry: 'Сухая',
    oily: 'Жирная',
    combined: 'Комбинированная'
  },
};

export const NAMES = ['clean', 'coconut', 'earth', 'high', 'lavender', 'lotos', 'milk', 'paradise', 'rest', 'rose', 'sun', 'violet'];
export const MEASURES = ['ml', 'mg'];

export const CareTypes: CareType[] = [
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
];

export const MOBILE_MAX_WIDTH = 767;
export const FILTER_HIDDEN_CLASS = 'catalog-head_filter-hidden';
export const MAX_PRODUCT_CARDS_PER_PAGE = 10;

export const API_URL = 'https://3cc41ccb27963c31.mokky.dev';
export const REQUEST_TIMEOUT = 5000;

export const SIDE_CATALOG_PER_PAGE_COUNT = 4;
export const CATALOG_PER_PAGE_COUNT = 12;
