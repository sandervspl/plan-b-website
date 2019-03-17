import React from 'react';
import MobileNav from './MobileNav';

const Page: React.FC = ({ children }) => (
  <main>
    <MobileNav />
    {children}
  </main>
);

export default Page;
