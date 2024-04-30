import { NameSpace } from '../../const';
import { Coupon, State } from '../../types/state';

export const getCoupons = (state: State): Coupon[] => state[NameSpace.Coupon].coupons;
export const getCoupon = (state: State): Coupon | undefined => state[NameSpace.Coupon].coupon;
export const getCouponLoadingStatus = (state: State): boolean | undefined => state[NameSpace.Coupon].isCouponsLoading;
