import { NameSpace } from '../../const';
import { Order } from '../../types/order-post';
import { State } from '../../types/state';

export const getOrderStatus = (state: State): boolean | undefined => state[NameSpace.Order].orderStatus;
export const getOrders = (state: State): Order[] => state[NameSpace.Order].orders;
export const getOrdersLoadingStatus = (state: State): boolean => state[NameSpace.Order].isOrderLoading;
