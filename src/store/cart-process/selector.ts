import { Product } from '../../types/product';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getCartProducts = (state: State): Product[] => state[NameSpace.Cart].cartProducts;
export const getUniqueProducts = (state: State): Product[] => state[NameSpace.Cart].uniqueProducts;
