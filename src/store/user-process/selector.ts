import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { AuthStatus } from '../../const';
import { UserData } from '../../types/user-data';

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authStatus !== AuthStatus.Unknown;
export const getUserData = (state: State): UserData | undefined => state[NameSpace.User].userData;
