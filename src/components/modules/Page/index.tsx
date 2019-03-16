import React from 'react';
import MobileNav from './components/MobileNav';

const Page: React.FC = ({ children }) => (
  <main>
    <MobileNav />
    {children}
  </main>
);

export default Page;
