import React, { createContext, useContext } from 'react';
import {} from 'next-routes';
import { withRouter, SingletonRouter, WithRouterProps } from 'next/router';

const RouterContext = createContext({} as SingletonRouter);

const Provider: React.FC<WithRouterProps> = ({ router, children }) => (
  <RouterContext.Provider value={router!}>{children}</RouterContext.Provider>
);

export const useRouter = () => useContext(RouterContext);
export const RouterContextProvider = withRouter(Provider);
