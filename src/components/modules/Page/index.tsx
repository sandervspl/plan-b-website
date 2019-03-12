import React from 'react';
import MobileNav from './components/MobileNav';

const Page: React.FC<Props> = ({ children }) => (
  <main>
    <MobileNav />
    {children}
  </main>
);

export type Props = {

};

export default Page;
