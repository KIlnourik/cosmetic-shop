export enum AppRoute {
  Main = '/',
  Catalog = 'catalog',
  Product = '/catalog/:id',
  Cart = '/cart',
  NotFound = '*',
  Auth = '/login',
  Profile = '/:username',
}

export const SOCIAL_ITEMS: string[] = ['facebook', 'instagram', 'twitter'];

export const HEADER_NAV_ITEMS: string[] = ['Каталог', 'О нас', 'Контакты'];

export const FOOTER_NAV_ITEMS: string[] = ['Каталог', 'О нас', 'Магазины', 'Контакты'];

export const INTRO_ITEMS: string[] = ['Уход для лица', 'Уход для тела'];
