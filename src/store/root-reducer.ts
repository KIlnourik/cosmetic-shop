import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cameraProcess } from './product-process/product-process';
import { cartProcess } from './cart-process/cart-process';
import { couponProcess } from './coupon-process/coupon-process';
import { orderProcess } from './order-process/order-process';

export const rootReducer = combineReducers({
  [NameSpace.Product]: cameraProcess.reducer,
  [NameSpace.Cart]: cartProcess.reducer,
  [NameSpace.Coupon]: couponProcess.reducer,
  [NameSpace.Order]: orderProcess.reducer,
});