import { FilterType } from './types/types';

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
  Order = 'Order',
  ViewedProducts = 'ViewedProducts'
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

export enum AccordeonToggleClass {
  Open = 'accordion_opened',
  Close = 'accordion_closed',
}

export enum SideCatalogType {
  History = 'Вы недавно смотрели',
  Similar = 'Вам также может понравиться',
}

export enum ProductCount {
  MinCount = 1,
  MaxCount = 99
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

export const SkinTypes: FilterType =
{
  name: 'skinType',
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

export const CareTypes: FilterType[] = [
  {
    name: 'face',
    title: 'Уход для лица',
    items: FaceCareTypes,
  },
  {
    name: 'body',
    title: 'Уход для тела',
    items: BodyCareTypes,
  },
];

export const AdditionalFilters: FilterType = {
  name: 'additional',
  title: 'Дополнительно',
  items: {
    isSPF: 'Солнцезащитные крема (с SPF)',
    isBestSeller: 'Бестселлеры'
  }
};

export const MOBILE_MAX_WIDTH = 767;
export const FILTER_HIDDEN_CLASS = 'catalog-head_filter-hidden';
export const MAX_PRODUCT_CARDS_PER_PAGE = 10;

export const API_URL = 'https://3cc41ccb27963c31.mokky.dev';
export const REQUEST_TIMEOUT = 5000;

export const SIDE_CATALOG_PER_PAGE_COUNT = 4;
export const CATALOG_PER_PAGE_COUNT = 12;
