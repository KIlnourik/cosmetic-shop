export enum AppRoute {
  Main = '/',
  Catalog = 'catalog',
  Product = '/catalog/:id',
  Cart = '/cart',
  NotFound = '*',
  Auth = '/login',
  Profile = '/:username',
}
