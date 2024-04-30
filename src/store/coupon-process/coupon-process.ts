import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CouponProcess } from '../../types/state';
import { fetchCouponsAction } from '../api-actions';

const initialState: CouponProcess = {
  coupons: [],
  coupon: undefined,
  isCouponsLoading: false,
};

export const couponProcess = createSlice({
  name: NameSpace.Coupon,
  initialState,
  reducers: {
    resetCoupon: (state) => {
      state.coupon = undefined;
      state.isCouponsLoading = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCouponsAction.pending, (state) => {
        state.isCouponsLoading = true;
      })
      .addCase(fetchCouponsAction.fulfilled, (state, action) => {
        state.coupons = action.payload;
        state.isCouponsLoading = false;
      })
      .addCase(fetchCouponsAction.rejected, (state) => {
        state.isCouponsLoading = false;
      });
  },
});

export const { resetCoupon } = couponProcess.actions;
