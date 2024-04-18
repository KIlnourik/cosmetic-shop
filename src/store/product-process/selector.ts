import { Product } from '../../types/product';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getProducts = (state: State): Product[] => state[NameSpace.Product].products;
export const getProductsLoadingStatus = (state: State): boolean => state[NameSpace.Product].isProductsLoading;
export const getProduct = (state: State): Product | undefined => state[NameSpace.Product].product;
export const getProductLoadingStatus = (state: State): boolean => state[NameSpace.Product].isProductLoading;
export const getAllProducts = (state: State): Product[] => state[NameSpace.Product].allProducts;
export const getAllProductsLoadingStatus = (state: State): boolean => state[NameSpace.Product].isAllProductsLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Product].isError;
