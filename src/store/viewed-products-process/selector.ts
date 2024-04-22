import { Product } from '../../types/product';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getViewedProducts = (state: State): Product[] => state[NameSpace.ViewedProducts].viewedProducts;
