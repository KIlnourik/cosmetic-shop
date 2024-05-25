import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OrderProcess } from '../../types/state';
import { fetchOrdersAction, sendOrderAction} from '../api-actions';

const initialState: OrderProcess = {
  orderStatus: undefined,
  orders: [],
  isOrderLoading: false,
};

export const orderProcess = createSlice({
  name: NameSpace.Order,
  initialState,
  reducers: {
    resetOrderStatus: (state) => {
      state.orderStatus = undefined;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(sendOrderAction.pending, (state) => {
        state.orderStatus = undefined;
      })
      .addCase(sendOrderAction.fulfilled, (state) => {
        state.orderStatus = true;
      })
      .addCase(sendOrderAction.rejected, (state) => {
        state.orderStatus = false;
      })
      .addCase(fetchOrdersAction.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(fetchOrdersAction.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.isOrderLoading = false;
      })
      .addCase(fetchOrdersAction.rejected, (state) => {
        state.isOrderLoading = false;
      });
  },
});

export const {resetOrderStatus} = orderProcess.actions;
