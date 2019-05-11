export { WithRouterProps, SingletonRouter } from 'next/router';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type VisibilityProps = {
  isVisible: boolean;
}
