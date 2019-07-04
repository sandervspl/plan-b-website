export { WithRouterProps, SingletonRouter } from 'next/router';

export type ValueOf<T> = T[keyof T];

export type VisibilityProps = {
  isVisible: boolean;
}

export type HexCode = string;
export type Percentage = number;
