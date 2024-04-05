export enum AppRoute {
  Root = '/',
  Login = '/login',
  Catalog = '/catalog',
  Product = '/product/:id',
  Cart = '/cart',
  NotFound = '*',
}

export const FACE_CARE_TYPES = ['крем', 'сыворотка', 'маска', 'пенка', 'тоник', 'пудра'];
export const BODY_CARE_TYPES = ['крем', 'масло', 'скраб', 'мыло', 'бомбочка для ванны', 'соль для ванны'];
export const SKIN_TYPES = ['нормальная', 'сухая', 'жирная', 'комбинированная'];
