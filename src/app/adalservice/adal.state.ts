import { createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { Params } from '@angular/router';


export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);
createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
  >('router');
export interface AppState {
  auth: AuthState;
  router: RouterReducerState<RouterStateUrl>;
}
export interface AuthState {
  isAuthenticated: boolean;
}
export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

