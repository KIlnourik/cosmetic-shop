import { createSlice } from '@reduxjs/toolkit';
import { UserProcess } from '../../types/state';
import { NameSpace, AuthStatus } from '../../const';
import { checkAuthAction, loginAction, registerUserAction } from '../api-actions';

const initialState: UserProcess = {
  authStatus: AuthStatus.Unknown,
  userData: undefined,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.userData = undefined;
      state.authStatus = AuthStatus.NoAuth;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(registerUserAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      });
  }
});

export const {logoutAction} = userProcess.actions;
