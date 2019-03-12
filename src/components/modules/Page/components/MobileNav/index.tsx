import React, { useState } from 'react';
import { MobileNavContainer } from './styled';
import Hamburger from '../Hamburger';

const MobileNav: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <MobileNavContainer>
      <Hamburger onClick={() => setOpen(!open)} active={open} />
    </MobileNavContainer>
  );
};

export type Props = {

};

export default MobileNav;
