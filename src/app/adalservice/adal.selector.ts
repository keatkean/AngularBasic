import { createSelector } from '@ngrx/store';
import {selectAuthState} from './adal.state';

export const selectAuth = createSelector(selectAuthState, (state: AuthState) => state);

export const selectIsAuthenticated = createSelector(selectAuthState, (state: AuthState) => state.isAuthenticated
);
export interface AuthState {
  isAuthenticated: boolean;
}
