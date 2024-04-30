import { CartProduct, State } from '../../types/state';
import { NameSpace } from '../../const';

export const getCartProducts = (state: State): CartProduct[] => state[NameSpace.Cart].cartProducts;
