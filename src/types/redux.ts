/* eslint-disable @typescript-eslint/no-explicit-any */
import * as i from 'types';
import { Store as ReduxStore } from 'redux';
import { ThunkAction as IThunkAction, ThunkDispatch as IThunkDispatch } from 'redux-thunk';
import { MapStateToProps as ReduxMapStateToProps } from 'react-redux';

/*
  Store type
*/
export type Store = ReduxStore<i.ReduxState, i.Action> & {
  dispatch: i.ThunkDispatch;
};

/*
  Shape of a Redux action
  P = shape of payload
*/
export type Action<P = any> = {
  type: string;
  payload?: P;
  error?: boolean;
  meta?: any;
};

/*
  Thunk action type with pre-filled generics
  ReturnType = return type of function
*/
export type ThunkAction<ReturnType = void> = IThunkAction<ReturnType, i.ReduxState, i.ApiHelper, Action>;

/*
  Thunk Dispatch action with pre-filled generics
*/
export type ThunkDispatch = IThunkDispatch<i.ReduxState, {}, i.Action>;

/*
  MapStateToProps type with pre-filled state
  P = component props
  T = state props
*/
export type MapStateToProps<P = any, T = any> = ReduxMapStateToProps<T, P, i.ReduxState>;
